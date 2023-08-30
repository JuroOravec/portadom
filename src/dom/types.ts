// NOTE: no-check might be required to silence errors from typedoc
// // @ts-nocheck
import type { StrAsNumOptions } from '../utils/format';
import type { FormatUrlOptions } from '../utils/url';
import type { MaybeArray, MaybePromise } from '../utils/types';

/**
 * Common interface for working with DOM despite different environments.
 *
 * Consider these environments:
 * 1) Browser (via Playwright & Chromium) - uses Browser API to work with DOM
 * 2) Cheerio - uses own API to work with DOM
 *
 * This common interfaces makes the scraping code more portable between the two.
 */
export interface Portadom<El extends BaseEl, BaseEl> {
  node: El | null;

  ///////////////////////
  // SCALAR OPERATIONS
  ///////////////////////

  /** Get element's text (trimmed) */
  text: (options?: { allowEmpty?: boolean }) => MaybePromise<string | null>;
  /** Get element's text as uppercase (trimmed) */
  textAsUpper: (options?: { allowEmpty?: boolean }) => MaybePromise<string | null>;
  /** Get element's text as lowercase (trimmed) */
  textAsLower: (options?: { allowEmpty?: boolean }) => MaybePromise<string | null>;
  /** Get element's text and convert it to number */
  textAsNumber: (options?: StrAsNumOptions) => MaybePromise<number | null>;
  /** Get element's attribute */
  attr: (attrName: string, options?: { allowEmpty?: boolean }) => MaybePromise<string | null>;
  /** Get element's attributes */
  attrs: <T extends string>(
    attrNames: T[],
    options?: { allowEmpty?: boolean }
  ) => MaybePromise<Record<T, string | null>>;
  /** Get element's property */
  prop: <R = unknown>(
    /** Single or nested prop path */
    propName: MaybeArray<string>,
    options?: { allowEmpty?: boolean }
  ) => MaybePromise<R>;
  /** Get element's properties */
  props: <R extends any[]>(
    /** List of single or nested prop paths */
    propName: MaybeArray<string>[],
    options?: { allowEmpty?: boolean }
  ) => MaybePromise<R>;
  /** Get element's href */
  href: (options?: { allowEmpty?: boolean } & FormatUrlOptions) => MaybePromise<string | null>;
  /** Get element's src */
  src: (options?: { allowEmpty?: boolean } & FormatUrlOptions) => MaybePromise<string | null>;
  /** Get element's nodeName */
  nodeName: () => MaybePromise<string | null>;
  /** Get URL of website associated with the DOM */
  url: () => MaybePromise<string | null>;
  /** Freely modify the underlying DOM node */
  map: <TVal>(map: (node: El | null) => TVal) => MaybePromise<TVal>;

  ///////////////////////
  // NODE OPERATIONS
  ///////////////////////

  /** Get a single descendant matching the selector */
  findOne: <TNewEl extends BaseEl = El>(selector: string) => PortadomPromise<TNewEl, BaseEl>; // prettier-ignore
  /** Get all descendants matching the selector */
  findMany: <TNewEl extends BaseEl = El>(selector: string) => PortadomArrayPromise<TNewEl, BaseEl>; // prettier-ignore
  /** Get a single ancestor (or itself) matching the selector */
  closest: <TNewEl extends BaseEl = El>(selector: string) => PortadomPromise<TNewEl, BaseEl>; // prettier-ignore
  /** Get element's parent */
  parent: <TNewEl extends BaseEl = El>() => PortadomPromise<TNewEl, BaseEl>;
  /** Get element's children */
  children: <TNewEl extends BaseEl = El>() => PortadomArrayPromise<TNewEl, BaseEl>;
  /** Remove the element */
  remove: () => MaybePromise<void>;
  /** Get root element */
  root: <TNewEl extends BaseEl = El>() => PortadomPromise<TNewEl, BaseEl>;

  /**
   * Given two elements, return closest ancestor element that encompases them both,
   * or `null` if none such found.
   */
  getCommonAncestor: <TNewEl extends BaseEl = El>(otherEl: El) => PortadomPromise<TNewEl, BaseEl>;
  /**
   * Given a selector, find all DOM elements that match the selector,
   * and return closest ancestor element that encompases them all,
   * or `null` if none such found.
   */
  getCommonAncestorFromSelector: <TNewEl extends BaseEl = El>(
    selector: string
  ) => PortadomPromise<TNewEl, BaseEl>;
}

/**
 * Wrapper for a {@link Promise} that resolves to a {@link Portadom} instance. This allows us to chain
 * Portadom methods before the Promise is resolved.
 *
 * Example:
 *
 * ```js
 * const dom = Promise.resolve(browserPortadom({}));
 * ```
 *
 * Instead of:
 * ```js
 * const resA = await (await dom).findOne('..');
 * const resB = await (await dom).text();
 * ```
 *
 * You can call:
 * ```js
 * const domP = createPortadomPromise(dom);
 * const resA = await domP.findOne('..');
 * const resB = await domP.text();
 * ```
 */
export interface PortadomPromise<El extends BaseEl, BaseEl> {
  promise: Promise<Portadom<El, BaseEl> | null>;
  node: Promise<NonNullable<El> | null>;

  ///////////////////////
  // SCALAR OPERATIONS
  ///////////////////////

  /** Get element's text (trimmed) */
  text: (
    ...args: Parameters<Portadom<El, BaseEl>['text']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['text']>>>;
  /** Get element's text as uppercase (trimmed) */
  textAsUpper: (
    ...args: Parameters<Portadom<El, BaseEl>['textAsUpper']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['textAsUpper']>>>;
  /** Get element's text as lowercase (trimmed) */
  textAsLower: (
    ...args: Parameters<Portadom<El, BaseEl>['textAsLower']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['textAsLower']>>>;
  /** Get element's text and convert it to number */
  textAsNumber: (
    ...args: Parameters<Portadom<El, BaseEl>['textAsNumber']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['textAsNumber']>>>;
  /** Get element's attribute */
  attr: (
    ...args: Parameters<Portadom<El, BaseEl>['attr']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['attr']>>>;
  /** Get element's attributes */
  attrs: <Attrs extends string>(
    ...args: [attrNames: Attrs[], options?: { allowEmpty?: boolean }]
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['attrs']> | null>>;
  /** Get element's property */
  prop: <R = unknown>(...args: Parameters<Portadom<El, BaseEl>['prop']>) => Promise<R | null>;
  /** Get element's properties */
  props: <R extends any[]>(...args: Parameters<Portadom<El, BaseEl>['props']>) => Promise<R | null>;
  /** Get element's href */
  href: (
    ...args: Parameters<Portadom<El, BaseEl>['href']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['href']>>>;
  /** Get element's src */
  src: (
    ...args: Parameters<Portadom<El, BaseEl>['src']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['src']>>>;
  /** Get element's nodeName */
  nodeName: (
    ...args: Parameters<Portadom<El, BaseEl>['nodeName']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['nodeName']>>>;
  /** Get URL of website associated with the DOM */
  url: (
    ...args: Parameters<Portadom<El, BaseEl>['url']>
  ) => Promise<Awaited<ReturnType<Portadom<El, BaseEl>['url']>>>;
  /** Freely modify the underlying DOM node */
  map: <TVal>(...args: [map: (node: El | null) => TVal]) => Promise<TVal | null>;

  ///////////////////////
  // NODE OPERATIONS
  ///////////////////////

  /** Get a single descendant matching the selector */
  findOne: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['findOne']>
  ) => PortadomPromise<TNewEl, BaseEl>;
  /** Get all descendants matching the selector */
  findMany: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['findMany']>
  ) => PortadomArrayPromise<TNewEl, BaseEl>;
  /** Get a single ancestor (or itself) matching the selector */
  closest: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['closest']>
  ) => PortadomPromise<TNewEl, BaseEl>;
  /** Get element's parent */
  parent: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['parent']>
  ) => PortadomPromise<TNewEl, BaseEl>;
  /** Get element's children */
  children: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['children']>
  ) => PortadomArrayPromise<TNewEl, BaseEl>;
  /** Remove the element */
  remove: (...args: Parameters<Portadom<El, BaseEl>['remove']>) => MaybePromise<void>;
  /** Get root element */
  root: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['root']>
  ) => PortadomPromise<TNewEl, BaseEl>;

  /**
   * Given two elements, return closest ancestor element that encompases them both,
   * or `null` if none such found.
   */
  getCommonAncestor: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['getCommonAncestor']>
  ) => PortadomPromise<TNewEl, BaseEl>;
  /**
   * Given a selector, find all DOM elements that match the selector,
   * and return closest ancestor element that encompases them all,
   * or `null` if none such found.
   */
  getCommonAncestorFromSelector: <TNewEl extends BaseEl = El>(
    ...args: Parameters<Portadom<El, BaseEl>['getCommonAncestorFromSelector']>
  ) => PortadomPromise<TNewEl, BaseEl>;
}

/**
 * Wrapper for a {@link Promise} that resolves to a {@link Portadom} instance. This allows us to chain
 * Portadom methods before the Promise is resolved.
 *
 * Example:
 *
 * ```js
 * const dom = Promise.resolve(browserPortadom({}));
 * ```
 *
 * Instead of:
 * ```js
 * const resA = await (await dom).findOne('..');
 * const resB = await (await dom).text();
 * ```
 *
 * You can call:
 * ```js
 * const domP = createPortadomPromise(dom);
 * const resA = await domP.findOne('..');
 * const resB = await domP.text();
 * ```
 */
export const createPortadomPromise = <El extends BaseEl, BaseEl>(
  promiseDom: MaybePromise<Portadom<El, BaseEl> | null>
): PortadomPromise<El, BaseEl> => {
  type T = Portadom<El, BaseEl>;

  const promise = Promise.resolve(promiseDom);
  return {
    promise,
    get node() {
      return promise.then((d) => d?.node ?? null);
    },

    ///////////////////////
    // SCALAR OPERATIONS
    ///////////////////////

    /** Get element's text (trimmed) */
    text: (...args: Parameters<T['text']>) => promise.then((d) => d?.text(...args) ?? null),
    /** Get element's text as uppercase (trimmed) */
    textAsUpper: (...args: Parameters<T['textAsUpper']>) => promise.then((d) => d?.textAsUpper(...args) ?? null),
    /** Get element's text as lowercase (trimmed) */
    textAsLower: (...args: Parameters<T['textAsLower']>) => promise.then((d) => d?.textAsLower(...args) ?? null),
    /** Get element's text and convert it to number */
    textAsNumber: (...args: Parameters<T['textAsNumber']>) => promise.then((d) => d?.textAsNumber(...args) ?? null),
    /** Get element's attribute */
    attr: (...args: Parameters<T['attr']>) => promise.then((d) => d?.attr(...args) ?? null),
    /** Get element's attributes */
    attrs: <Attrs extends string>(...args: [
      attrNames: Attrs[],
      options?: { allowEmpty?: boolean }
    ]) => promise.then((d) => d?.attrs<Attrs>(...args) ?? null),
    /** Get element's property */
    prop: <R = unknown>(...args: Parameters<T['prop']>) => promise.then<R | null>((d) => d?.prop<R>(...args) ?? null),
    /** Get element's properties */
    props: <R extends any[]>(...args: Parameters<T['props']>) => promise.then<R | null>((d) => d?.props<R>(...args) ?? null),
    /** Get element's href */
    href: (...args: Parameters<T['href']>) => promise.then((d) => d?.href(...args) ?? null),
    /** Get element's src */
    src: (...args: Parameters<T['src']>) => promise.then((d) => d?.src(...args) ?? null),
    /** Get element's nodeName */
    nodeName: (...args: Parameters<T['nodeName']>) => promise.then((d) => d?.nodeName(...args) ?? null),
    /** Get URL of website associated with the DOM */
    url: (...args: Parameters<T['url']>) => promise.then((d) => d?.url(...args) ?? null),
    /** Freely modify the underlying DOM node */
    map: <TVal>(...args: [
      map: (node: El | null) => TVal
    ]) => promise.then<TVal | null>((d) => d?.map<TVal>(...args) ?? null),

    ///////////////////////
    // NODE OPERATIONS
    ///////////////////////

    /** Get a single descendant matching the selector */
    findOne: <TNewEl extends BaseEl = El>(...args: Parameters<T['findOne']>) => {
      return createPortadomPromise(
        promise.then<Portadom<TNewEl, BaseEl> | null>(async (d) => {
          const res = await d?.findOne<TNewEl>(...args).promise ?? null;
          return res;
        })
      );
    },
    /** Get all descendants matching the selector */
    findMany: <TNewEl extends BaseEl = El>(...args: Parameters<T['findMany']>) => {
      return createPortadomArrayPromise(
        promise.then<Portadom<TNewEl, BaseEl>[]>((d) => d ? d.findMany<TNewEl>(...args).promise : [])
      );
    },
    /** Get a single ancestor (or itself) matching the selector */
    closest: <TNewEl extends BaseEl = El>(...args: Parameters<T['closest']>) => {
      return createPortadomPromise(
        promise.then<Portadom<TNewEl, BaseEl> | null>(async (d) => {
          const res = await d?.closest<TNewEl>(...args).promise ?? null;
          return res;
        })
      );
    },
    /** Get element's parent */
    parent: <TNewEl extends BaseEl = El>(...args: Parameters<T['parent']>) => {
      return createPortadomPromise(
        promise.then<Portadom<TNewEl, BaseEl> | null>(async (d) => {
          const res = await d?.parent<TNewEl>(...args).promise ?? null;
          return res;
        }),
      );
    },
    /** Get element's children */
    children: <TNewEl extends BaseEl = El>(...args: Parameters<T['children']>) => {
      return createPortadomArrayPromise(
        promise.then<Portadom<TNewEl, BaseEl>[]>((d) => d ? d.children<TNewEl>(...args).promise : [])
      );
    },
    /** Get remove the element */
    remove: (...args: Parameters<T['remove']>) => promise.then((d) => d?.remove(...args)),
    /** Get root element */
    root: <TNewEl extends BaseEl = El>(...args: Parameters<T['root']>) => {
      return createPortadomPromise(
        promise.then<Portadom<TNewEl, BaseEl> | null>(async (d) => {
          const res = await d?.root<TNewEl>(...args).promise ?? null;
          return res;
        })
      );
    },
    /**
     * Given two elements, return closest ancestor element that encompases them both,
     * or `null` if none such found.
     */
    getCommonAncestor: <TNewEl extends BaseEl = El>(...args: [
      otherEl: El
    ]) => {
      return createPortadomPromise(
        promise.then<Portadom<TNewEl, BaseEl> | null>(async (d) => {
          const res = await d?.getCommonAncestor<TNewEl>(...args).promise ?? null;
          return res;
        }),
      );
    },
    /**
     * Given a selector, find all DOM elements that match the selector,
     * and return closest ancestor element that encompases them all,
     * or `null` if none such found.
     */
    getCommonAncestorFromSelector: <TNewEl extends BaseEl = El>(...args: [
      selector: string
    ]) => {
      return createPortadomPromise(
        promise.then<Portadom<TNewEl, BaseEl> | null>(async (d) => {
          const res = await d?.getCommonAncestorFromSelector<TNewEl>(...args).promise ?? null;
          return res;
        }),
      );
    },
  } satisfies PortadomPromise<El, BaseEl>; // prettier-ignore
};

export type PortadomArrayPromise<El extends BaseEl, BaseEl> = ReturnType<
  typeof createPortadomArrayPromise<El, BaseEl>
>;

/**
 * Wrapper for a {@link Promise} that resolves to a n Array of {@link Portadom} instances. This allows us to chain
 * Portadom methods before the Promise is resolved.
 *
 * Example:
 *
 * ```js
 * const dom = Promise.resolve(browserPortadom({}));
 * ```
 *
 * Instead of:
 * ```js
 * const resA = await (await dom).findOne('..');
 * const resB = await (await dom).text();
 * ```
 *
 * You can call:
 * ```js
 * const domP = createPortadomArrayPromise(dom);
 * const resA = await domP.findOne('..');
 * const resB = await domP.text();
 * ```
 */
export const createPortadomArrayPromise = <El extends BaseEl, BaseEl>(
  promiseDom: MaybePromise<Portadom<El, BaseEl>[]>
) => {
  type T = Portadom<El, BaseEl>;

  const promise = Promise.resolve(promiseDom);
  return {
    promise,
    at: (...args: Parameters<T[]['at']>) => createPortadomPromise(
      promise.then((d) => d.at(...args) ?? null)
    ),
    /** NOTE: The concat values are expected to be Portadom instances */
    concat: (...args: Parameters<T[]['concat']>) => createPortadomArrayPromise(
      promise.then((d) => d.concat(...args))
    ),
    copyWithin: (...args: Parameters<T[]['copyWithin']>) => createPortadomArrayPromise(
      promise.then((d) => d.copyWithin(...args))
    ),
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    entries: (...args: Parameters<T[]['entries']>) => promise.then((d) => d.entries(...args)),
    every: (...args: Parameters<T[]['every']>) => promise.then((d) => d.every(...args)),
    /** NOTE: The fill value is expected to be a Portadom instance */
    fill: (...args: Parameters<T[]['fill']>) => createPortadomArrayPromise(
      promise.then((d) => d.fill(...args))
    ),
    filter: (...args: Parameters<T[]['filter']>) => createPortadomArrayPromise(
      promise.then((d) => d.filter(...args))
    ),
    find: (...args: Parameters<T[]['find']>) => createPortadomPromise(
      promise.then((d) => d.find(...args) ?? null)
    ),
    findIndex: (...args: Parameters<T[]['findIndex']>) => promise.then((d) => d.findIndex(...args)),
    flat: (...args: Parameters<T[]['flat']>) => createPortadomArrayPromise(
      promise.then((d) => d.flat(...args))
    ),
    /** NOTE: Items are expected to be mapped to Portadom instances */
    flatMap: <U extends T, This>(...args: [
      callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[],
      thisArg?: This | undefined
    ]) => createPortadomArrayPromise(
      promise.then((d) => d.flatMap<U, This>(...args))
    ),
    forEach: (...args: Parameters<T[]['forEach']>) => promise.then((d) => d.forEach(...args)),
    includes: (...args: Parameters<T[]['includes']>) => promise.then((d) => d.includes(...args)),
    indexOf: (...args: Parameters<T[]['indexOf']>) => promise.then((d) => d.indexOf(...args)),
    join: (...args: Parameters<T[]['join']>) => promise.then((d) => d.join(...args)),
    keys: (...args: Parameters<T[]['keys']>) => promise.then((d) => d.keys(...args)),
    lastIndexOf: (...args: Parameters<T[]['lastIndexOf']>) => promise.then((d) => d.lastIndexOf(...args)),
    get length () {
      return promise.then((d) => d.length);
    },
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    map: <U>(...args: [
      callbackfn: (value: Portadom<El, BaseEl>, index: number, array: Portadom<El, BaseEl>[]) => U,
      thisArg?: any
    ]) => promise.then((d) => d.map(...args)),
    pop: (...args: Parameters<T[]['pop']>) => createPortadomPromise(
      promise.then((d) => d.pop(...args) ?? null)
    ),
    push: (...args: Parameters<T[]['push']>) => promise.then((d) => d.push(...args)),
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    reduce: (...args: Parameters<T[]['reduce']>) => promise.then((d) => d.reduce(...args)),
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    reduceRight: (...args: Parameters<T[]['reduceRight']>) => promise.then((d) => d.reduceRight(...args)),
    reverse: (...args: Parameters<T[]['reverse']>) => createPortadomArrayPromise(
      promise.then((d) => d.reverse(...args))
    ),
    shift: (...args: Parameters<T[]['shift']>) => createPortadomPromise(
      promise.then((d) => d.shift(...args) ?? null)
    ),
    slice: (...args: Parameters<T[]['slice']>) => createPortadomArrayPromise(
      promise.then((d) => d.slice(...args))
    ),
    some: (...args: Parameters<T[]['some']>) => promise.then((d) => d.some(...args)),
    sort: (...args: Parameters<T[]['sort']>) => createPortadomArrayPromise(
      promise.then((d) => d.sort(...args))
    ),
    splice: (...args: Parameters<T[]['splice']>) => createPortadomArrayPromise(
      promise.then((d) => d.splice(...args))
    ),
    unshift: (...args: Parameters<T[]['unshift']>) => promise.then((d) => d.unshift(...args)),
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    values: (...args: Parameters<T[]['values']>) => promise.then((d) => d.values(...args)),
  }; // prettier-ignore
};
