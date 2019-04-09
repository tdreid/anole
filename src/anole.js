/*
Copyright (C) 2018 Trevor D. Reid - https://tdreid.github.io/

This program is free software: you can redistribute it and/or modify it under 
the terms of the GNU General Public License as published by the Free Software 
Foundation, version 3 only.

This program is distributed in the hope that it will be useful, but without any 
warranty — without even the implied warranties of merchantability or fitness for  
a particular purpose. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License 
along with this program. If not, see https://www.gnu.org/licenses/.
*/

/* global chrome */

const camelCase = require('lodash/camelCase');
const kebabCase = require('lodash/kebabCase');
const lowerCase = require('lodash/lowerCase');
const snakeCase = require('lodash/snakeCase');
const startCase = require('lodash/startCase');
const upperCase = require('lodash/upperCase');
const loremText = require('fast-lorem-ipsum');

const capitalize = require('lodash/capitalize');
const random = require('lodash/random');
const translit = require('cyrillic-to-translit-js');

const cases = [
  'copyToCamelCase',
  'copy-to-kebab-case',
  'copy to lower case',
  'copy_to_snake_case',
  'Copy To Start Case',
  'COPY TO UPPER CASE',
  'Generate Lorem ipsum'
];

let dt = {};
let translitActive = false;

function copyTransformation(info, tab) {
  const clip = document.getElementById('ta');
  let selectionText = translitActive
    ? translit().transform(info.selectionText)
    : info.selectionText;
  switch (info.menuItemId) {
    case 'copyToCamelCase':
      clip.value = camelCase(selectionText);
      break;
    case 'copy-to-kebab-case':
      clip.value = kebabCase(selectionText);
      break;
    case 'copy to lower case':
      clip.value = lowerCase(selectionText);
      break;
    case 'copy_to_snake_case':
      clip.value = snakeCase(selectionText);
      break;
    case 'Copy To Start Case':
      clip.value = startCase(selectionText);
      break;
    case 'COPY TO UPPER CASE':
      clip.value = upperCase(selectionText);
      break;
    case 'Generate Lorem ipsum':
      clip.value = loremText(dt.size, dt.unit)
        .replace(/,\s/gm, c => (random() === 0 ? ', ' : '. '))
        .split('. ')
        .map(s => capitalize(s.trim()))
        .join('. ');
      break;
  }
  clip.select();
  if (!document.execCommand('copy')) {
    console.log('Anole: copying error.');
  }
}

cases.forEach(c => {
  chrome.storage.sync.get(null, storedSettings => {
    if (storedSettings[c] || storedSettings[c] === undefined) {
      chrome.contextMenus.create({
        title: c,
        id: c,
        contexts: c === 'Generate Lorem ipsum' ? ['all'] : ['selection'],
        onclick: copyTransformation
      });
    }
    if (c === 'Generate Lorem ipsum') {
      dt = storedSettings['dummy-text'] || { size: 445, unit: 'w' };
    }
  });
});
chrome.storage.sync.get(
  null,
  storedSettings => (translitActive = storedSettings['translit'] || false)
);
