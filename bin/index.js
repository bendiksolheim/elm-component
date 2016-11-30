#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const util = require('util');
const args = process.argv;

const files = [
    {filename: 'Model.elm', entries: 2},
    {filename: 'View.elm', entries: 3},
    {filename: 'Update.elm', entries: 3},
    {filename: 'Subscriptions.elm', entries: 3},
    {filename: 'Messages.elm', entries: 1}
];

if (args.length < 3) {
    console.log('Usage: elm-component ComponentName');
    process.exit(0);
}

const component = args[2];

function mkdir(dir) {
    const _path = path.resolve('.', dir);
    try {
        fs.mkdirSync(_path);
    } catch (e) {
        console.log(`Component ${dir} already exists, aborting.`);
        return false;
    }

    return true;
}

function readTemplate(filename) {
    return fs.readFileSync(path.join(__dirname, '..', 'templates', filename), 'utf8');
}

function writeModule(filename, content) {
    fs.writeFile(path.join('.', component, filename), content);
}

mkdir(component);
files.map(file => {
    file.content = readTemplate(file.filename);
    return file;
}).forEach(file => {
    const formatArgs = Array(file.entries + 1).fill(component);
    formatArgs[0] = file.content;
    const module = util.format.apply(util, formatArgs);
    writeModule(file.filename, module);
});
// const f = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf8');
// console.log(util.format(f, component));
