/*import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import { homepage } from '../../package.json';

let basename = null;
let createHistory = createBrowserHistory;

// This tweak is activated during CI page on dev branch
// it is used for fixing base issue on react router
if (homepage === process.env.REACT_APP_TEST_HOMEPAGE) {
  const match = homepage.match(/^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  basename = match[5] || null;
  createHistory = createHashHistory;
}

const history = createHistory({
  basename
});

export default history;*/