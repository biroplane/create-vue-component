import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import {
  promisify
} from "util";

const readdir = promisify(fs.readdir);

function writeCustomFile(name, content) {
  console.log("Write custom file ", name, content);

  fs.writeFile(name, content, function (err) {
    if (err) {
      // there was an error
      console.log(err);
    } else {
      // data written successfully
      console.log("%s File written successfully", chalk.green.bold("✔"));
    }
  });
}
export async function createVueComponent(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
  console.log("%s Creo il Componente ", chalk.green.bold('✔'), options.template)
  let dir
  try {
    if (options.folder) {
      //creo la cartella
      dir = __dirname + path.sep + options.template;
      console.log("Dir ", dir)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
    }
    let vueContent = `
            <template src="./${options.template}.html"></template>
            <script src="./${options.template}.js"></script>
            <script src="./${options.template}.ctrl.js"></script>
            <style src="./${options.template}.scss"></style>
            `
    let jsContent = `export default {}`
    let scssContent = `@import variables`
    fs.writeFileSync(dir + path.sep + options.template + '.vue', vueContent)
    fs.writeFileSync(dir + path.sep + options.template + '.js', jsContent)
    fs.writeFileSync(dir + path.sep + options.template + '.ctrl.js', jsContent)
    fs.writeFileSync(dir + path.sep + options.template + '.scss', scssContent)
    fs.writeFileSync(dir + path.sep + options.template + '.html')

  } catch (error) {
    console.log("errore", error)
  }
}