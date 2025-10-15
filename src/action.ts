import actionsCore from '@actions/core';
import * as dom from '@b-fuze/deno-dom'

const versionInput = actionsCore.getInput('version');

console.log('version:', versionInput);

actionsCore.setOutput('html', '<h1>HTML<h1>');
actionsCore.setOutput('text', '<h1>Text<h1>');
actionsCore.setOutput('json', JSON.stringify({author: "Author"}));

const document = new dom.DOMParser().parseFromString(
  await fetch('https://feedback.minecraft.net/hc/en-us/sections/360002267532-Snapshot-Information-and-Changelogs', {redirect: 'follow'})
    .then(response => response.text()),
  'text/html'
)

console.log('last_page:', new URL(document.body.querySelector('.section-container .section-content .pagination .pagination-last a')?.attributes.getNamedItem('href')?.value!).searchParams.get('page'))
console.log('items:', document.body.querySelectorAll('.section-container .section-content .article-list .article-list-item a'))

// https://feedback.minecraft.net/hc/en-us/sections/360002267532-Snapshot-Information-and-Changelogs
// https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs
