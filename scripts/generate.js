#!/usr/bin/env node

const { aesthetics, components } = require('./challenge-data/attributes')
const randomize = require('./randomizers')

function generate() {
  const aesthetic = randomize.pickOneFrom(aesthetics)
  const component = randomize.pickOneFrom(components)

  console.log(`
    Your component challenge:\n
    Build ${/[aeiou]/.test(aesthetic.charAt(0)) ? 'an' : 'a'} ${aesthetic} ${component}.
  `)
}

generate()
