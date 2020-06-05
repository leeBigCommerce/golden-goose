import init from 'picklejs/cypress';

import {
    setScreens,
    setElementSelector,
} from 'picklejs/common/variables';

const screens = {
    "Home Page": "/"
};

const selectors = {
    "Page": "body",
    "Search Input": "input[name=\"search\"]"
};


init();

setScreens(screens);
setElementSelector(selectors);
