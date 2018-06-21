/* global chrome */

function copyToKebobCase(info, tab) {
  console.log(
    info.selectionText
      .replace(/[^a-zA-Z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
  );
}

chrome.contextMenus.create({
  title: 'copy-to-kebob-case',
  contexts: ['selection'],
  onclick: copyToKebobCase
});
