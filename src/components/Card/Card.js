import styles from "./Card.module.css";

export default function Card({ img, title, desc, price }) {
    return (
        <div className={styles.card}>

            <img src={img} alt={title} className={styles.image} />

            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{desc}</p>

            <div className={styles.footer}>
                <span className={styles.price}>
                    R$ {price.toFixed(2).replace(".", ",")}
                </span>
                <a className={styles.btnOrder}>PEÇA AGORA</a>
            </div>
        </div>
    );
}