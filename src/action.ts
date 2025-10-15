import actionsCore from '@actions/core';

const versionInput = actionsCore.getInput('version');

console.log('version:', versionInput);

actionsCore.setOutput('html', '<h1>HTML<h1>');
actionsCore.setOutput('text', '<h1>Text<h1>');
actionsCore.setOutput('json', JSON.stringify({author: "Author"}));

// https://feedback.minecraft.net/hc/en-us/sections/360002267532-Snapshot-Information-and-Changelogs
// https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs