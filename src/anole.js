/* global chrome */

const kebabCase = require('lodash/kebabCase');

function copyToKebabCase(info, tab) {
  const clip = document.getElementById('ta');
  clip.value = kebabCase(info.selectionText);
  clip.select();
  if (!document.execCommand('copy')) {
    console.log('Anole: copying error.');
  }
}

chrome.contextMenus.create({
  title: 'copy-to-kebab-case',
  contexts: ['selection'],
  onclick: copyToKebabCase
});
