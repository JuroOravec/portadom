[portadom](../README.md) / [Exports](../modules.md) / PortadomPromise

# Interface: PortadomPromise<El, BaseEl\>

Wrapper for a Promise that resolves to a [Portadom](Portadom.md) instance. This allows us to chain
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

## Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `BaseEl` |
| `BaseEl` | `BaseEl` |

## Table of contents

### Properties

- [attr](PortadomPromise.md#attr)
- [attrs](PortadomPromise.md#attrs)
- [children](PortadomPromise.md#children)
- [closest](PortadomPromise.md#closest)
- [findMany](PortadomPromise.md#findmany)
- [findOne](PortadomPromise.md#findone)
- [getCommonAncestor](PortadomPromise.md#getcommonancestor)
- [getCommonAncestorFromSelector](PortadomPromise.md#getcommonancestorfromselector)
- [href](PortadomPromise.md#href)
- [map](PortadomPromise.md#map)
- [node](PortadomPromise.md#node)
- [nodeName](PortadomPromise.md#nodename)
- [parent](PortadomPromise.md#parent)
- [promise](PortadomPromise.md#promise)
- [prop](PortadomPromise.md#prop)
- [props](PortadomPromise.md#props)
- [remove](PortadomPromise.md#remove)
- [root](PortadomPromise.md#root)
- [src](PortadomPromise.md#src)
- [text](PortadomPromise.md#text)
- [textAsLower](PortadomPromise.md#textaslower)
- [textAsNumber](PortadomPromise.md#textasnumber)
- [textAsUpper](PortadomPromise.md#textasupper)
- [url](PortadomPromise.md#url)

## Properties

### attr

• **attr**: (...`args`: [attrName: string, options?: Object]) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's attribute

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [attrName: string, options?: Object] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:141](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L141)

___

### attrs

• **attrs**: <Attrs\>(...`args`: [attrNames: Attrs[], options?: Object]) => `Promise`<``null`` \| `Record`<`string`, ``null`` \| `string`\>\>

#### Type declaration

▸ <`Attrs`\>(`...args`): `Promise`<``null`` \| `Record`<`string`, ``null`` \| `string`\>\>

Get element's attributes

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Attrs` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [attrNames: Attrs[], options?: Object] |

##### Returns

`Promise`<``null`` \| `Record`<`string`, ``null`` \| `string`\>\>

#### Defined in

[src/dom/types.ts:145](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L145)

___

### children

• **children**: <TNewEl\>(...`args`: []) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

Get element's children

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:192](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L192)

___

### closest

• **closest**: <TNewEl\>(...`args`: [selector: string]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get a single ancestor (or itself) matching the selector

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [selector: string] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:184](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L184)

___

### findMany

• **findMany**: <TNewEl\>(...`args`: [selector: string]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

Get all descendants matching the selector

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [selector: string] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:180](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L180)

___

### findOne

• **findOne**: <TNewEl\>(...`args`: [selector: string]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get a single descendant matching the selector

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [selector: string] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:176](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L176)

___

### getCommonAncestor

• **getCommonAncestor**: <TNewEl\>(...`args`: [otherEl: El]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Given two elements, return closest ancestor element that encompases them both,
or `null` if none such found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [otherEl: El] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:206](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L206)

___

### getCommonAncestorFromSelector

• **getCommonAncestorFromSelector**: <TNewEl\>(...`args`: [selector: string]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Given a selector, find all DOM elements that match the selector,
and return closest ancestor element that encompases them all,
or `null` if none such found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [selector: string] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:214](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L214)

___

### href

• **href**: (...`args`: [options?: Object & FormatUrlOptions]) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's href

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: Object & FormatUrlOptions] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:153](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L153)

___

### map

• **map**: <TVal\>(...`args`: [map: Function]) => `Promise`<``null`` \| `TVal`\>

#### Type declaration

▸ <`TVal`\>(`...args`): `Promise`<``null`` \| `TVal`\>

Freely modify the underlying DOM node

##### Type parameters

| Name |
| :------ |
| `TVal` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [map: Function] |

##### Returns

`Promise`<``null`` \| `TVal`\>

#### Defined in

[src/dom/types.ts:169](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L169)

___

### node

• **node**: `Promise`<``null`` \| `NonNullable`<`El`\>\>

#### Defined in

[src/dom/types.ts:118](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L118)

___

### nodeName

• **nodeName**: (...`args`: []) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's nodeName

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:161](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L161)

___

### parent

• **parent**: <TNewEl\>(...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get element's parent

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:188](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L188)

___

### promise

• **promise**: `Promise`<``null`` \| [`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Defined in

[src/dom/types.ts:117](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L117)

___

### prop

• **prop**: <R\>(...`args`: [propName: MaybeArray<string\>, options?: Object]) => `Promise`<``null`` \| `R`\>

#### Type declaration

▸ <`R`\>(`...args`): `Promise`<``null`` \| `R`\>

Get element's property

##### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [propName: MaybeArray<string\>, options?: Object] |

##### Returns

`Promise`<``null`` \| `R`\>

#### Defined in

[src/dom/types.ts:149](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L149)

___

### props

• **props**: <R\>(...`args`: [propName: MaybeArray<string\>[], options?: Object]) => `Promise`<``null`` \| `R`\>

#### Type declaration

▸ <`R`\>(`...args`): `Promise`<``null`` \| `R`\>

Get element's properties

##### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `any`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [propName: MaybeArray<string\>[], options?: Object] |

##### Returns

`Promise`<``null`` \| `R`\>

#### Defined in

[src/dom/types.ts:151](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L151)

___

### remove

• **remove**: (...`args`: []) => `MaybePromise`<`void`\>

#### Type declaration

▸ (`...args`): `MaybePromise`<`void`\>

Remove the element

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`MaybePromise`<`void`\>

#### Defined in

[src/dom/types.ts:196](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L196)

___

### root

• **root**: <TNewEl\>(...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`...args`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get root element

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:198](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L198)

___

### src

• **src**: (...`args`: [options?: Object & FormatUrlOptions]) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's src

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: Object & FormatUrlOptions] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:157](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L157)

___

### text

• **text**: (...`args`: [options?: Object]) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's text (trimmed)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: Object] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:125](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L125)

___

### textAsLower

• **textAsLower**: (...`args`: [options?: Object]) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's text as lowercase (trimmed)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: Object] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:133](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L133)

___

### textAsNumber

• **textAsNumber**: (...`args`: [options?: StrAsNumOptions]) => `Promise`<``null`` \| `number`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `number`\>

Get element's text and convert it to number

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: StrAsNumOptions] |

##### Returns

`Promise`<``null`` \| `number`\>

#### Defined in

[src/dom/types.ts:137](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L137)

___

### textAsUpper

• **textAsUpper**: (...`args`: [options?: Object]) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get element's text as uppercase (trimmed)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options?: Object] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:129](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L129)

___

### url

• **url**: (...`args`: []) => `Promise`<``null`` \| `string`\>

#### Type declaration

▸ (`...args`): `Promise`<``null`` \| `string`\>

Get URL of website associated with the DOM

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:165](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L165)
