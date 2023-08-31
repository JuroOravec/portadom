[portadom](README.md) / Exports

# portadom

## Table of contents

### Interfaces

- [InfiniteScrollLoaderOptions](interfaces/InfiniteScrollLoaderOptions.md)
- [Portadom](interfaces/Portadom.md)
- [PortadomArrayPromise](interfaces/PortadomArrayPromise.md)
- [PortadomPromise](interfaces/PortadomPromise.md)
- [Portapage](interfaces/Portapage.md)

### Type Aliases

- [AnyHandle](modules.md#anyhandle)
- [BrowserPortadom](modules.md#browserportadom)
- [CheerioPortadom](modules.md#cheerioportadom)
- [HandleLike](modules.md#handlelike)
- [PlaywrightHandlePortadom](modules.md#playwrighthandleportadom)
- [PlaywrightLocatorPortadom](modules.md#playwrightlocatorportadom)
- [PlaywrightPortapage](modules.md#playwrightportapage)

### Functions

- [browserPortadom](modules.md#browserportadom-1)
- [cheerioPortadom](modules.md#cheerioportadom-1)
- [createPlaywrightElementSerializer](modules.md#createplaywrightelementserializer)
- [createPortadomArrayPromise](modules.md#createportadomarraypromise)
- [createPortadomPromise](modules.md#createportadompromise)
- [handleIsLocator](modules.md#handleislocator)
- [mergeHandles](modules.md#mergehandles)
- [playwrightHandlePortadom](modules.md#playwrighthandleportadom-1)
- [playwrightLocatorPortadom](modules.md#playwrightlocatorportadom-1)
- [playwrightPortapage](modules.md#playwrightportapage-1)
- [splitCheerioSelection](modules.md#splitcheerioselection)
- [splitPlaywrightSelection](modules.md#splitplaywrightselection)

## Type Aliases

### AnyHandle

Ƭ **AnyHandle**<`T`\>: `JSHandle`<`T`\> \| `ElementHandle`<`T`\>

Any instance that is a Playwright Handle.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/dom/domUtils.ts:39](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/domUtils.ts#L39)

___

### BrowserPortadom

Ƭ **BrowserPortadom**<`T`\>: [`Portadom`](interfaces/Portadom.md)<`T`, `Element`\>

Implementation of Portadom in browser (using Browser API)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Element` = `Element` |

#### Defined in

[src/dom/dom.ts:13](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L13)

___

### CheerioPortadom

Ƭ **CheerioPortadom**<`El`\>: [`Portadom`](interfaces/Portadom.md)<`El`, `Cheerio`<`AnyNode`\>\>

Implementation of Portadom in Cheerio

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `Cheerio`<`AnyNode`\> = `Cheerio`<`AnyNode`\> |

#### Defined in

[src/dom/dom.ts:235](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L235)

___

### HandleLike

Ƭ **HandleLike**<`T`\>: `Locator` \| `JSHandle`<`T`\> \| `ElementHandle`<`T`\>

Any instance that is a Playwright Handle, or can be converted to one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/dom/domUtils.ts:41](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/domUtils.ts#L41)

___

### PlaywrightHandlePortadom

Ƭ **PlaywrightHandlePortadom**<`El`\>: [`Portadom`](interfaces/Portadom.md)<`El`, `Locator` \| `ElementHandle`<`Node`\>\>

Implementation of Portadom in Playwright using Handles

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `Locator` \| `ElementHandle`<`Node`\> = `Locator` \| `ElementHandle`<`Node`\> |

#### Defined in

[src/dom/dom.ts:459](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L459)

___

### PlaywrightLocatorPortadom

Ƭ **PlaywrightLocatorPortadom**<`El`\>: [`Portadom`](interfaces/Portadom.md)<`El`, `Locator`\>

Implementation of Portadom in Playwright using Locators

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `Locator` = `Locator` |

#### Defined in

[src/dom/dom.ts:800](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L800)

___

### PlaywrightPortapage

Ƭ **PlaywrightPortapage**<`T`\>: [`Portapage`](interfaces/Portapage.md)<`T`, `PWIST`, { `container`: `PWIST`[``"container"``] ; `page`: `T`  }\>

Implementation of Portapage in Playwright

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Page` = `Page` |

#### Defined in

[src/page/page.ts:23](https://github.com/JuroOravec/portadom/blob/b47a342/src/page/page.ts#L23)

## Functions

### browserPortadom

▸ **browserPortadom**<`El`\>(`node`): [`BrowserPortadom`](modules.md#browserportadom)<`El`\>

Implementation of Portadom in browser (using Browser API)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `Element`<`El`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `El` |

#### Returns

[`BrowserPortadom`](modules.md#browserportadom)<`El`\>

#### Defined in

[src/dom/dom.ts:16](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L16)

___

### cheerioPortadom

▸ **cheerioPortadom**<`El`\>(`cheerioNode`, `srcUrl`): [`CheerioPortadom`](modules.md#cheerioportadom)<`El`\>

Implementation of Portadom in Cheerio

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `Cheerio`<`AnyNode`, `El`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cheerioNode` | `El` |
| `srcUrl` | ``null`` \| `string` |

#### Returns

[`CheerioPortadom`](modules.md#cheerioportadom)<`El`\>

#### Defined in

[src/dom/dom.ts:241](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L241)

___

### createPlaywrightElementSerializer

▸ **createPlaywrightElementSerializer**<`T`\>(`page`): `Promise`<{ `resolveId`: (`id`: `string`) => `Promise`<`JSHandle`<``null``\> \| `ElementHandle`<`Element`\>\> ; `resolveIds`: (`ids`: `string`[]) => `Promise`<`JSHandle`<(``null`` \| `Element`)[]\>\> ; `serializeEls`: (`elsHandle`: `JSHandle`<`Element`[]\>) => `Promise`<`string`[]\>  }\>

Helper methods that allow to represent HTML Elements on the Page as string IDs

We use this so we can identify which elements have already been processed, and which have not.
Normally, the elements are represented via Playwright JSHandle/ElementHandle. However, if two
Handles are pointing to the same Element, we're unable to count them as one, because it's two
instances that don't have any IDs of the Elemenets. On the other hand, using the string IDs,
two different JSHandles will return the same string if they point to the same Element, so we
cache the IDs outside of Playwright in Sets or Maps.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Page`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `T` |

#### Returns

`Promise`<{ `resolveId`: (`id`: `string`) => `Promise`<`JSHandle`<``null``\> \| `ElementHandle`<`Element`\>\> ; `resolveIds`: (`ids`: `string`[]) => `Promise`<`JSHandle`<(``null`` \| `Element`)[]\>\> ; `serializeEls`: (`elsHandle`: `JSHandle`<`Element`[]\>) => `Promise`<`string`[]\>  }\>

#### Defined in

[src/page/pageUtils.ts:20](https://github.com/JuroOravec/portadom/blob/b47a342/src/page/pageUtils.ts#L20)

___

### createPortadomArrayPromise

▸ **createPortadomArrayPromise**<`El`, `BaseEl`\>(`promiseDom`): [`PortadomArrayPromise`](interfaces/PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for a Promise that resolves to a n Array of [Portadom](interfaces/Portadom.md) instances. This allows us to chain
Portadom methods before the Promise is resolved.

Example:

```js
const dom = Promise.resolve(browserPortadom({}));
```

Instead of:
```js
const resA = await (await dom).findOne('..');
const resB = await (await dom).text();
```

You can call:
```js
const domP = createPortadomArrayPromise(dom);
const resA = await domP.findOne('..');
const resB = await domP.text();
```

#### Type parameters

| Name |
| :------ |
| `El` |
| `BaseEl` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseDom` | `MaybePromise`<[`Portadom`](interfaces/Portadom.md)<`El`, `BaseEl`\>[]\> |

#### Returns

[`PortadomArrayPromise`](interfaces/PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:642](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/types.ts#L642)

___

### createPortadomPromise

▸ **createPortadomPromise**<`El`, `BaseEl`\>(`promiseDom`): [`PortadomPromise`](interfaces/PortadomPromise.md)<`El`, `BaseEl`\>

Wrapper for a Promise that resolves to a [Portadom](interfaces/Portadom.md) instance. This allows us to chain
Portadom methods before the Promise is resolved.

Example:

```js
const dom = Promise.resolve(browserPortadom({}));
```

Instead of:
```js
const resA = await (await dom).findOne('..');
const resB = await (await dom).text();
```

You can call:
```js
const domP = createPortadomPromise(dom);
const resA = await domP.findOne('..');
const resB = await domP.text();
```

#### Type parameters

| Name |
| :------ |
| `El` |
| `BaseEl` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promiseDom` | `MaybePromise`<``null`` \| [`Portadom`](interfaces/Portadom.md)<`El`, `BaseEl`\>\> |

#### Returns

[`PortadomPromise`](interfaces/PortadomPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:251](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/types.ts#L251)

___

### handleIsLocator

▸ **handleIsLocator**<`T`\>(`h`): h is Locator

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | [`HandleLike`](modules.md#handlelike)<`T`\> |

#### Returns

h is Locator

#### Defined in

[src/dom/domUtils.ts:43](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/domUtils.ts#L43)

___

### mergeHandles

▸ **mergeHandles**<`T`\>(`handles`, `options?`): `Promise`<`JSHandle`<`T`[]\>\>

Join several Locators and Handles in a single JSHandle.

Locators are evaluated to their matching elements.

To override how Locators are resolved, supply own `locatorResolver` function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handles` | [`HandleLike`](modules.md#handlelike)<`T`\>[] |
| `options?` | `Object` |
| `options.locatorResolver?` | (`loc`: `Locator`) => `MaybePromise`<`MaybeArray`<[`AnyHandle`](modules.md#anyhandle)<`T`\>\>\> |

#### Returns

`Promise`<`JSHandle`<`T`[]\>\>

#### Defined in

[src/dom/domUtils.ts:54](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/domUtils.ts#L54)

___

### playwrightHandlePortadom

▸ **playwrightHandlePortadom**<`El`\>(`node`, `page`): [`PlaywrightHandlePortadom`](modules.md#playwrighthandleportadom)<`El`\>

Implementation of Portadom in Playwright using Handles

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `ElementHandle`<`Node`\> \| `Locator` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `El` |
| `page` | `Page` |

#### Returns

[`PlaywrightHandlePortadom`](modules.md#playwrighthandleportadom)<`El`\>

#### Defined in

[src/dom/dom.ts:470](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L470)

___

### playwrightLocatorPortadom

▸ **playwrightLocatorPortadom**<`El`\>(`node`, `page`): [`PlaywrightLocatorPortadom`](modules.md#playwrightlocatorportadom)<`El`\>

Implementation of Portadom in Playwright using Locators

#### Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `Locator` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `El` |
| `page` | `Page` |

#### Returns

[`PlaywrightLocatorPortadom`](modules.md#playwrightlocatorportadom)<`El`\>

#### Defined in

[src/dom/dom.ts:803](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/dom.ts#L803)

___

### playwrightPortapage

▸ **playwrightPortapage**<`T`\>(`page`): `Promise`<[`PlaywrightPortapage`](modules.md#playwrightportapage)<`T`\>\>

Implementation of Portapage in Playwright

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Page`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `T` |

#### Returns

`Promise`<[`PlaywrightPortapage`](modules.md#playwrightportapage)<`T`\>\>

#### Defined in

[src/page/page.ts:30](https://github.com/JuroOravec/portadom/blob/b47a342/src/page/page.ts#L30)

___

### splitCheerioSelection

▸ **splitCheerioSelection**(`cheerioSel`): `Cheerio`<`AnyNode`\>[]

Given a Cheerio selection, split it into an array of Cheerio selections,
where each has only one element.

From `Cheerio[el, el, el, el]`

To `[Cheerio[el], Cheerio[el], Cheerio[el], Cheerio[el]]`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cheerioSel` | `Cheerio`<`AnyNode`\> |

#### Returns

`Cheerio`<`AnyNode`\>[]

#### Defined in

[src/dom/domUtils.ts:16](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/domUtils.ts#L16)

___

### splitPlaywrightSelection

▸ **splitPlaywrightSelection**<`T`\>(`handle`): `Promise`<`SmartHandle`<`T`\>[]\>

Given a Playwright JSHandle that points to an array of Elements, split it into an array of
ElementHandles, where each has only one element.

From `JSHandle([el, el, el)]`

To `ElHandle(el), ElHandle(el), ElHandle(el)`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `JSHandle`<`T`[]\> |

#### Returns

`Promise`<`SmartHandle`<`T`\>[]\>

#### Defined in

[src/dom/domUtils.ts:31](https://github.com/JuroOravec/portadom/blob/b47a342/src/dom/domUtils.ts#L31)
