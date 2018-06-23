/* global chrome */

function copyToKebabCase(info, tab) {
  console.log(
    info.selectionText
      .replace(/[^a-zA-Z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
  );
}

chrome.contextMenus.create({
  title: 'copy-to-kebab-case',
  contexts: ['selection'],
  onclick: copyToKebabCase
});
