import styles from './Menu.module.css';
import Card from '@/components/Card/Card.js';

export default function Menu() {

    const items = [
        { id: 1, img: "carne", name: "Carne", desc: "Carne moída temperada, com cebola e temperos especiais", price: 8.0 },
        { id: 2, img: "queijo", name: "Queijo", desc: "Queijo derretido, cremoso e puxando a cada mordida", price: 8.0 },
        { id: 3, img: "frango", name: "Frango", desc: "Frango desfiado bem temperado, cheio de sabor", price: 9.9 },
        { id: 4, img: "calabresa", name: "Calabresa", desc: "Calabresa fatiada com cebola, levemente picante", price: 9.9 },
        { id: 5, img: "brocolis", name: "Brócolis com Queijo", desc: "Brócolis fresquinho com queijo cremoso e derretido", price: 11.9 },
        { id: 6, img: "carnequeijo", name: "Carne com Queijo", desc: "Carne moída temperada com muito queijo derretido", price: 11.9 }
    ];

    return (
        <section id="menu" className={styles.menu}>
            <h3 className="subtitle">Cardápio</h3>

            <div className={styles.cardList}>
                {items.map((i) => (
                    <Card
                        key={i.id}
                        img={`/images/menu/${i.img}.png`}
                        title={`Pastel de ${i.name}`}
                        desc={i.desc}
                        price={i.price}
                    />
                ))}
            </div>
        </section>
    );
}