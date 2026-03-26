import styles from './Hero.module.css';
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            
            <div className={styles.text}>
                <h1 className={styles.title}>
                    PASTEL DO <br></br>
                    <span className={styles.highlight}>COELHO</span></h1>
                <p className={styles.desc}>Pastel feito na hora, como antigamente.</p>
                <a href="#" className={styles.btnOrder}>
                    PEÇA AGORA
                    <FaWhatsapp />
                </a>
            </div>
            <img src="images/hero.png" className={styles.image}/>

        </section>
    );
}