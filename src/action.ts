import actionsCore from '@actions/core';

const versionInput = actionsCore.getInput('version');

console.log('version:', versionInput);

actionsCore.setOutput('html', '<h1>HTML<h1>');
actionsCore.setOutput('text', '<h1>Text<h1>');
actionsCore.setOutput('json', JSON.stringify({author: "Author"}));
