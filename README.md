# nightwatch-template

A basic template for a test suite based on Nightwatch.js

## Why?

Nightwatch is a powerful framework for doing automated browser-based integration tests. While it doesn't replace unit testing, it often provides a good signal for when things are broken, leading to better testing across an entire engineering team. Combined with Selenium (vs. just Chromedriver), it can also be the basis for cross-browser testing across a variety of different browsers.

This simple template is designed to help teams bootstrap their Nightwatch test suite. It can either be used as a separate test repository, or integrated easily into an existing javascript codebase. 

## Installation / running

1. `git clone git@github.com:initialized/nightwatch-template.git`
2. `npm install`
3. Install [Chromedriver](https://chromedriver.storage.googleapis.com/index.html?path=2.27/)
4. Start Chromedriver on port 9515: `./chromedriver`
5. Run tests: `./node_modules/.bin/nightwatch` (or individually: `./node_modules/.bin/nightwatch tests/test-google-search.js`)
