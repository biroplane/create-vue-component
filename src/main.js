import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import {
  promisify
} from "util";

const readdir = promisify(fs.readdir);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export async function createVueComponent(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  let name = capitalize(options.template)
  let dir = __dirname + path.sep + name;
  console.log("%s Creating component: \t", chalk.green.bold('✔'), name)
  try {
    if (options.folder) {
      //creo la cartella
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        console.log("%s Creating Folder 📂: \t", chalk.green.bold('✔'))
      } else {
        console.log("%s Folder alreeady exists 📂:\t ", chalk.yellow.bold('⚠'), name)
      }

    }
    let vueContent = `
    <template src="./${name}.html"></template>
    <script src="./${name}.js"></script>
    <script src="./${name}.ctrl.js"></script>
    <style src="./${name}.scss" lang="scss"></style>
    `
    let jsContent = `export default {}`
    let scssContent = `@import variables`
    fs.writeFileSync(dir + path.sep + name + '.vue', vueContent)
    console.log("%s Creating Vue File 📂: \t", chalk.green.bold('✔'))
    fs.writeFileSync(dir + path.sep + name + '.js', jsContent)
    console.log("%s Creating Js File 📂: \t", chalk.green.bold('✔'))
    fs.writeFileSync(dir + path.sep + name + '.ctrl.js', jsContent)
    console.log("%s Creating Js Store File 📂: \t", chalk.green.bold('✔'))
    fs.writeFileSync(dir + path.sep + name + '.scss', scssContent)
    console.log("%s Creating Scss File 📂: \t", chalk.green.bold('✔'))
    fs.writeFileSync(dir + path.sep + name + '.html')
    console.log("%s Creating Html File 📂: \t", chalk.green.bold('✔'))

  } catch (error) {
    console.log("errore", error)
  }
}