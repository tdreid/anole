/* global chrome */

function copyToKebobCase(info, tab) {
  // TO DO: implement string conversion
}

chrome.contextMenus.create({
  title: 'copy-to-kebob-case',
  contexts: ['selection'],
  onclick: copyToKebobCase
});
