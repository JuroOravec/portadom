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
- [find](PortadomArrayPromise.md#find)
- [findIndex](PortadomArrayPromise.md#findindex)
- [flat](PortadomArrayPromise.md#flat)
- [flatMap](PortadomArrayPromise.md#flatmap)
- [forEach](PortadomArrayPromise.md#foreach)
- [includes](PortadomArrayPromise.md#includes)
- [indexOf](PortadomArrayPromise.md#indexof)
- [join](PortadomArrayPromise.md#join)
- [keys](PortadomArrayPromise.md#keys)
- [lastIndexOf](PortadomArrayPromise.md#lastindexof)
- [length](PortadomArrayPromise.md#length)
- [map](PortadomArrayPromise.md#map)
- [pop](PortadomArrayPromise.md#pop)
- [promise](PortadomArrayPromise.md#promise)
- [push](PortadomArrayPromise.md#push)
- [reduce](PortadomArrayPromise.md#reduce)
- [reduceRight](PortadomArrayPromise.md#reduceright)
- [reverse](PortadomArrayPromise.md#reverse)
- [shift](PortadomArrayPromise.md#shift)
- [slice](PortadomArrayPromise.md#slice)
- [some](PortadomArrayPromise.md#some)
- [sort](PortadomArrayPromise.md#sort)
- [splice](PortadomArrayPromise.md#splice)
- [unshift](PortadomArrayPromise.md#unshift)
- [values](PortadomArrayPromise.md#values)

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

[src/dom/types.ts:403](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L403)

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

[src/dom/types.ts:409](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L409)

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

[src/dom/types.ts:417](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L417)

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

[src/dom/types.ts:425](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L425)

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

[src/dom/types.ts:429](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L429)

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

[src/dom/types.ts:437](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L437)

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

[src/dom/types.ts:441](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L441)

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

[src/dom/types.ts:445](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L445)

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

[src/dom/types.ts:447](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L447)

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

[src/dom/types.ts:449](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L449)

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

[src/dom/types.ts:455](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L455)

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

[src/dom/types.ts:460](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L460)

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

[src/dom/types.ts:462](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L462)

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

[src/dom/types.ts:464](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L464)

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

[src/dom/types.ts:466](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L466)

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

[src/dom/types.ts:468](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L468)

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

[src/dom/types.ts:470](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L470)

___

### length

• **length**: `Promise`<`number`\>

Wrapper for Array.length.

#### Defined in

[src/dom/types.ts:472](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L472)

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

[src/dom/types.ts:478](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L478)

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

[src/dom/types.ts:483](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L483)

___

### promise

• **promise**: `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]\>

Wrapped Promise of an array of [Portadom](Portadom.md) instances

#### Defined in

[src/dom/types.ts:401](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L401)

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

[src/dom/types.ts:489](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L489)

___

### reduce

• **reduce**: (`callbackfn`: (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\>) => `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>(`callbackfn`: (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `initialValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>) => `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\><U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `U`, `initialValue`: `U`) => `Promise`<`U`\>

#### Type declaration

▸ (`callbackfn`): `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

Wrapper for Array.reduce.

NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |

##### Returns

`Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

▸ (`callbackfn`, `initialValue`): `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

Wrapper for Array.reduce.

NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |
| `initialValue` | [`Portadom`](Portadom.md)<`El`, `BaseEl`\> |

##### Returns

`Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

▸ <`U`\>(`callbackfn`, `initialValue`): `Promise`<`U`\>

Wrapper for Array.reduce.

NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `U` |
| `initialValue` | `U` |

##### Returns

`Promise`<`U`\>

#### Defined in

[src/dom/types.ts:495](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L495)

___

### reduceRight

• **reduceRight**: `Object`

Wrapper for Array.reduceRight.

NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of [PortadomArrayPromise](PortadomArrayPromise.md)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reduceRight` | (`callbackfn`: (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\>) => `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>(`callbackfn`: (`previousValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `initialValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>) => `Promise`<[`Portadom`](Portadom.md)<`El`, `BaseEl`\>\><U\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>, `currentIndex`: `number`, `array`: [`Portadom`](Portadom.md)<`El`, `BaseEl`\>[]) => `U`, `initialValue`: `U`) => `Promise`<`U`\> |

#### Defined in

[src/dom/types.ts:505](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L505)

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

[src/dom/types.ts:513](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L513)

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

[src/dom/types.ts:517](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L517)

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

[src/dom/types.ts:521](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L521)

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

[src/dom/types.ts:523](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L523)

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

[src/dom/types.ts:527](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L527)

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

[src/dom/types.ts:531](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L531)

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

[src/dom/types.ts:539](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L539)

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

[src/dom/types.ts:541](https://github.com/JuroOravec/portadom/blob/4a85752/src/dom/types.ts#L541)
