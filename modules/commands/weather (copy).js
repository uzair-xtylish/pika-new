module.exports.config = {
    name: "weather2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "uzairrajput",
    description: "Check Weather in your City Example: #weather Baguio City",
    commandCategory: "News",
    usages: "[city]",
    cooldowns: 5
};
module.exports.run = async function ({
    api,
    event,
    args,
    utils
}) {
    const axios = require("axios");
    const apikey = "d7e795ae6a0d44aaa8abb1a0a7ac19e4"
    const moment = require("moment-timezone");
    const Canvas = require("canvas");
    const fs = require("fs-extra");
    const area = args.join(" ");
    if (!area) return api.sendMessage(`Please enter the City!`, event.threadID, event.messageID)
    let areaKey, location = {},
        dataWeather;
    if (!fs.existsSync(__dirname + '/cache/bgweather.jpg')) {
        let getbg = (await axios.get(`https://i.imgur.com/1Rx88Te.jpg`, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(__dirname + "/cache/bgweather.jpg", Buffer.from(getbg, "utf-8"));
    }
    if (!fs.existsSync(__dirname + "/cache/Play-Bold.ttf")) {
        let getfont = (await axios.get("https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download", {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(__dirname + "/cache/Play-Bold.ttf", Buffer.from(getfont, "utf-8"));
    };
    try {
        const response = (await axios.get(`https://api.accuweather.com/locations/v1/cities/search.json?q=${encodeURIComponent(area)}&apikey=${apikey}&language=en-us`)).data;
        if (response.length == 0) return api.sendMessage(`This location could not be found!`, event.threadID, event.messageID)
        const data = response[0];
        areaKey = data.Key;
        location = { latitude: data.GeoPosition.Latitude, longitude: data.GeoPosition.Longitude };
    } catch (err) {
        return api.sendMessage(`Something went wrong!!`, event.threadID, event.messageID)
    }
    try {
        dataWeather = (await axios.get(`http://api.accuweather.com/forecasts/v1/daily/10day/${areaKey}?apikey=${apikey}&details=true&language=en`)).data;
    } catch (err) {
        return api.sendMessage(`Something went wrong!!`, event.threadID, event.messageID)
    }

    function convertFtoC(F) { return Math.floor((F - 32) / 1.8); }
    function formatHours(hours) { return moment(hours).tz("Asia/Karachi").format("HH[h]mm[p]"); }
    const dataWeatherDaily = dataWeather.DailyForecasts;
    const dataWeatherToday = dataWeatherDaily[0];
    let msg = `Today's weather now:\n${dataWeather.Headline.Text}` +
        `\n🌡 Lowest - highest temperature: ${convertFtoC(dataWeatherToday.Temperature.Minimum.Value)}°C - ${convertFtoC(dataWeatherToday.Temperature.Maximum.Value)}°C` +
        `\n🌡 Perceived temperature: ${convertFtoC(dataWeatherToday.RealFeelTemperature.Minimum.Value)}°C - ${convertFtoC(dataWeatherToday.RealFeelTemperature.Maximum.Value)}°C` +
        `\n🌅 Sunrise: ${formatHours(dataWeatherToday.Sun.Rise)}` +
        `\n🌄 Sundown ${formatHours(dataWeatherToday.Sun.Set)}` +
        `\n🌃Moon rise: ${formatHours(dataWeatherToday.Moon.Rise)}` +
        `\n🏙️ Moon set: ${formatHours(dataWeatherToday.Moon.Set)}` +
        `\n🌞 Daytime: ${dataWeatherToday.Day.LongPhrase}` +
        `\n🌙 Night: ${dataWeatherToday.Night.LongPhrase}`;
    Canvas.registerFont(__dirname + "/cache/Play-Bold.ttf", { family: "Play-Bold" });
    const bg = await Canvas.loadImage(__dirname + "/cache/bgweather.jpg");
    const {
        width,
        height
    } = bg;
    const canvas = Canvas.createCanvas(width, height);
    const ctx = canvas.getContext(`2d`);
    ctx.drawImage(bg, 0, 0, width, height);
    let X = 100;
    ctx.fillStyle = "#ffffff";
    const data = dataWeather.DailyForecasts.slice(0, 7);
    for (let item of data) {
        const icon = await Canvas.loadImage("http://vortex.accuweather.com/adc2010/images/slate/icons/" + item.Day.Icon + ".svg");
        ctx.drawImage(icon, X, 210, 80, 80);
        ctx.font = "22px Play-Bold";
        const maxC = `${convertFtoC(item.Temperature.Maximum.Value)}°C `;
        ctx.fillText(maxC, X, 366);
        ctx.font = "22px Play-Bold";
        const minC = String(`${convertFtoC(item.Temperature.Minimum.Value)}°C`);
        const day = moment(item.Date).format("DD");
        ctx.fillText(minC, X, 445);
        ctx.fillText(day, X + 20, 140);
        X += 135;
    }
    const pathSaveImg = __dirname + "/cache/weather.jpg";
    fs.writeFileSync(pathSaveImg, canvas.toBuffer());
    return api.sendMessage({
            body: `${msg}`,
            attachment: fs.createReadStream(pathSaveImg)
        }, event.threadID,
        () => fs.unlinkSync(pathSaveImg), event.messageID)

}
