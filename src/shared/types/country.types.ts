export interface ICountry {
    name: ICountryName;
    cca3: string;
    capital?: string[];
    region: string;
    subregion?: string;
    borders?: string[];
    latlng: [number, number];
    flags: ICountryFlags;
    population: number;
    languages?: LanguageMap;
    translations: {
        rus: {
            common: string;
        };
    };
}

export interface ICountryName {
    common: string;
    official: string;
    nativeName?: Record<string, INativeLanguage>;
}

export interface INativeLanguage {
    official: string;
    common: string;
}

export interface ICountryFlags {
    png: string;
    svg: string;
    alt?: string;
}

export type LanguageMap = Record<string, string>;
