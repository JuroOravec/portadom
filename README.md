# Portadom

*Single DOM manipulation interface across Browser API, JSDOM, Cheerio, Playwright.*

If you write web scrapers, you will know that you have multiple ways of parsing and manipulating the HTML / DOM:
- Download the HTML and feed into JSDOM or Cheerio.
- Through browser automation like Playwright, Puppeteer, or Selenium.
- Or right from inside the DevTools console, if you need to test something out.

When I'm writing scrapers, my approach is usually:
1. Define the transformations in DevTools with vanilla JS.
2. Check if the HTML data can be extracted statically, just from the HTML (no JS).
3. If static HTML is enough, then migrate vanilla JS to JSDOM or Cheerio.
4. If I need JS runtime, migrate the vanilla JS to Playwright or other browser automation tool.

Migrating from one to another can be prone to errors, and you may miss some features.

Portadom takes care of this. Here's how you can move the same DOM manipulation logic from Cheerio to Playwright:

Before:

```js
import { load as loadCheerio } from 'cheerio';
import { cheerioPortadom } from 'portadom';

// Loading step changes
const html = `<div>
  <a href="#">Click Me!</a>
</div>`;
const $ = loadCheerio(html);
const dom = cheerioPortadom($.root(), url);

// DOM manipulation remains the same
const btn = dom.findOne('a');
const btnText = await btn.text();
// btnText == "Click Me!"
```

After:

```js
import { playwrightLocatorPortadom } from 'portadom';

// Loading step changes
const page = await somehowLoadPage();
const bodyLoc = page.locator('body');
const dom = playwrightLocatorPortadom(bodyLoc, page);

// DOM manipulation remains the same
const btn = dom.findOne('a');
const btnText = await btn.text();
// btnText == "Click Me!"
```

## Installation

```sh
npm install portadom
```

## Basic usage

```js
const html = `<div>
  <a href="#">Click Me!</a>
</div>`;
const $ = loadCheerio(html);
const dom = cheerioPortadom($.root(), url);

const btn = dom.findOne('a');
const btnText = await btn.text();
// btnText == "Click Me!"

const btnProp = await btn.href();
// btnProp == "https://example.com#"
```

### Loading

Here is how you can load DOM in different environments:

#### Browser

When working with browser [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), the `node` is an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).

```js
import { browserPortadom } from 'portadom';

const dom = browserPortadom(document.body);
const btnNode = await dom.findOne('a').node;

// Or
const startNode = document.querySelector('...');
const dom = browserPortadom(startNode);
const btnNode = await dom.findOne('a').node;
```

#### Cheerio

In [Cheerio](https://cheerio.js.org/), the `node` is the Cheerio Element wrapper. [See DOM traversal with Cheerio](https://cheerio.js.org/docs/basics/traversing).

```js
import { cheerioPortadom } from 'portadom';
import { load as loadCheerio } from 'cheerio';

const $ = loadCheerio(html);
const dom = cheerioPortadom($.root(), url);
const btnNode = await dom.findOne('a').node;

// Or
const startNode = $('a');
const dom = cheerioPortadom(startNode, url);
const btnNode = await dom.findOne('a').node;

// Set `null` if you don't have an URL for the HTML
const dom = cheerioPortadom($.root(), null);
```

#### Playwright (using Locators)

In [Playwright](https://cheerio.js.org/), you can either work with the [Locators](https://playwright.dev/docs/api/class-locator) or the [ElementHandles](https://playwright.dev/docs/api/class-elementhandle).

When using Locators, the `node` is a Locator instance.

```js
import { playwrightLocatorPortadom } from 'portadom';

const page = await somehowLoadPage();
const bodyLoc = page.locator('body');
const dom = playwrightLocatorPortadom(bodyLoc, page);
const btnNode = await dom.findOne('a').node;
```

#### Playwright (using Handles)

When using ElementHandles, the `node` is an ElementHandle instance.

NOTE: You can pass Locator to `playwrightHandlePortadom`, but this will be converted to JSHandle internally.

```js
import { playwrightHandlePortadom } from 'portadom';

const page = await somehowLoadPage();

// Use `evaluateHandle` with page-side logic to query the target element
const handle = await page.evaluateHandle(, () => document.body);
const handle = await page.evaluateHandle(, () => document.querySelector('.myClass'));

// Or use other helpers such as `getByText`
const handle = await page.getByText('hello');

// Or use locators
const handle = page.locator('body');

const dom = playwrightHandlePortadom(bodyLoc, page);
const btnNode = await dom.findOne('a').node;
```

### Chaining

For cross-compatibility, each method on a Portadom instance returns
a Promise.

But this then leads to `then` / `await` hell when you need to call multiple methods in a row:

```js
const employerName = (await (await el.findOne('.employer'))?.text()) ?? null;
```

To get around that, the results are wrapped in chainable instance. This applies to each method that returns a Portadom instance, or an array of Portadom instances.

So instead, we can call:

```js
const employerName = await el.findOne('.employer').text();
```

You don't have to chain the commands. Instead, you can access the associated promise under `promise` property. For example this:

```js
const mapPromises = await dom.findOne('ul')
  .parent()
  .findMany('li[data-id]')
  .map((li) => li.attr('data-id'));
const attrs = await Promise.all(mapResult);
```

Is the same as:

```js
const ul = await dom.findOne('ul').promise;
const parent = await ul?.parent().promise;
const idEls = await parent?.findMany('li[data-id]').promise;
const mapPromises = idEls?.map((li) => li.attr('data-id')) ?? [];
const attrs = await Promise.all(mapPromises);
```

## Reference

See the [full documentation here](./docs/typedoc/modules.md).
- [Portadom](./docs/typedoc/interfaces/Portadom.md)
- [Portapage](./docs/typedoc/interfaces/Portapage.md)
