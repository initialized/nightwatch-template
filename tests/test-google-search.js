import { endTests } from './utils'

export default {
  before: (browser) => {
    // Place any test setup code here (e.g., logging in before testing)=
  },

  after: (browser) => {
    endTests(browser)
  },

  'Open google.com': (browser) => {
    browser
      .url('https://google.com')
      .waitForElementPresent('input[name=q]', 5000)

    browser.expect.element('input[name=q]').to.be.present
  },

  'Enter in a search term. Wikipedia should be on first page of results.': (browser) => {
    const expectedElement = "//h3/a[text()='Fourier transform - Wikipedia']"

    browser
      .setValue('input[name=q]', 'fourier transforms')
      .useXpath()
      .waitForElementPresent(expectedElement, 5000)

    browser.expect.element(expectedElement).to.be.present
  },

  'Expect footer element to be present': (browser) => {
    browser
      .useCss()
      .waitForElementPresent('div#footcnt', 5000)

    browser.expect.element('div#footcnt').to.be.present
  }
}
