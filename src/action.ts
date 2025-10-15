import actionsCore from '@actions/core';
import * as dom from '@b-fuze/deno-dom'

const versionInput = actionsCore.getInput('version');

console.log('version:', versionInput);

actionsCore.setOutput('html', '<h1>HTML<h1>');
actionsCore.setOutput('text', '<h1>Text<h1>');
actionsCore.setOutput('json', JSON.stringify({author: "Author"}));

const parser = new dom.DOMParser()
const document = parser.parseFromString(
  await fetch('https://feedback.minecraft.net/hc/en-us/sections/360002267532-Snapshot-Information-and-Changelogs', {redirect: 'follow'})
    .then(response => response.text()),
  'text/html'
)

const pages = parseInt(new URL(document.body.querySelector('.section-container .section-content .pagination .pagination-last a')?.getAttribute('href')!, 'https://feedback.minecraft.net').searchParams.get('page')!)

console.log('last_page:', pages)

const snapshots : {url : string, title : string}[] = []

for (let page = pages; page > 2; page--) {
  const subPage = parser.parseFromString(await fetch(`https://feedback.minecraft.net/hc/en-us/sections/360002267532-Snapshot-Information-and-Changelogs?page=${page}`, {redirect: 'follow'})
    .then(response => response.text()),
    'text/html'
  )

  subPage.body.querySelectorAll('.section-container .section-content .article-list .article-list-item a').forEach((element) => {
    snapshots.push({url: element.getAttribute('href')!, title: element.innerHTML.replace(/Minecraft:? Java Edition -?/, '').trim()})
  })
}

console.log(Deno.inspect(snapshots, {iterableLimit: Infinity}))


// https://feedback.minecraft.net/hc/en-us/sections/360002267532-Snapshot-Information-and-Changelogs
// https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs
