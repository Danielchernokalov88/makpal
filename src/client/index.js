import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import storageDriver from '@cycle/storage';
import {captureClicks, makeHistoryDriver} from '@cycle/history'
import onionify from 'cycle-onionify';
import storageify from "cycle-storageify";
import Layout from './components/Layout/index.jsx';
import switchPath from 'switch-path';
import {routerify} from 'cyclic-router';
import { createHistory } from '@cycle/history'
import { makeRouterDriver } from 'cyclic-router'


// const main = routerify(onionify(Layout), switchPath);

// run(main, {
//   DOM: makeDOMDriver('#app'),
//   // history: captureClicks(makeHistoryDriver()),
//   history: makeHistoryDriver()
//   // storage: storageDriver,
// });
// const main = routerify(onionify(Layout), switchPath);

run(Layout, {
  DOM: makeDOMDriver('#app'),
  // history: captureClicks(makeHistoryDriver()),
  // history: makeHistoryDriver()
  // storage: storageDriver,
});
