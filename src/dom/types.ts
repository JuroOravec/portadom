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
export interface PortadomArrayPromise<El extends BaseEl, BaseEl> {
  /** Wrapped Promise of an array of {@link Portadom} instances */
  promise: Promise<Portadom<El, BaseEl>[]>;
  /** Wrapper for {@link Array.at} that returns the resulting item as {@link PortadomPromise}. */
  at: (...args: Parameters<Portadom<El, BaseEl>[]['at']>) => PortadomPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.concat} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   *
   * NOTE: The concat values are expected to be {@link Portadom} instances
   */
  concat: (
    ...args: Parameters<Portadom<El, BaseEl>[]['concat']>
  ) => PortadomArrayPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.copyWithin} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   *
   * NOTE: The concat values are expected to be {@link Portadom} instances
   */
  copyWithin: (
    ...args: Parameters<Portadom<El, BaseEl>[]['copyWithin']>
  ) => PortadomArrayPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.entries}.
   *
   * NOTE: Does NOT return an instance of {@link PortadomArrayPromise}
   */
  entries: (
    ...args: Parameters<Portadom<El, BaseEl>[]['entries']>
  ) => Promise<IterableIterator<[number, Portadom<El, BaseEl>]>>;
  /** Wrapper for {@link Array.every}. */
  every: (...args: Parameters<Portadom<El, BaseEl>[]['every']>) => Promise<boolean>;
  /**
   * Wrapper for {@link Array.fill}.
   *
   * NOTE: Fill values can be anything, so result is NOT wrapped in an instance of {@link PortadomArrayPromise}.
   *
   * NOTE2: Unlike {@link Array.fill}, this option doesn't allow to specify `start` and `end`.
   */
  fill: <U>(...args: [value: U]) => Promise<U[]>;
  /**
   * Wrapper for {@link Array.filter} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   */
  filter: (
    ...args: Parameters<Portadom<El, BaseEl>[]['filter']>
  ) => PortadomArrayPromise<El, BaseEl>;
  /** Wrapper for {@link Array.find} that returns the resulting item as {@link PortadomPromise}. */
  find: (...args: Parameters<Portadom<El, BaseEl>[]['find']>) => PortadomPromise<El, BaseEl>;
  /** Wrapper for {@link Array.findIndex}. */
  findIndex: (...args: Parameters<Portadom<El, BaseEl>[]['findIndex']>) => Promise<number>;
  /** Wrapper for {@link Array.flat} that returns the resulting array wrapped in {@link PortadomArrayPromise}. */
  flat: (...args: Parameters<Portadom<El, BaseEl>[]['flat']>) => PortadomArrayPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.entries}.
   *
   * NOTE: Mapped values can be anything, so result is NOT wrapped in an instance of {@link PortadomArrayPromise}
   */
  flatMap: <U, This>(...args: [
    callback: (this: This, value: Portadom<El, BaseEl>, index: number, array: Portadom<El, BaseEl>[]) => U | readonly U[],
    thisArg?: This | undefined
  ]) => Promise<U[]>; // prettier-ignore
  /** Wrapper for {@link Array.forEach}. */
  forEach: (...args: Parameters<Portadom<El, BaseEl>[]['forEach']>) => Promise<void>;
  /** Wrapper for {@link Array.includes}. */
  includes: (...args: Parameters<Portadom<El, BaseEl>[]['includes']>) => Promise<boolean>;
  /** Wrapper for {@link Array.indexOf}. */
  indexOf: (...args: Parameters<Portadom<El, BaseEl>[]['indexOf']>) => Promise<number>;
  /** Wrapper for {@link Array.join}. */
  join: (...args: Parameters<Portadom<El, BaseEl>[]['join']>) => Promise<string>;
  /** Wrapper for {@link Array.keys}. */
  keys: (...args: Parameters<Portadom<El, BaseEl>[]['keys']>) => Promise<IterableIterator<number>>;
  /** Wrapper for {@link Array.lastIndexOf}. */
  lastIndexOf: (...args: Parameters<Portadom<El, BaseEl>[]['lastIndexOf']>) => Promise<number>;
  /** Wrapper for {@link Array.length}. */
  length: Promise<number>;
  /**
   * Wrapper for {@link Array.map}.
   *
   * NOTE: Mapped values can be anything, so result is NOT wrapped in an instance of {@link PortadomArrayPromise}
   */
  map: <U>(...args: [
    callbackfn: (value: Portadom<El, BaseEl>, index: number, array: Portadom<El, BaseEl>[]) => U,
    thisArg?: any
  ]) => Promise<U[]>; // prettier-ignore
  /** Wrapper for {@link Array.pop} that returns the resulting item as {@link PortadomPromise}. */
  pop: (...args: Parameters<Portadom<El, BaseEl>[]['pop']>) => PortadomPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.push}.
   *
   * NOTE: The pushed values are expected to be {@link Portadom} instances.
   */
  push: (...args: Parameters<Portadom<El, BaseEl>[]['push']>) => Promise<number>;
  /**
   * Wrapper for {@link Array.reduce}.
   *
   * NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of {@link PortadomArrayPromise}
   */
  reduce: {
    (callbackfn: (previousValue: Portadom<El, BaseEl>, currentValue: Portadom<El, BaseEl>, currentIndex: number, array: Portadom<El, BaseEl>[]) => Portadom<El, BaseEl>): Promise<Portadom<El, BaseEl>>;
    (callbackfn: (previousValue: Portadom<El, BaseEl>, currentValue: Portadom<El, BaseEl>, currentIndex: number, array: Portadom<El, BaseEl>[]) => Portadom<El, BaseEl>, initialValue: Portadom<El, BaseEl>): Promise<Portadom<El, BaseEl>>;
    <U>(callbackfn: (previousValue: U, currentValue: Portadom<El, BaseEl>, currentIndex: number, array: Portadom<El, BaseEl>[]) => U, initialValue: U): Promise<U>;
  }; // prettier-ignore
  /**
   * Wrapper for {@link Array.reduceRight}.
   *
   * NOTE: The reduce value can be anything, so result is NOT wrapped in an instance of {@link PortadomArrayPromise}
   */
  reduceRight: {
    reduceRight(callbackfn: (previousValue: Portadom<El, BaseEl>, currentValue: Portadom<El, BaseEl>, currentIndex: number, array: Portadom<El, BaseEl>[]) => Portadom<El, BaseEl>): Promise<Portadom<El, BaseEl>>;
    reduceRight(callbackfn: (previousValue: Portadom<El, BaseEl>, currentValue: Portadom<El, BaseEl>, currentIndex: number, array: Portadom<El, BaseEl>[]) => Portadom<El, BaseEl>, initialValue: Portadom<El, BaseEl>): Promise<Portadom<El, BaseEl>>;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: Portadom<El, BaseEl>, currentIndex: number, array: Portadom<El, BaseEl>[]) => U, initialValue: U): Promise<U>;
  }; // prettier-ignore
  /**
   * Wrapper for {@link Array.reverse} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   */
  reverse: (
    ...args: Parameters<Portadom<El, BaseEl>[]['reverse']>
  ) => PortadomArrayPromise<El, BaseEl>;
  /** Wrapper for {@link Array.shift} that returns the resulting item as {@link PortadomPromise}. */
  shift: (...args: Parameters<Portadom<El, BaseEl>[]['shift']>) => PortadomPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.slice} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   */
  slice: (...args: Parameters<Portadom<El, BaseEl>[]['slice']>) => PortadomArrayPromise<El, BaseEl>;
  /** Wrapper for {@link Array.some}. */
  some: (...args: Parameters<Portadom<El, BaseEl>[]['some']>) => Promise<boolean>;
  /**
   * Wrapper for {@link Array.sort} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   */
  sort: (...args: Parameters<Portadom<El, BaseEl>[]['sort']>) => PortadomArrayPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.splice} that returns the resulting array wrapped in {@link PortadomArrayPromise}.
   */
  splice: (
    ...args: Parameters<Portadom<El, BaseEl>[]['splice']>
  ) => PortadomArrayPromise<El, BaseEl>;
  /**
   * Wrapper for {@link Array.unshift}.
   *
   * NOTE: The added values are expected to be {@link Portadom} instances.
   */
  unshift: (...args: Parameters<Portadom<El, BaseEl>[]['unshift']>) => Promise<number>;
  /** NOTE: Does NOT return an instance of PortadomArrayPromise */
  values: (
    ...args: Parameters<Portadom<El, BaseEl>[]['values']>
  ) => Promise<IterableIterator<Portadom<El, BaseEl>>>;
}

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
): PortadomArrayPromise<El, BaseEl> => {
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
    fill: <U>(...args: [value: U]) => promise.then((d) => d.fill(...(args as [any])) as U[]),
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
    flatMap: <U, This>(...args: [
      callback: (this: This, value: T, index: number, array: T[]) => U | readonly U[],
      thisArg?: This | undefined
    ]) => promise.then<U[]>((d) => d.flatMap<U, This>(...args)),
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
    ]) => promise.then<U[]>((d) => d.map(...args)),
    pop: (...args: Parameters<T[]['pop']>) => createPortadomPromise(
      promise.then((d) => d.pop(...args) ?? null)
    ),
    push: (...args: Parameters<T[]['push']>) => promise.then((d) => d.push(...args)),
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    // NOTE: reduce has a complex type, so let the type definition handle that
    reduce: (...args: any[]) => promise.then((d) => d.reduce(...args as [any])),
    /** NOTE: Does NOT return an instance of PortadomArrayPromise */
    // NOTE: reduceRight has a complex type, so let the type definition handle that
    reduceRight: ((...args: any[]) => promise.then<any>((d) => d.reduceRight(...args as [any]))) as any as PortadomArrayPromise<El, BaseEl>['reduceRight'],
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
  } satisfies PortadomArrayPromise<El, BaseEl>; // prettier-ignore
};
