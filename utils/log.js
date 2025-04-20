const chalk = require('chalk');
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
module.exports = (data, option) => {
  switch (option) {
    case "warn":
        console.log(chalk.bold.hex("#ff0000").bold('» 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 « ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff0000").bold('» 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 « ') + data);
      break;
    default:
        console.log(chalk.bold.hex(randomColor()).bold(`${option} ➟ `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex(randomColor()).bold("〈 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 〉") + chalk.bold.hex("#8B8878").bold(data))
      break;
    case "error":
    console.log(chalk.bold.hex(randomColor()).bold("〈 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 〉") + data);
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold("〈 𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿 〉") + chalk.bold.hex(randomColor()).bold(data));
      break;
  }
}
