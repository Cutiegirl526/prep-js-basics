
'use strict';

const Test = require('tape');
const Util = require('util');
const Fs = require('fs');
const Vm = require('vm');
const Path = require('path');

let filePath = Path.resolve(__dirname, './../index.js');
const IndexFileRaw = Fs.readFileSync( filePath, { encoding: 'utf8' });

let sandbox = {};
const Script = new Vm.Script(IndexFileRaw, { filename: 'index.js' });
Script.runInNewContext(sandbox);

Test('js-basics', suite => {
  Test('Variables with String values', t => {
    t.ok(sandbox.firstName, 'firstName exists.');
    t.ok(sandbox.lastName, 'lastName exists.');
    t.ok(sandbox.birthPlace, 'birthPlace exists.');
    t.end();
  });

  Test('Variables with Number values', t => {
    t.ok(sandbox.favoriteNumber, 'favoriteNumber exists.');
    t.ok(sandbox.currentYear, 'currentYear exists.');
    t.ok(sandbox.thatOnePrinceSong, 'thatOnePrinceSong exists.');
    t.end();
  });

  Test('Vairables with Boolean values', t => {
    t.notEquals(sandbox.isDaytime, void 0, 'isDayTime exists.');
    t.notEquals(sandbox.isLeftHanded, void 0, 'isLeftHanded exists.');
    t.notEquals(sandbox.inHawaii, void 0, 'inHawaii exists.');
    t.end();
  });

  suite.end()
})