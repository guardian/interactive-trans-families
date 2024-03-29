// Javascript that is inline. Should be used for anything that needs to be immediate
import jquery from 'jquery';
window.$ = jquery;

import share from './modules/share.js';
import language from './modules/language.js';
import scrollTo from './modules/scrollTo.js';

share.init();
language.init();
scrollTo.init();
