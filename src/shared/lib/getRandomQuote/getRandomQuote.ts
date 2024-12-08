import axios from 'axios';

const API = {
    QUOTE_URL: 'http://api.forismatic.com/api/1.0/',
    IMAGE_URL: 'https://picsum.photos',
} as const;

export type GetQuoteResponseDto = {
    quoteText: string;
    quoteAuthor: string;
    senderName?: string;
    senderLink?: string;
    quoteLink: string;
};
// BAG Axios returns string instead of JSON
// axios cannot parse json with special symbols
const api = axios.create({
    baseURL: API.QUOTE_URL,
    transitional: {
        silentJSONParsing: false,
    },
    responseType: 'json',
});

export const getRandomQuote = async (): Promise<
    GetQuoteResponseDto | string
> => {
    try {
        // to test CORS disable -> Window+ R-> chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
        const response = await api.get<GetQuoteResponseDto | string>(
            API.QUOTE_URL,
            {
                params: { lang: 'en', format: 'json', method: 'getQuote' },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error while fetching quote', error);

        return {
            quoteText: '',
            quoteAuthor: '',
            quoteLink: '',
        };
    }
};

export async function fetchRandomQuote<T>(url: string): Promise<T> {
    // the same problem SyntaxError: Bad escaped character in JSON at position 52 (line 1 column 53)
    const response = await fetch(url);
    console.log('response', response);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return (await response.json()) as T;
}
