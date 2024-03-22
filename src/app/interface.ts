

interface CurrentPrice {
    usd: number;
    sar: number;
    mmk: number;
    xrp: number;
    idr: number;
    mxn: number;
    hkd: number;
    rub: number;
    xau: number;
    aud: number;
    pkr: number;
    bhd: number;
    xag: number;
    aed: number;
    jpy: number;
    dot: number;
    clp: number;
    huf: number;
    pln: number;
    vef: number;
    gbp: number;
    link: number;
    ltc: number;
    twd: number;
    xdr: number;
    xlm: number;
    bch: number;
    lkr: number;
    chf: number;
    dkk: number;
    eth: number;
    bnb: number;
    gel: number;
    eur: number;
    eos: number;
    brl: number;
    nzd: number;
    vnd: number;
    php: number;
    bmd: number;
    cny: number;
    zar: number;
    thb: number;
    ars: number;
    sek: number;
    inr: number;
    ils: number;
    bits: number;
    myr: number;
    sgd: number;
    cad: number;
    ngn: number;
    try: number;
    krw: number;
    uah: number;
    czk: number;
    kwd: number;
    btc: number;
    nok: number;
    yfi: number;
    bdt: number;
    sats: number;
}

interface MarketCap {
    bch: number;
    aed: number;
    vnd: number;
    eur: number;
    myr: number;
    uah: number;
    sats: number;
    xau: number;
    bhd: number;
    nok: number;
    dkk: number;
    ngn: number;
    usd: number;
    ltc: number;
    clp: number;
    yfi: number;
    bits: number;
    pln: number;
    try: number;
    eth: number;
    hkd: number;
    twd: number;
    xdr: number;
    mmk: number;
    link: number;
    sar: number;
    ils: number;
    bnb: number;
    czk: number;
    xag: number;
    bmd: number;
    xlm: number;
    vef: number;
    huf: number;
    cad: number;
    eos: number;
    krw: number;
    idr: number;
    gel: number;
    mxn: number;
    nzd: number;
    brl: number;
    lkr: number;
    bdt: number;
    pkr: number;
    gbp: number;
    thb: number;
    chf: number;
    cny: number;
    php: number;
    aud: number;
    jpy: number;
    kwd: number;
    dot: number;
    xrp: number;
    zar: number;
    sek: number;
    btc: number;
    rub: number;
    inr: number;
    sgd: number;
    ars: number;
}

interface Links {
    facebook_username: string;
    chat_url: string[];
    telegram_channel_identifier: string;
    blockchain_site: string[];
    announcement_url: string[];
    twitter_screen_name: string;
    bitcointalk_thread_identifier: any;
    official_forum_url: string[];
    whitepaper: string;
    homepage: string[];
    repos_url: object;
    subreddit_url: string;
}

interface Image {
    small: string;
    large: string;
    thumb: string;
}

export interface CoinData {
    current_price: CurrentPrice | any;
    symbol: string;
    last_updated: string;
    historical_data: CoinTimeSeries
    market_cap: MarketCap | any;
    price_change_percentage_200d: number | string;
    price_change_percentage_60d: number | string;
    name: string;
    links: Links | any;
    price_change_percentage_7d: number | string;
    id: string;
    price_change_percentage_1y: number | string;
    price_change_percentage_24h: number | string;
    genesis_date: string | any;
    hashing_algorithm: string | any;
    image: Image;
    price_change_percentage_30d: number | string;
    market_cap_rank: number;
    price_change_percentage_14d: number | string;
    total_volume?: any;
}


interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}


export interface TimeSeriesData {
    [date: string]: {
        '1a. open (USD)': string;
        '1b. open (USD)': string;
        '2a. high (USD)': string;
        '2b. high (USD)': string;
        '3a. low (USD)': string;
        '3b. low (USD)': string;
        '4a. close (USD)': string;
        '4b. close (USD)': string;
        '5. volume': string;
        '6. market cap (USD)': string;
    };
}

interface MetaData {
    '1. Information': string;
    '2. Digital Currency Code': string;
    '3. Digital Currency Name': string;
    '4. Market Code': string;
    '5. Market Name': string;
    '6. Last Refreshed': string;
    '7. Time Zone': string;
}

export interface CoinTimeSeries {
    'Time Series (Digital Currency Monthly)'?: TimeSeriesData | any;
    'Meta Data'?: MetaData | any;
    'Error Message'?: string;
}

export interface PricePercentObjectInterface {
    "24h": string;
    "7d": string;
    "14d": string;
    "30d": string;
    "60d": string;
    "200d": string;
    "1y": string;
}