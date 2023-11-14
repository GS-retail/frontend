import { Card } from "../components/Card";
import styles from "./HomePage.module.scss";

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Card.Container>
                {data.map((value, index) => {
                    return <Card.Item key={index} imgSrc={value.imgSrc} title={value.title} category={value.category} subcategory={value.subcategory} region={value.region} quantity={value.quantity} time={value.time} progress={value.progress} />;
                })}
            </Card.Container>
        </main>
    );
}

const data = [
    {
        imgSrc: "https://i.namu.wiki/i/fhsBMFdIgnB_D4KHQpaG0n2yk5X26rVpfsYeoIaJxwb3gLbQDJ9C7rgVQEZWKfhUwE0bR_2yT0Y1FCOwkDePJg.webp",
        title: "라면 5개입 묶음 4개 있어요",
        category: "라면",
        subcategory: "즉석식품",
        region: "복현동",
        quantity: 1,
        time: 1,
        progress: 0.5,
    },
    {
        imgSrc: "https://i.namu.wiki/i/fhsBMFdIgnB_D4KHQpaG0n2yk5X26rVpfsYeoIaJxwb3gLbQDJ9C7rgVQEZWKfhUwE0bR_2yT0Y1FCOwkDePJg.webp",
        title: "라면 5개입 묶음 4개 있어요",
        category: "라면",
        subcategory: "즉석식품",
        region: "복현동",
        quantity: 1,
        time: 1,
        progress: 0.5,
    },
    {
        imgSrc: "https://i.namu.wiki/i/fhsBMFdIgnB_D4KHQpaG0n2yk5X26rVpfsYeoIaJxwb3gLbQDJ9C7rgVQEZWKfhUwE0bR_2yT0Y1FCOwkDePJg.webp",
        title: "라면 5개입 묶음 4개 있어요",
        category: "라면",
        subcategory: "즉석식품",
        region: "복현동",
        quantity: 1,
        time: 1,
        progress: 0.5,
    },
    {
        imgSrc: "https://i.namu.wiki/i/fhsBMFdIgnB_D4KHQpaG0n2yk5X26rVpfsYeoIaJxwb3gLbQDJ9C7rgVQEZWKfhUwE0bR_2yT0Y1FCOwkDePJg.webp",
        title: "라면 5개입 묶음 4개 있어요",
        category: "라면",
        subcategory: "즉석식품",
        region: "복현동",
        quantity: 1,
        time: 1,
        progress: 0.5,
    },
];
