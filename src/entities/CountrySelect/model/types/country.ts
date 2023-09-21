export enum Country {
    USA = 'United States of America',
    GERMANY = 'Germany',
    UKRAINE = 'Ukraine',
    FRANCE = 'France',
    NETHERLANDS = 'Netherlands',
    BRITAIN = 'Great Britain',
}

export const CountryOptions: Record<Country, Country> = {
    [Country.GERMANY]: Country.GERMANY,
    [Country.USA]: Country.USA,
    [Country.NETHERLANDS]: Country.NETHERLANDS,
    [Country.BRITAIN]: Country.BRITAIN,
    [Country.UKRAINE]: Country.UKRAINE,
    [Country.FRANCE]: Country.FRANCE,

};
