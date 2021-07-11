const fs = require('fs')
const Handlebars = require('handlebars')
const pdf = require('html-pdf')
const yaml = require('js-yaml')
const path = require('path')
const shortHash = require('short-hash')
const yargs = require('yargs')

const HTML_DIST_DIR = path.resolve(__dirname, '../dist/html')
const PDF_DIST_DIR = path.resolve(__dirname, '../dist/pdf')

const argv = yargs(process.argv.slice(2)).argv

if (!argv.configurationPath) throw new Error('You must specify --configuration-path')
if (!argv.configurationFormat) throw new Error('You must specify --configuration-format (either "json" or "yaml")')
if (!['json', 'yaml'].includes(argv.configurationFormat)) throw new Error(`Unknown configuration format ${argv.configurationFormat}`)

const template = Handlebars.compile(fs.readFileSync(
  path.resolve(__dirname, './template.html'), 'utf-8'
))

const configurationStr = fs.readFileSync(path.resolve(argv.configurationPath), 'utf-8')

const configuration = (
  argv.configurationFormat === 'yaml' ? yaml.load(configurationStr)
    : argv.configurationFormat === 'json' ? JSON.parse(configurationStr)
      : undefined
)

const {checklist, questions} = configuration

const combinations = getCombinations(questions)

ensureDirExists(HTML_DIST_DIR)
ensureDirExists(PDF_DIST_DIR)

for (const combination of combinations) {
  const combinationHash = shortHash(combination.sort().join('-'))
  const filenameBase = `first-steps-checklist-${combinationHash}`
  const items = [
    ...checklist.filter(item => combination.includes(item.id)),
    ...checklist.filter(item => item.always)
  ]

  const sections = [{
    title: null,
    items: []
  }]
  for (const item of items) {
    if (!sections.find(section => section.title === item.topic)) {
      sections.push({
        title: item.topic,
        items: []
      })
    }
    sections.find(section => section.title === item.topic).items.push(item)
  }

  const fontsDir = 'file:///' + path.normalize(path.resolve(__dirname, 'fonts')).replace(/\\/g, '/')
  const html = template({
    sections,
    fontsDir
  })
  fs.writeFileSync(
    path.resolve(HTML_DIST_DIR, `${filenameBase}.html`),
    html
  )
  pdf.create(html, {
    format: 'A4',
    orientation: 'portrait',
    border: {
      top: '0.5in',
      bottom: '0.5in',
      left: '0.5in',
      right: '0.5in'
    }
  }).toFile(path.resolve(PDF_DIST_DIR, `${filenameBase}.pdf`), (err, res) => {
    if (err) {
      console.error(err)
    }
  })
}

function ensureDirExists (path) {
  if (!fs.existsSync(path)) fs.mkdirSync(path)
}

function getCombinations (questions) {
  const paths = []
  const initialQuestion = questions[0]
  for (const option of initialQuestion.options) {
    paths.push(getChecklist(questions, questions.find(question => question.id === option.next)))
  }
  return paths

  function getChecklist (questions, question, items = []) {
    for (const option of question.options) {
      const itemsAfterOption = [...items, ...option.checklist || []]
      if (option.next) {
        const nextQuestion = questions.find(question => question.id === option.next)
        getChecklist(questions, nextQuestion, itemsAfterOption)
      } else {
        paths.push(itemsAfterOption)
      }
    }
    return paths
  }
}
