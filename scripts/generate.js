#!/usr/bin/env node

const components = [
  'breadcrumb trail',
  'carousel',
  'weather forecast widget',
  'user information form',
  'typography set',
  'map viewer',
  'media player',
  'social feed',
  'chat interface',
  'content-sharing modal',
  'tutorial wizard',
  'data visualization',
  'navigation bar or menu',
  'dashboard'
]

const aesthetics = [
  'flat/material',
  'skeumorphic',
  'neumorphic',
  'hostile',
  'brutalist',
  'geocities-inspired',
  'medieval',
  'print-inspired',
  'minimalist',
  'maximalist',
  'absurdist'
]

const twists = [
  'animation',
  'microinteractions',
  '3D rendering',
  'light mode/dark mode toggling',
  'scrolling-responsive behaviors',
  'cursor-tracking behaviors',
  'graceful degradation',
  'progressive enhancement',
  'keyboard-oriented navigation'
]

function pickOneFrom(array) {
  const idx = Math.floor(Math.random() * array.length)
  return array[idx]
}

function generate() {
  const aesthetic = pickOneFrom(aesthetics)
  const component = pickOneFrom(components)

  console.log(`
    Your component challenge:\n
    Build ${/[aeiou]/.test(aesthetic.charAt(0)) ? 'an' : 'a'} ${aesthetic} ${component}.
  `)
}

generate()
