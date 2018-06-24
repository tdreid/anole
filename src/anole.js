/* global chrome */

const camelCase = require('lodash/camelCase');
const kebabCase = require('lodash/kebabCase');
const lowerCase = require('lodash/lowerCase');
const snakeCase = require('lodash/snakeCase');
const startCase = require('lodash/startCase');
const upperCase = require('lodash/upperCase');

const cases = [
  'copyToCamelCase',
  'copy-to-kebab-case',
  'copy to lower case',
  'copy_to_snake_case',
  'Copy To Start Case',
  'COPY TO UPPER CASE'
];

function copyTransformation(info, tab) {
  const clip = document.getElementById('ta');
  switch (info.menuItemId) {
    case 'copyToCamelCase':
      clip.value = camelCase(info.selectionText);
      break;
    case 'copy-to-kebab-case':
      clip.value = kebabCase(info.selectionText);
      break;
    case 'copy to lower case':
      clip.value = lowerCase(info.selectionText);
      break;
    case 'copy_to_snake_case':
      clip.value = snakeCase(info.selectionText);
      break;
    case 'Copy To Start Case':
      clip.value = startCase(info.selectionText);
      break;
    case 'COPY TO UPPER CASE':
      clip.value = upperCase(info.selectionText);
      break;
  }
  clip.select();
  if (!document.execCommand('copy')) {
    console.log('Anole: copying error.');
  }
}

cases.forEach(c => {
  chrome.contextMenus.create({
    title: c,
    id: c,
    contexts: ['selection'],
    onclick: copyTransformation
  });
});
