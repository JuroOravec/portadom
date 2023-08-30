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

[src/dom/types.ts:31](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L31)

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

[src/dom/types.ts:33](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L33)

___

### children

• **children**: <TNewEl\>() => { `at`: (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `concat`: (...`args`: (`T` \| `ConcatArray`<`T`\>)[]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `copyWithin`: (...`args`: [target: number, start: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `entries`: (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>]\>\> ; `every`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `fill`: (...`args`: [value: T, start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `filter`: (...`args`: [predicate: Function, thisArg?: any]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `find`: (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `findIndex`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\> ; `flat`: (...`args`: [depth?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `flatMap`: <U, This\>(...`args`: [callback: Function, thisArg?: This]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `forEach`: (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\> ; `includes`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`boolean`\> ; `indexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `join`: (...`args`: [separator?: string]) => `Promise`<`string`\> ; `keys`: (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\> ; `lastIndexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `map`: <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\> ; `pop`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `promise`: `Promise`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>[]\> ; `push`: (...`args`: `T`[]) => `Promise`<`number`\> ; `reduce`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reduceRight`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reverse`: (...`args`: []) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `shift`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `slice`: (...`args`: [start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `some`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `sort`: (...`args`: [compareFn?: Function]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `splice`: (...`args`: [start: number, deleteCount: number, ...items: T[]]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `unshift`: (...`args`: `T`[]) => `Promise`<`number`\> ; `values`: (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>\>\> ; `length`:   }

#### Type declaration

▸ <`TNewEl`\>(): `Object`

Get element's children

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TNewEl` | `El` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `at` | (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `concat` | (...`args`: (`T` \| `ConcatArray`<`T`\>)[]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `copyWithin` | (...`args`: [target: number, start: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `entries` | (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>]\>\> |
| `every` | (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> |
| `fill` | (...`args`: [value: T, start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `filter` | (...`args`: [predicate: Function, thisArg?: any]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `find` | (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `findIndex` | (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\> |
| `flat` | (...`args`: [depth?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `flatMap` | <U, This\>(...`args`: [callback: Function, thisArg?: This]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `forEach` | (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\> |
| `includes` | (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`boolean`\> |
| `indexOf` | (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> |
| `join` | (...`args`: [separator?: string]) => `Promise`<`string`\> |
| `keys` | (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\> |
| `lastIndexOf` | (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> |
| `map` | <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\> |
| `pop` | (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `promise` | `Promise`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>[]\> |
| `push` | (...`args`: `T`[]) => `Promise`<`number`\> |
| `reduce` | (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> |
| `reduceRight` | (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> |
| `reverse` | (...`args`: []) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `shift` | (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `slice` | (...`args`: [start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `some` | (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> |
| `sort` | (...`args`: [compareFn?: Function]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `splice` | (...`args`: [start: number, deleteCount: number, ...items: T[]]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `unshift` | (...`args`: `T`[]) => `Promise`<`number`\> |
| `values` | (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>\>\> |
| `get length()` | `Promise`<`number`\> |

#### Defined in

[src/dom/types.ts:73](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L73)

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

[src/dom/types.ts:69](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L69)

___

### findMany

• **findMany**: <TNewEl\>(`selector`: `string`) => { `at`: (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `concat`: (...`args`: (`T` \| `ConcatArray`<`T`\>)[]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `copyWithin`: (...`args`: [target: number, start: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `entries`: (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>]\>\> ; `every`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `fill`: (...`args`: [value: T, start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `filter`: (...`args`: [predicate: Function, thisArg?: any]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `find`: (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `findIndex`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\> ; `flat`: (...`args`: [depth?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `flatMap`: <U, This\>(...`args`: [callback: Function, thisArg?: This]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `forEach`: (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\> ; `includes`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`boolean`\> ; `indexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `join`: (...`args`: [separator?: string]) => `Promise`<`string`\> ; `keys`: (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\> ; `lastIndexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `map`: <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\> ; `pop`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `promise`: `Promise`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>[]\> ; `push`: (...`args`: `T`[]) => `Promise`<`number`\> ; `reduce`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reduceRight`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reverse`: (...`args`: []) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `shift`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `slice`: (...`args`: [start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `some`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `sort`: (...`args`: [compareFn?: Function]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `splice`: (...`args`: [start: number, deleteCount: number, ...items: T[]]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `unshift`: (...`args`: `T`[]) => `Promise`<`number`\> ; `values`: (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>\>\> ; `length`:   }

#### Type declaration

▸ <`TNewEl`\>(`selector`): `Object`

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

`Object`

| Name | Type |
| :------ | :------ |
| `at` | (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `concat` | (...`args`: (`T` \| `ConcatArray`<`T`\>)[]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `copyWithin` | (...`args`: [target: number, start: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `entries` | (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>]\>\> |
| `every` | (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> |
| `fill` | (...`args`: [value: T, start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `filter` | (...`args`: [predicate: Function, thisArg?: any]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `find` | (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `findIndex` | (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\> |
| `flat` | (...`args`: [depth?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `flatMap` | <U, This\>(...`args`: [callback: Function, thisArg?: This]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `forEach` | (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\> |
| `includes` | (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`boolean`\> |
| `indexOf` | (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> |
| `join` | (...`args`: [separator?: string]) => `Promise`<`string`\> |
| `keys` | (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\> |
| `lastIndexOf` | (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> |
| `map` | <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\> |
| `pop` | (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `promise` | `Promise`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>[]\> |
| `push` | (...`args`: `T`[]) => `Promise`<`number`\> |
| `reduce` | (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> |
| `reduceRight` | (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> |
| `reverse` | (...`args`: []) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `shift` | (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> |
| `slice` | (...`args`: [start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `some` | (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> |
| `sort` | (...`args`: [compareFn?: Function]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `splice` | (...`args`: [start: number, deleteCount: number, ...items: T[]]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } |
| `unshift` | (...`args`: `T`[]) => `Promise`<`number`\> |
| `values` | (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>\>\> |
| `get length()` | `Promise`<`number`\> |

#### Defined in

[src/dom/types.ts:67](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L67)

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

[src/dom/types.ts:65](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L65)

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

[src/dom/types.ts:83](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L83)

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

[src/dom/types.ts:89](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L89)

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

[src/dom/types.ts:50](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L50)

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

[src/dom/types.ts:58](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L58)

___

### node

• **node**: ``null`` \| `El`

#### Defined in

[src/dom/types.ts:16](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L16)

___

### nodeName

• **nodeName**: () => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (): `MaybePromise`<``null`` \| `string`\>

Get element's nodeName

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:54](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L54)

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

[src/dom/types.ts:71](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L71)

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

[src/dom/types.ts:38](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L38)

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

[src/dom/types.ts:44](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L44)

___

### remove

• **remove**: () => `MaybePromise`<`void`\>

#### Type declaration

▸ (): `MaybePromise`<`void`\>

Remove the element

##### Returns

`MaybePromise`<`void`\>

#### Defined in

[src/dom/types.ts:75](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L75)

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

[src/dom/types.ts:77](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L77)

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

[src/dom/types.ts:52](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L52)

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

[src/dom/types.ts:23](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L23)

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

[src/dom/types.ts:27](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L27)

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

[src/dom/types.ts:29](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L29)

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

[src/dom/types.ts:25](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L25)

___

### url

• **url**: () => `MaybePromise`<``null`` \| `string`\>

#### Type declaration

▸ (): `MaybePromise`<``null`` \| `string`\>

Get URL of website associated with the DOM

##### Returns

`MaybePromise`<``null`` \| `string`\>

#### Defined in

[src/dom/types.ts:56](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L56)
