import React from 'react';
import styles from './Home.module.css';
import logoIMG from './img/logo.png';
import homeIMG from './img/tela-home.png';
import eolicaIMG from './img/eolica.png';
import hidreletricaIMG from './img/hidreletrica.png';
import biomassaIMG from './img/biomassa.png';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
               <img src={logoIMG.src} alt="Logo" className={styles.logo} />
                <nav className={styles.nav}>
                    <a href="/Impacto-Ambiental">Impacto Ambiental</a>
                    <a href="/energy-sources">Gerenciamento Fontes Energia</a>
                    <a href="/Aderir-Energia">Como Aderir à Energia Limpa</a>
                    <a href="/Contato">Entre em Contato</a>
                </nav>
            </header>

            <main className={styles.main}>
                {/* Conteúdo principal existente */}
                <section className={styles.hero}>
                    <div className={styles.heroColuna}>
                        <h1>Energia limpa para um futuro mais sustentável</h1>
                        <p>
                            A PLS Clean Energy é a chave para um futuro mais sustentável. Ao optar por fontes de energia limpa, como solar, eólica e hídrica, reduzimos o impacto ambiental e combatemos as mudanças climáticas. Essas fontes renováveis não emitem gases poluentes, garantem maior segurança energética e promovem um planeta mais saudável para as próximas gerações. Junte-se a nós na busca por soluções energéticas inovadoras e sustentáveis.
                        </p>
                    </div>
                    <div className={styles.heroImage}>
                        <img src={homeIMG.src} alt="home" className={styles.heroImageContent}/>
                    </div>
                </section>

                 {/* Nova seção de energia PLS Clean Energy */}
                 <section className={styles.main}>
                    <div className={styles.textContainer}>
                        <h1>Economize com a <span className={styles.highlight}>PLS Clean Energy!</span></h1>
                        <p>
                            Diga adeus às altas contas de energia! Com a PLS Clean Energy, você pode gerar sua própria energia limpa e renovável. 
                            Nossos sistemas solares são projetados para atender às suas necessidades específicas, garantindo máxima eficiência e economia.
                        </p>
                        <div className={styles.benefits}>
                            <h3>Por que escolher a PLS Clean Energy:</h3>
                            <ul>
                                <li>Energia limpa e renovável</li>
                                <li>Maior autonomia</li>
                                <li>Aumento do valor do seu imóvel</li>
                                <li>Suporte técnico especializado</li>
                            </ul>
                        </div>
                        <div className={styles.ctaButton}>
                        <a href="/login">INSTALE ENERGIA SOLAR</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
