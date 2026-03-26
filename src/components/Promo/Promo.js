import styles from './Promo.module.css';
import Card from '@/components/Card/Card.js';

export default function Promo() {

    const combos = [
        {
            id: 1,
            name: "Combo Individual",
            items: "1 pastel + 1 refri 300ml",
            price: 12.9,
            img: "individual"
        },
        {
            id: 2,
            name: "Combo Dupla Dinâmica",
            items: "2 pastéis + 2 refri 350ml",
            price: 22.9,
            img: "dupla"
        },
        {
            id: 3,
            name: "Combo do Coelho",
            items: "3 pastéis + 1 refri 600ml",
            price: 24.9,
            img: "coelho"
        },
        {
            id: 4,
            name: "Combo Família",
            items: "5 pastéis + 1 refri 2L",
            price: 49.9,
            img: "familia"
        }
    ];

    return (
        <section id="promo" className={styles.promo}>
            <h3 className="subtitle">Promoções</h3>

            <div className={styles.cardList}>

                {combos.map((c) => (
                    <Card
                        key={c.id}
                        img={`/images/promo/${c.img}.png`}
                        title={c.name}
                        desc={c.items}
                        price={c.price}
                    />
                ))}
            </div>
        </section>
    );
}