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

[src/dom/types.ts:142](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L142)

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

[src/dom/types.ts:146](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L146)

___

### children

• **children**: <TNewEl\>(...`args`: []) => { `at`: (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `concat`: (...`args`: (`T` \| `ConcatArray`<`T`\>)[]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `copyWithin`: (...`args`: [target: number, start: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `entries`: (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>]\>\> ; `every`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `fill`: (...`args`: [value: T, start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `filter`: (...`args`: [predicate: Function, thisArg?: any]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `find`: (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `findIndex`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\> ; `flat`: (...`args`: [depth?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `flatMap`: <U, This\>(...`args`: [callback: Function, thisArg?: This]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `forEach`: (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\> ; `includes`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`boolean`\> ; `indexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `join`: (...`args`: [separator?: string]) => `Promise`<`string`\> ; `keys`: (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\> ; `lastIndexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `map`: <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\> ; `pop`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `promise`: `Promise`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>[]\> ; `push`: (...`args`: `T`[]) => `Promise`<`number`\> ; `reduce`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reduceRight`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reverse`: (...`args`: []) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `shift`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `slice`: (...`args`: [start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `some`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `sort`: (...`args`: [compareFn?: Function]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `splice`: (...`args`: [start: number, deleteCount: number, ...items: T[]]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `unshift`: (...`args`: `T`[]) => `Promise`<`number`\> ; `values`: (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>\>\> ; `length`:   }

#### Type declaration

▸ <`TNewEl`\>(`...args`): `Object`

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

[src/dom/types.ts:193](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L193)

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

[src/dom/types.ts:185](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L185)

___

### findMany

• **findMany**: <TNewEl\>(...`args`: [selector: string]) => { `at`: (...`args`: [index: number]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `concat`: (...`args`: (`T` \| `ConcatArray`<`T`\>)[]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `copyWithin`: (...`args`: [target: number, start: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `entries`: (...`args`: []) => `Promise`<`IterableIterator`<[`number`, [`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>]\>\> ; `every`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `fill`: (...`args`: [value: T, start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `filter`: (...`args`: [predicate: Function, thisArg?: any]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `find`: (...`args`: [predicate: Function, thisArg?: any]) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `findIndex`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`number`\> ; `flat`: (...`args`: [depth?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `flatMap`: <U, This\>(...`args`: [callback: Function, thisArg?: This]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `forEach`: (...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`void`\> ; `includes`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`boolean`\> ; `indexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `join`: (...`args`: [separator?: string]) => `Promise`<`string`\> ; `keys`: (...`args`: []) => `Promise`<`IterableIterator`<`number`\>\> ; `lastIndexOf`: (...`args`: [searchElement: T, fromIndex?: number]) => `Promise`<`number`\> ; `map`: <U\>(...`args`: [callbackfn: Function, thisArg?: any]) => `Promise`<`U`[]\> ; `pop`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `promise`: `Promise`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>[]\> ; `push`: (...`args`: `T`[]) => `Promise`<`number`\> ; `reduce`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reduceRight`: (...`args`: [callbackfn: Function, initialValue: unknown]) => `Promise`<`unknown`\> ; `reverse`: (...`args`: []) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `shift`: (...`args`: []) => [`PortadomPromise`](PortadomPromise.md)<`TNewEl`, `BaseEl`\> ; `slice`: (...`args`: [start?: number, end?: number]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `some`: (...`args`: [predicate: Function, thisArg?: any]) => `Promise`<`boolean`\> ; `sort`: (...`args`: [compareFn?: Function]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `splice`: (...`args`: [start: number, deleteCount: number, ...items: T[]]) => { promise: Promise<Portadom<TNewEl, BaseEl\>[]\>; at: (index: number) =\> PortadomPromise<TNewEl, BaseEl\>; concat: (...args: (T \| ConcatArray<...\>)[]) =\> ...; ... 28 more ...; values: () =\> Promise<...\>; } ; `unshift`: (...`args`: `T`[]) => `Promise`<`number`\> ; `values`: (...`args`: []) => `Promise`<`IterableIterator`<[`Portadom`](Portadom.md)<`TNewEl`, `BaseEl`\>\>\> ; `length`:   }

#### Type declaration

▸ <`TNewEl`\>(`...args`): `Object`

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

[src/dom/types.ts:181](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L181)

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

[src/dom/types.ts:177](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L177)

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

[src/dom/types.ts:207](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L207)

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

[src/dom/types.ts:215](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L215)

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

[src/dom/types.ts:154](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L154)

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

[src/dom/types.ts:170](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L170)

___

### node

• **node**: `Promise`<``null`` \| `NonNullable`<`El`\>\>

#### Defined in

[src/dom/types.ts:119](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L119)

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

[src/dom/types.ts:162](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L162)

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

[src/dom/types.ts:189](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L189)

___

### promise

• **promise**: `Promise`<``null`` \| [`Portadom`](Portadom.md)<`El`, `BaseEl`\>\>

#### Defined in

[src/dom/types.ts:118](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L118)

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

[src/dom/types.ts:150](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L150)

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

[src/dom/types.ts:152](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L152)

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

[src/dom/types.ts:197](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L197)

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

[src/dom/types.ts:199](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L199)

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

[src/dom/types.ts:158](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L158)

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

[src/dom/types.ts:126](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L126)

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

[src/dom/types.ts:134](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L134)

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

[src/dom/types.ts:138](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L138)

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

[src/dom/types.ts:130](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L130)

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

[src/dom/types.ts:166](https://github.com/JuroOravec/portadom/blob/7392e03/src/dom/types.ts#L166)
