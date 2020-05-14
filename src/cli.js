import arg from "arg"
import inquirer from "inquirer";
import {
  createVueComponent
} from './main'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg({
    '--folder': Boolean,
    '-f': '--folder',
  }, {
    argv: rawArgs.slice(2)
  })
  return {
    skipPrompts: args['--yes'] || false,
    folder: args['--folder'] || false,
    template: args._[0],

  }
}
async function promptForMissingOptions(options) {
  const defaultTemplate = 'Omninext';
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate
    }
  }
  const questions = [];
  if (!options.template) {
    questions.push({
      type: 'input',
      name: 'template',
      message: 'Name your component',
      default: defaultTemplate
    })
  }
  const answers = await inquirer.prompt(questions)
  return {
    ...options,
    template: options.template || answers.template
  }
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)

  await createVueComponent(options)
}