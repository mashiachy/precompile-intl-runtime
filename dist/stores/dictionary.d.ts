import { DeepDictionary } from '../types/index';
declare const $dictionary: import("./store").Writable<Record<string, Record<string, import("../types/index").LocaleDictionaryValue>>>;
export declare function getLocaleDictionary(locale: string): Record<string, import("../types/index").LocaleDictionaryValue>;
export declare function getDictionary(): Record<string, Record<string, import("../types/index").LocaleDictionaryValue>>;
export declare function hasLocaleDictionary(locale: string): boolean;
export declare function getMessageFromDictionary(locale: string, id: string): import("../types/index").LocaleDictionaryValue;
export declare function getClosestAvailableLocale(locale: string): string | null;
export declare function addMessages(locale: string, ...partials: DeepDictionary[]): void;
declare const $locales: import("./store").Readable<string[]>;
export { $dictionary, $locales };
