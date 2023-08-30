[portadom](../README.md) / [Exports](../modules.md) / InfiniteScrollLoaderOptions

# Interface: InfiniteScrollLoaderOptions<T, TCtx\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `_AnyInfiScrollTypes` |
| `TCtx` | extends `Object` = { `container`: `T`[``"container"``]  } |

## Table of contents

### Properties

- [childrenCounter](InfiniteScrollLoaderOptions.md#childrencounter)
- [childrenGetter](InfiniteScrollLoaderOptions.md#childrengetter)
- [retries](InfiniteScrollLoaderOptions.md#retries)
- [scrollIntoView](InfiniteScrollLoaderOptions.md#scrollintoview)
- [waitAfterScroll](InfiniteScrollLoaderOptions.md#waitafterscroll)

## Properties

### childrenCounter

• `Optional` **childrenCounter**: (`containerEl`: `T`[``"container"``], `ctx`: `TCtx`) => `MaybePromise`<`number`\>

#### Type declaration

▸ (`containerEl`, `ctx`): `MaybePromise`<`number`\>

Override how container children are counted. Default uses `el.childElementCount`

##### Parameters

| Name | Type |
| :------ | :------ |
| `containerEl` | `T`[``"container"``] |
| `ctx` | `TCtx` |

##### Returns

`MaybePromise`<`number`\>

#### Defined in

[src/page/types.ts:61](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/page/types.ts#L61)

___

### childrenGetter

• `Optional` **childrenGetter**: (`containerEl`: `T`[``"container"``], `ctx`: `TCtx`) => `MaybePromise`<`T`[``"children"``]\>

#### Type declaration

▸ (`containerEl`, `ctx`): `MaybePromise`<`T`[``"children"``]\>

Override how container children are extraced. Default uses `el.children`

##### Parameters

| Name | Type |
| :------ | :------ |
| `containerEl` | `T`[``"container"``] |
| `ctx` | `TCtx` |

##### Returns

`MaybePromise`<`T`[``"children"``]\>

#### Defined in

[src/page/types.ts:63](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/page/types.ts#L63)

___

### retries

• `Optional` **retries**: `number`

How many times to retry the infinite scroll if new items aren't loading

#### Defined in

[src/page/types.ts:59](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/page/types.ts#L59)

___

### scrollIntoView

• `Optional` **scrollIntoView**: (`childEl`: `T`[``"child"``], `ctx`: `TCtx`) => `MaybePromise`<`void`\>

#### Type declaration

▸ (`childEl`, `ctx`): `MaybePromise`<`void`\>

Override how container children are scrolled into view. Default uses `el.scrollIntoView`

##### Parameters

| Name | Type |
| :------ | :------ |
| `childEl` | `T`[``"child"``] |
| `ctx` | `TCtx` |

##### Returns

`MaybePromise`<`void`\>

#### Defined in

[src/page/types.ts:65](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/page/types.ts#L65)

___

### waitAfterScroll

• `Optional` **waitAfterScroll**: (`childEl`: `T`[``"child"``], `ctx`: `TCtx`) => `MaybePromise`<`void`\>

#### Type declaration

▸ (`childEl`, `ctx`): `MaybePromise`<`void`\>

Override whether and how to wait after scrolling into view

##### Parameters

| Name | Type |
| :------ | :------ |
| `childEl` | `T`[``"child"``] |
| `ctx` | `TCtx` |

##### Returns

`MaybePromise`<`void`\>

#### Defined in

[src/page/types.ts:67](https://github.com/JuroOravec/portadom/blob/5acdd8c/src/page/types.ts#L67)
