import { endTests } from './utils'

export default {
  // Place any test setup code here (e.g., logging in before testing)
  before: (browser) => {
  },

  // Place any test teardown code here. endTests should be here to close the
  // browser as the last thing you do.
  after: (browser) => {
    endTests(browser)
  },

  // Best practice: Break up your test into small, bite-sized pieces. This helps
  // narrow down what's broken when your tests fail.
  'Open google.com' (browser) => {
    browser
      .url('https://google.com')
      .waitForElementPresent('input[name=q]', 5000) // Generally it's advisable to use `waitForElementPresent`
                                                    // or `waitForElementVisible` instead of an explicit `pause`
                                                    // command. Using pause is somewhat brittle as the time required
                                                    // to load an expected element may change. My test pattern
                                                    // typically consists of waiting for an element to appear, then
                                                    // a subsequent assertion of truth (see the statement just below).

    browser.expect.element('input[name=q]').to.be.present
  },

  'Enter in a search term. Wikipedia should be on first page of results.': (browser) => {
    // You can also use XPath for more targeted assertions/expressions.
    // XPath allows you to target elements by their HTML, vs just CSS selectors.
    // For instance, the following XPath targets a link (<a>) that is a child of an <h3>
    // tag, that c ontains the text "Fourier transform - Wikipedia"
    const expectedElement = "//h3/a[text()='Fourier transform - Wikipedia']"

    browser
      .setValue('input[name=q]', 'fourier transforms')
      .useXpath() // Just don't forget to tell the browser that you're using XPath (vs. CSS)!
      .waitForElementPresent(expectedElement, 5000)

    browser.expect.element(expectedElement).to.be.present
  },

  // Remember, choice of XPath / CSS selectors in assertions and tests is "sticky"!
  // Don't forget to change back and forth as needed--- one of the biggest mistakes in
  // writing Nightwatch tests.
  'Expect footer element to be present': (browser) => {
    browser
      .useCss() // Also, don't forget to change back!
      .waitForElementPresent('div#footcnt', 5000)

    browser.expect.element('div#footcnt').to.be.present
  }
}
