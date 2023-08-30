[portadom](../README.md) / [Exports](../modules.md) / Portadom

# Interface: Portadom<El, BaseEl\>

Common interface for working with DOM despite different environments.

Consider these environments:
1) Browser (via Playwright & Chromium) - uses Browser API to work with DOM
2) Cheerio - uses own API to work with DOM

This common interfaces makes the scraping code more portable between the two.

## Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `BaseEl` |
| `BaseEl` | `BaseEl` |

## Table of contents

### Properties

- [attr](Portadom.md#attr)
- [attrs](Portadom.md#attrs)
- [children](Portadom.md#children)
- [closest](Portadom.md#closest)
- [findMany](Portadom.md#findmany)
- [findOne](Portadom.md#findone)
- [getCommonAncestor](Portadom.md#getcommonancestor)
- [getCommonAncestorFromSelector](Portadom.md#getcommonancestorfromselector)
- [href](Portadom.md#href)
- [map](Portadom.md#map)
- [node](Portadom.md#node)
- [nodeName](Portadom.md#nodename)
- [parent](Portadom.md#parent)
- [prop](Portadom.md#prop)
- [props](Portadom.md#props)
- [remove](Portadom.md#remove)
- [root](Portadom.md#root)
- [src](Portadom.md#src)
- [text](Portadom.md#text)
- [textAsLower](Portadom.md#textaslower)
- [textAsNumber](Portadom.md#textasnumber)
- [textAsUpper](Portadom.md#textasupper)
- [url](Portadom.md#url)

## Properties

### attr

• **attr**: (`attrName`: `string`, `options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (`attrName`, `options?`): `MaybePromise`<``null`` \| `string`\>

Get element's attribute

##### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `options?` | `Object` |
| `options.allowEmpty?` | `boolean` |

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:39](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L39)

___

### attrs

• **attrs**: <T\>(`attrNames`: `T`[], `options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<`Record`<`T`, ``null`` \| `string`\>\>

#### Type declaration

▸ <`T`\>(`attrNames`, `options?`): `MaybePromise`<`Record`<`T`, ``null`` \| `string`\>\>

Get element's attributes

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `attrNames` | `T`[] |
| `options?` | `Object` |
| `options.allowEmpty?` | `boolean` |

##### Returns

`MaybePromise`<`Record`<`T`, ``null`` \| `string`\>\>

#### Defined in

[src/dom/types.ts:41](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L41)

___

### children

• **children**: <TNewEl\>() => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

Get element's children

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:81](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L81)

___

### closest

• **closest**: <TNewEl\>(`selector`: `string`) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`selector`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get a single ancestor (or itself) matching the selector

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:77](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L77)

___

### findMany

• **findMany**: <TNewEl\>(`selector`: `string`) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`selector`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

Get all descendants matching the selector

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:75](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L75)

___

### findOne

• **findOne**: <TNewEl\>(`selector`: `string`) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`selector`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get a single descendant matching the selector

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:73](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L73)

___

### getCommonAncestor

• **getCommonAncestor**: <TNewEl\>(`otherEl`: `El`) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`otherEl`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Given two elements, return closest ancestor element that encompases them both,
or `null` if none such found.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `otherEl` | `El` |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:91](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L91)

___

### getCommonAncestorFromSelector

• **getCommonAncestorFromSelector**: <TNewEl\>(`selector`: `string`) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(`selector`): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

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
| `selector` | `string` |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:97](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L97)

___

### href

• **href**: (`options?`: { `allowEmpty?`: `boolean`  } & `FormatUrlOptions`) => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (`options?`): `MaybePromise`<``null`` \| `string`\>

Get element's href

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `allowEmpty?`: `boolean`  } & `FormatUrlOptions` |

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:58](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L58)

___

### map

• **map**: <TVal\>(`map`: (`node`: ``null`` \| `El`) => `TVal`) => `MaybePromise`<`TVal`\>

#### Type declaration

▸ <`TVal`\>(`map`): `MaybePromise`<`TVal`\>

Freely modify the underlying DOM node

##### Type parameters

| Name |
| :------ |
| `TVal` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `map` | (`node`: ``null`` \| `El`) => `TVal` |

##### Returns

`MaybePromise`<`TVal`\>

#### Defined in

[src/dom/types.ts:66](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L66)

___

### node

• **node**: ``null`` \| `El`

#### Defined in

[src/dom/types.ts:24](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L24)

___

### nodeName

• **nodeName**: () => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (): `MaybePromise`<``null`` \| `string`\>

Get element's nodeName

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:62](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L62)

___

### parent

• **parent**: <TNewEl\>() => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get element's parent

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:79](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L79)

___

### prop

• **prop**: <R\>(`propName`: `MaybeArray`<`string`\>, `options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<`R`\>

#### Type declaration

▸ <`R`\>(`propName`, `options?`): `MaybePromise`<`R`\>

Get element's property

##### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `unknown` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propName` | `MaybeArray`<`string`\> | Single or nested prop path |
| `options?` | `Object` | - |
| `options.allowEmpty?` | `boolean` | - |

##### Returns

`MaybePromise`<`R`\>

#### Defined in

[src/dom/types.ts:46](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L46)

___

### props

• **props**: <R\>(`propName`: `MaybeArray`<`string`\>[], `options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<`R`\>

#### Type declaration

▸ <`R`\>(`propName`, `options?`): `MaybePromise`<`R`\>

Get element's properties

##### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `any`[] |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propName` | `MaybeArray`<`string`\>[] | List of single or nested prop paths |
| `options?` | `Object` | - |
| `options.allowEmpty?` | `boolean` | - |

##### Returns

`MaybePromise`<`R`\>

#### Defined in

[src/dom/types.ts:52](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L52)

___

### remove

• **remove**: () => `MaybePromise`<`void`\>

#### Type declaration

▸ (): `MaybePromise`<`void`\>

Remove the element

##### Returns

`MaybePromise`<`void`\>

#### Defined in

[src/dom/types.ts:83](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L83)

___

### root

• **root**: <TNewEl\>() => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Type declaration

▸ <`TNewEl`\>(): [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

Get root element

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:85](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L85)

___

### src

• **src**: (`options?`: { `allowEmpty?`: `boolean`  } & `FormatUrlOptions`) => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (`options?`): `MaybePromise`<``null`` \| `string`\>

Get element's src

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `allowEmpty?`: `boolean`  } & `FormatUrlOptions` |

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:60](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L60)

___

### text

• **text**: (`options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (`options?`): `MaybePromise`<``null`` \| `string`\>

Get element's text (trimmed)

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.allowEmpty?` | `boolean` |

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:31](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L31)

___

### textAsLower

• **textAsLower**: (`options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (`options?`): `MaybePromise`<``null`` \| `string`\>

Get element's text as lowercase (trimmed)

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.allowEmpty?` | `boolean` |

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:35](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L35)

___

### textAsNumber

• **textAsNumber**: (`options?`: `StrAsNumOptions`) => `MaybePromise`<``null`` \| `number`\>

#### Type declaration

▸ (`options?`): `MaybePromise`<``null`` \| `number`\>

Get element's text and convert it to number

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `StrAsNumOptions` |

##### Returns

`MaybePromise`<``null`` \| `number`\>

#### Defined in

[src/dom/types.ts:37](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L37)

___

### textAsUpper

• **textAsUpper**: (`options?`: { `allowEmpty?`: `boolean`  }) => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (`options?`): `MaybePromise`<``null`` \| `string`\>

Get element's text as uppercase (trimmed)

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.allowEmpty?` | `boolean` |

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:33](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L33)

___

### url

• **url**: () => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (): `MaybePromise`<``null`` \| `string`\>

Get URL of website associated with the DOM

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:64](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L64)
