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

export interface ICategoryContainer {
    children: React.ReactNode;
}

export interface ICategoryItems {
    children: React.ReactNode;
}

export interface ICategoryItem {
    imgSrc: string;
    text: string;
}
