/* global chrome */

const kebabCase = require('lodash/kebabCase');

function copyToKebabCase(info, tab) {
  console.log(kebabCase(info.selectionText));
}

chrome.contextMenus.create({
  title: 'copy-to-kebab-case',
  contexts: ['selection'],
  onclick: copyToKebabCase
});
