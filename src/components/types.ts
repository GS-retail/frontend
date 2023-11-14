export interface ICardContainer {
    children: React.ReactNode;
    [key: string]: any;
}

export interface ICardItem {
    imgSrc: string;
    title: string;
    category: string;
    subcategory: string;
    region: string;
    quantity: number;
    time: number;
    progress: number;
}
