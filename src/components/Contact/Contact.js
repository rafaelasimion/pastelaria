import styles from './Contact.module.css';

// icons
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {

    return (
        <section id="contact" className={styles.contact}>
            <h3 className="subtitle">Contato</h3>

            <div className={styles.content}>

                <div className={styles.openingHours}>
                    <p className={styles.title}>Funcionamento</p>
                    <div className={styles.day}>
                        <p>Segunda a Sexta......11h às 22h</p>
                        <p>Sábado...........................11h às 23h</p>
                        <p>Domingo........................16h às 22h</p>
                    </div>
                </div>

                <div className={styles.location}>
                    <p className={styles.title}>Localização</p>
                    <p>Av. Cinco, 123.</p>
                    <p>Centro - Franca, SP</p>
                </div>

                <div className={styles.social}>
                    <p className={styles.title}>Nos siga</p>
                    <a href="#" className={styles.link}>
                        <FaWhatsapp />
                        (16) 91234-5678
                    </a>
                    <a href="#" className={styles.link}>
                        <FaInstagram />
                        @pasteldocoelho
                    </a>
                    <a href="#" className={styles.link}>
                        <FaFacebook />
                        @pasteldocoelho
                    </a>
                </div>
            </div>
            
            <p className={styles.copyRight}>© Todos os direitos reservados</p>

        </section>
    );
}