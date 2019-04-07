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

// Saves options to chrome.storage
function saveOptions() {
  chrome.storage.sync.set(
    {
      copyToCamelCase: document.getElementById('copyToCamelCase').checked,
      'copy-to-kebab-case': document.getElementById('copy-to-kebab-case')
        .checked,
      'copy to lower case': document.getElementById('copy to lower case')
        .checked,
      copy_to_snake_case: document.getElementById('copy_to_snake_case').checked,
      'Copy To Start Case': document.getElementById('Copy To Start Case')
        .checked,
      'COPY TO UPPER CASE': document.getElementById('COPY TO UPPER CASE')
        .checked,
      'Lorem ipsum': document.getElementById('Lorem ipsum')
        .checked,
      'dummy-text': {
        size: document.getElementById('dummy-text-size').value,
        unit: document.getElementById('dummy-text-unit').value
      }
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
        chrome.runtime.reload();
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function loadOptions() {
  // Default each transformation to true
  chrome.storage.sync.get(
    {
      copyToCamelCase: true,
      'copy-to-kebab-case': true,
      'copy to lower case': true,
      copy_to_snake_case: true,
      'Copy To Start Case': true,
      'COPY TO UPPER CASE': true,
      'Lorem ipsum': true,
      'dummy-text': {
        size: 445,
        unit: 'w'
      }
    },
    function(items) {
      document.getElementById('copyToCamelCase').checked =
        items['copyToCamelCase'];
      document.getElementById('copy-to-kebab-case').checked =
        items['copy-to-kebab-case'];
      document.getElementById('copy to lower case').checked =
        items['copy to lower case'];
      document.getElementById('copy_to_snake_case').checked =
        items['copy_to_snake_case'];
      document.getElementById('Copy To Start Case').checked =
        items['Copy To Start Case'];
      document.getElementById('COPY TO UPPER CASE').checked =
        items['COPY TO UPPER CASE'];
      document.getElementById('Lorem ipsum').checked =
        items['Lorem ipsum'];
      document.getElementById('dummy-text-size').value =
        items['dummy-text'].size;
      document.getElementById('dummy-text-unit').value =
        items['dummy-text'].unit;
    }
  );
}
document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
