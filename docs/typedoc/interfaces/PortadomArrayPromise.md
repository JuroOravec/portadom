[portadom](../README.md) / [Exports](../modules.md) / PortadomArrayPromise

# Interface: PortadomArrayPromise<El, BaseEl\>

Wrapper for a Promise that resolves to a n Array of [Portadom](Portadom.md) instances. This allows us to chain
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

## Type parameters

| Name | Type |
| :------ | :------ |
| `El` | extends `BaseEl` |
| `BaseEl` | `BaseEl` |

## Table of contents

### Properties

- [at](PortadomArrayPromise.md#at)
- [concat](PortadomArrayPromise.md#concat)
- [copyWithin](PortadomArrayPromise.md#copywithin)
- [entries](PortadomArrayPromise.md#entries)
- [every](PortadomArrayPromise.md#every)
- [fill](PortadomArrayPromise.md#fill)
- [filter](PortadomArrayPromise.md#filter)
- [filterAsyncParallel](PortadomArrayPromise.md#filterasyncparallel)
- [filterAsyncSerial](PortadomArrayPromise.md#filterasyncserial)
- [find](PortadomArrayPromise.md#find)
- [findAsyncSerial](PortadomArrayPromise.md#findasyncserial)
- [findIndex](PortadomArrayPromise.md#findindex)
- [flat](PortadomArrayPromise.md#flat)
- [flatMap](PortadomArrayPromise.md#flatmap)
- [forEach](PortadomArrayPromise.md#foreach)
- [forEachAsyncParallel](PortadomArrayPromise.md#foreachasyncparallel)
- [forEachAsyncSerial](PortadomArrayPromise.md#foreachasyncserial)
- [includes](PortadomArrayPromise.md#includes)
- [indexOf](PortadomArrayPromise.md#indexof)
- [join](PortadomArrayPromise.md#join)
- [keys](PortadomArrayPromise.md#keys)
- [lastIndexOf](PortadomArrayPromise.md#lastindexof)
- [length](PortadomArrayPromise.md#length)
- [map](PortadomArrayPromise.md#map)
- [mapAsyncParallel](PortadomArrayPromise.md#mapasyncparallel)
- [mapAsyncSerial](PortadomArrayPromise.md#mapasyncserial)
- [pop](PortadomArrayPromise.md#pop)
- [promise](PortadomArrayPromise.md#promise)
- [push](PortadomArrayPromise.md#push)
- [reverse](PortadomArrayPromise.md#reverse)
- [shift](PortadomArrayPromise.md#shift)
- [slice](PortadomArrayPromise.md#slice)
- [some](PortadomArrayPromise.md#some)
- [sort](PortadomArrayPromise.md#sort)
- [splice](PortadomArrayPromise.md#splice)
- [unshift](PortadomArrayPromise.md#unshift)
- [values](PortadomArrayPromise.md#values)

### Methods

- [reduce](PortadomArrayPromise.md#reduce)
- [reduceRight](PortadomArrayPromise.md#reduceright)

## Properties

### at

• **at**: (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.at that returns the resulting item as [PortadomPromise](PortadomPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [index: number] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:417](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L417)

___

### concat

• **concat**: (...`args`: ([`Portadom`](Portadom.md)<`El`, `BaseEl`\> \| `ConcatArray`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>)[]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.concat that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

NOTE: The concat values are expected to be [Portadom](Portadom.md) instances

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | ([`Portadom`](Portadom.md)<`El`, `BaseEl`\> \| `ConcatArray`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>)[] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:423](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L423)

___

### copyWithin

• **copyWithin**: (...`args`: [target: number, start: number, end?: number]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.copyWithin that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

NOTE: The concat values are expected to be [Portadom](Portadom.md) instances

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [target: number, start: number, end?: number] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:431](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L431)

___

### entries

• **entries**: (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`El`, `BaseEl`\>]\>\>

#### Type declaration

▸ (`...args`): `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`El`, `BaseEl`\>]\>\>

Wrapper for Array.entries.

NOTE: Does NOT return an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`El`, `BaseEl`\>]\>\>

#### Defined in

[src/dom/types.ts:439](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L439)

___

### every

• **every**: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\>

#### Type declaration

▸ (`...args`): `Promise`<`boolean`\>

Wrapper for Array.every.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [predicate: Function, thisArg?: any] |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/dom/types.ts:443](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L443)

___

### fill

• **fill**: <U\>(...`args`: [value: U]) => `Promise`<`U`[]\>

#### Type declaration

▸ <`U`\>(`...args`): `Promise`<`U`[]\>

Wrapper for Array.fill.

NOTE: Fill values can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md).

NOTE2: Unlike Array.fill, this option doesn't allow to specify `start` and `end`.

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [value: U] |

##### Returns

`Promise`<`U`[]\>

#### Defined in

[src/dom/types.ts:451](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L451)

___

### filter

• **filter**: (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.filter that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [predicate: Function, thisArg?: any] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:455](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L455)

___

### filterAsyncParallel

• **filterAsyncParallel**: (...`args`: [callbackfn: Function]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Similar to Array.filter, but awaits for Promises. Items are handled all in parallel.

Returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:605](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L605)

___

### filterAsyncSerial

• **filterAsyncSerial**: (...`args`: [predicate: Function]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Similar to Array.filter, but awaits for Promises. Items are handled one-by-one.

Returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [predicate: Function] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:596](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L596)

___

### find

• **find**: (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.find that returns the resulting item as [PortadomPromise](PortadomPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [predicate: Function, thisArg?: any] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:459](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L459)

___

### findAsyncSerial

• **findAsyncSerial**: (...`args`: [callbackfn: Function]) => [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

Similar to Array.find, but awaits for Promises. Items are handled one-by-one.

Returns the resulting item as [PortadomPromise](PortadomPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:614](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L614)

___

### findIndex

• **findIndex**: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\>

#### Type declaration

▸ (`...args`): `Promise`<`number`\>

Wrapper for Array.findIndex.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [predicate: Function, thisArg?: any] |

##### Returns

`Promise`<`number`\>

#### Defined in

[src/dom/types.ts:461](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L461)

___

### flat

• **flat**: (...`args`: [depth?: number]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.flat that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [depth?: number] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:463](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L463)

___

### flatMap

• **flatMap**: <U, This\>(...`args`: [callback: Function, thisArg?: This]) => `Promise`<`U`[]\>

#### Type declaration

▸ <`U`, `This`\>(`...args`): `Promise`<`U`[]\>

Wrapper for Array.entries.

NOTE: Mapped values can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Type parameters

| Name |
| :------ |
| `U` |
| `This` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callback: Function, thisArg?: This] |

##### Returns

`Promise`<`U`[]\>

#### Defined in

[src/dom/types.ts:469](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L469)

___

### forEach

• **forEach**: (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\>

#### Type declaration

▸ (`...args`): `Promise`<`void`\>

Wrapper for Array.forEach.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function, thisArg?: any] |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/dom/types.ts:474](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L474)

___

### forEachAsyncParallel

• **forEachAsyncParallel**: (...`args`: [callbackfn: Function]) => `Promise`<`void`\>

#### Type declaration

▸ (`...args`): `Promise`<`void`\>

Similar to Array.forEach, but awaits for Promises. Items are handled all in parallel.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function] |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/dom/types.ts:569](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L569)

___

### forEachAsyncSerial

• **forEachAsyncSerial**: (...`args`: [callbackfn: Function]) => `Promise`<`void`\>

#### Type declaration

▸ (`...args`): `Promise`<`void`\>

Similar to Array.forEach, but awaits for Promises. Items are handled one-by-one.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function] |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/dom/types.ts:562](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L562)

___

### includes

• **includes**: (...`args`: [searchElement: Portadom<El, BaseEl\>, fromIndex?: number]) => `Promise`<`boolean`\>

#### Type declaration

▸ (`...args`): `Promise`<`boolean`\>

Wrapper for Array.includes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [searchElement: Portadom<El, BaseEl\>, fromIndex?: number] |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/dom/types.ts:476](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L476)

___

### indexOf

• **indexOf**: (...`args`: [searchElement: Portadom<El, BaseEl\>, fromIndex?: number]) => `Promise`<`number`\>

#### Type declaration

▸ (`...args`): `Promise`<`number`\>

Wrapper for Array.indexOf.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [searchElement: Portadom<El, BaseEl\>, fromIndex?: number] |

##### Returns

`Promise`<`number`\>

#### Defined in

[src/dom/types.ts:478](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L478)

___

### join

• **join**: (...`args`: [separator?: string]) => `Promise`<`string`\>

#### Type declaration

▸ (`...args`): `Promise`<`string`\>

Wrapper for Array.join.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [separator?: string] |

##### Returns

`Promise`<`string`\>

#### Defined in

[src/dom/types.ts:480](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L480)

___

### keys

• **keys**: (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\>

#### Type declaration

▸ (`...args`): `Promise`<`IterableIterator`<`number`\>\>

Wrapper for Array.keys.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`Promise`<`IterableIterator`<`number`\>\>

#### Defined in

[src/dom/types.ts:482](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L482)

___

### lastIndexOf

• **lastIndexOf**: (...`args`: [searchElement: Portadom<El, BaseEl\>, fromIndex?: number]) => `Promise`<`number`\>

#### Type declaration

▸ (`...args`): `Promise`<`number`\>

Wrapper for Array.lastIndexOf.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [searchElement: Portadom<El, BaseEl\>, fromIndex?: number] |

##### Returns

`Promise`<`number`\>

#### Defined in

[src/dom/types.ts:484](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L484)

___

### length

• **length**: `Promise`<`number`\>

Wrapper for Array.length.

#### Defined in

[src/dom/types.ts:486](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L486)

___

### map

• **map**: <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\>

#### Type declaration

▸ <`U`\>(`...args`): `Promise`<`U`[]\>

Wrapper for Array.map.

NOTE: Mapped values can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function, thisArg?: any] |

##### Returns

`Promise`<`U`[]\>

#### Defined in

[src/dom/types.ts:492](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L492)

___

### mapAsyncParallel

• **mapAsyncParallel**: <U\>(...`args`: [callbackfn: Function]) => `Promise`<`Awaited`<`U`\>[]\>

#### Type declaration

▸ <`U`\>(`...args`): `Promise`<`Awaited`<`U`\>[]\>

Similar to Array.map, but awaits for Promises. Items are handled all in parallel.

NOTE: Mapped values can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function] |

##### Returns

`Promise`<`Awaited`<`U`\>[]\>

#### Defined in

[src/dom/types.ts:587](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L587)

___

### mapAsyncSerial

• **mapAsyncSerial**: <U\>(...`args`: [callbackfn: Function]) => `Promise`<`Awaited`<`U`\>[]\>

#### Type declaration

▸ <`U`\>(`...args`): `Promise`<`Awaited`<`U`\>[]\>

Similar to Array.map, but awaits for Promises. Items are handled one-by-one.

NOTE: Mapped values can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [callbackfn: Function] |

##### Returns

`Promise`<`Awaited`<`U`\>[]\>

#### Defined in

[src/dom/types.ts:578](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L578)

___

### pop

• **pop**: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.pop that returns the resulting item as [PortadomPromise](PortadomPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:497](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L497)

___

### promise

• **promise**: `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]\>

Wrapped Promise of an array of [Portadom](Portadom.md) instances

#### Defined in

[src/dom/types.ts:410](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L410)

___

### push

• **push**: (...`args`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `Promise`<`number`\>

#### Type declaration

▸ (`...args`): `Promise`<`number`\>

Wrapper for Array.push.

NOTE: The pushed values are expected to be [Portadom](Portadom.md) instances.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[] |

##### Returns

`Promise`<`number`\>

#### Defined in

[src/dom/types.ts:503](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L503)

___

### reverse

• **reverse**: (...`args`: []) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.reverse that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:523](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L523)

___

### shift

• **shift**: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.shift that returns the resulting item as [PortadomPromise](PortadomPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

[`PortadomPromise`](PortadomPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:527](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L527)

___

### slice

• **slice**: (...`args`: [start?: number, end?: number]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.slice that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [start?: number, end?: number] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:531](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L531)

___

### some

• **some**: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\>

#### Type declaration

▸ (`...args`): `Promise`<`boolean`\>

Wrapper for Array.some.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [predicate: Function, thisArg?: any] |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[src/dom/types.ts:533](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L533)

___

### sort

• **sort**: (...`args`: [compareFn?: Function]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.sort that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [compareFn?: Function] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:537](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L537)

___

### splice

• **splice**: (...`args`: [start: number, deleteCount: number, ...items: Portadom<El, BaseEl\>[]]) => [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Type declaration

▸ (`...args`): [`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

Wrapper for Array.splice that returns the resulting array wrapped in [PortadomArrayPromise](PortadomArrayPromise.md).

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [start: number, deleteCount: number, ...items: Portadom<El, BaseEl\>[]] |

##### Returns

[`PortadomArrayPromise`](PortadomArrayPromise.md)<`El`, `BaseEl`\>

#### Defined in

[src/dom/types.ts:541](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L541)

___

### unshift

• **unshift**: (...`args`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `Promise`<`number`\>

#### Type declaration

▸ (`...args`): `Promise`<`number`\>

Wrapper for Array.unshift.

NOTE: The added values are expected to be [Portadom](Portadom.md) instances.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[] |

##### Returns

`Promise`<`number`\>

#### Defined in

[src/dom/types.ts:549](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L549)

___

### values

• **values**: (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>\>

#### Type declaration

▸ (`...args`): `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>\>

NOTE: Does NOT return an instance of PortadomArrayPromise

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>\>

#### Defined in

[src/dom/types.ts:551](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L551)

## Methods

### reduce

▸ **reduce**(`callbackfn`): `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

Wrapper for Array.reduce.

NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |

#### Returns

`Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Defined in

[src/dom/types.ts:509](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L509)

▸ **reduce**(`callbackfn`, `initialValue`): `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |
| `initialValue` | [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |

#### Returns

`Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Defined in

[src/dom/types.ts:510](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L510)

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `Promise`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `U` |
| `initialValue` | `U` |

#### Returns

`Promise`<`U`\>

#### Defined in

[src/dom/types.ts:511](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L511)

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

Wrapper for Array.reduceRight.

NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |

#### Returns

`Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Defined in

[src/dom/types.ts:517](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L517)

▸ **reduceRight**(`callbackfn`, `initialValue`): `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |
| `initialValue` | [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |

#### Returns

`Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Defined in

[src/dom/types.ts:518](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L518)

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `Promise`<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `U` |
| `initialValue` | `U` |

#### Returns

`Promise`<`U`\>

#### Defined in

[src/dom/types.ts:519](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/dom/types.ts#L519)
