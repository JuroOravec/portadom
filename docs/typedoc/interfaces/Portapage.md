[portadom](../README.md) / [Exports](../modules.md) / Portapage

# Interface: Portapage<TPage, TScroll, TCtx\>

Common interface for working with browser page despite different environments
(e.g. Browser API, Playwright, Puppeteer, Selenium).

This common interfaces makes the scraping code more portable between them.

WARNING: Portapage is experimental.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPage` | `TPage` |
| `TScroll` | extends `_AnyInfiScrollTypes` |
| `TCtx` | extends `Object` |

## Table of contents

### Properties

- [infiniteScroll](Portapage.md#infinitescroll)
- [page](Portapage.md#page)

## Properties

### infiniteScroll

• **infiniteScroll**: (`container`: `string` \| `TScroll`[``"container"``], `onNewChildren?`: (`elsHandle`: `TScroll`[``"callbackArg"``], `ctx`: { `container`: `TScroll`[``"container"``] ; `page`: `TPage`  }, `stop`: () => `void`) => `MaybePromise`<`void`\>, `options?`: [`InfiniteScrollLoaderOptions`](InfiniteScrollLoaderOptions.md)<`TScroll`, `TCtx`\>) => `MaybePromise`<`void`\>

#### Type declaration

▸ (`container`, `onNewChildren?`, `options?`): `MaybePromise`<`void`\>

Load entries via infinite scroll and process them as you go.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `string` \| `TScroll`[``"container"``] | A container, or selector for it, that includes the dynamically loaded items. |
| `onNewChildren?` | (`elsHandle`: `TScroll`[``"callbackArg"``], `ctx`: { `container`: `TScroll`[``"container"``] ; `page`: `TPage`  }, `stop`: () => `void`) => `MaybePromise`<`void`\> | Callback that receives a handle to the new child elements in the DOM Example: ```js // Get text from all new child elements of the infinite-scroller container async (elementsHandle) => { const result = await page.evaluate((els) => els.map((el) => el.textContent), elementsHandle); return result; }; ``` |
| `options?` | [`InfiniteScrollLoaderOptions`](InfiniteScrollLoaderOptions.md)<`TScroll`, `TCtx`\> | - |

##### Returns

`MaybePromise`<`void`\>

#### Defined in

[src/page/types.ts:28](https://github.com/JuroOravec/portadom/blob/7392e03/src/page/types.ts#L28)

___

### page

• **page**: `TPage`

#### Defined in

[src/page/types.ts:25](https://github.com/JuroOravec/portadom/blob/7392e03/src/page/types.ts#L25)
