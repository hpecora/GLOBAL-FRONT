"use client";

import React, { useState } from 'react';
import styles from './energia.module.css';
import logoIMG from '@/app/img/logo.png'
import funcionaIMG from '@/app/img/comofunciona.png'
import etapa1IMG from '@/app/img/etapa1.png'
import etapa2IMG from '@/app/img/etapa2.png'
import etapa3IMG from '@/app/img/etapa3.png'
import etapa4IMG from '@/app/img/etapa4.png'

export default function Home()  {
        const [showPopup, setShowPopup] = useState(false);
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault(); // Previne o comportamento padrão do formulário
          setShowPopup(true); // Mostra o popup
        };
      
        const handleClosePopup = () => {
          setShowPopup(false); // Esconde o popup
        };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
               <img src={logoIMG.src} alt="Logo" className={styles.logo} />
                <nav className={styles.nav}>
                    <a href="/">Home</a>
                    <a href="/Impacto-Ambiental">Impacto Ambiental</a>
                    <a href="/energy-sources">Gerenciamento Fontes Energia</a>
                    <a href="/Aderir-Energia">Como Aderir à Energia Limpa</a>
                    <a href="/Contato">Entre em Contato</a>
                </nav>
            </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.infoContainer}>
            <h1><strong>Como a energia solar funciona?</strong></h1>
            <p>
              A PLS Clean Energy trabalha com sistemas de energia solar fotovoltaica residencial ou comercial.
            </p>
            <ul>
              <li>O kit de energia solar da PLS Clean Energy transforma a luz do sol em energia elétrica para sua casa.</li>
              <li>É mais completo do que os sistemas de aquecimento solar, que só esquentam água.</li>
              <li>
                Funciona com ar condicionado, geladeira, chuveiro, TV ou qualquer eletrodoméstico. Você vive com mais conforto e
                paga menos na sua conta de luz.
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <img src={funcionaIMG.src} alt="Diagrama de energia solar" />
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <img src={etapa1IMG.src} alt="Projeto personalizado" />
            <p>Projeto personalizado para a sua residência ou negócio</p>
          </div>
          <div className={styles.feature}>
            <img src={etapa2IMG.src} alt="Placas solares" />
            <p>Placas e painéis solares</p>
          </div>
          <div className={styles.feature}>
            <img src={etapa3IMG.src}  alt="Documentação" />
            <p>Documentação e ativação com a companhia</p>
          </div>
          <div className={styles.feature}>
            <img src={etapa4IMG.src}  alt="Suporte e pós-venda" />
            <p>Suporte e pós-venda</p>
          </div>
        </section>
        <section className={styles.additionalSection}>
          <div className={styles.infoBox}>
            <p>
              Sua casa continua ligada à rede elétrica e você gera créditos com a companhia, gerando economia na sua conta.
              Os créditos podem ser utilizados até 60 meses após a geração.
            </p>
          </div>
          <div className={styles.additionalFeatures}>
            <div>
              <p>
                Todos os nossos projetos são feitos por engenheiros formados, garantindo segurança e o máximo custo-benefício.
              </p>
            </div>
            <div>
              <p>
                Fazemos financiamento de 100% do projeto com pagamento em até 72 vezes.
              </p>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Preencha o formulário abaixo para marcarmos uma reunião</h2>
            <label>
              Nome completo:
              <input type="text" name="nome" required />
            </label>
            <label>
              Telefone:
              <input type="text" name="telefone" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Endereço:
              <input type="text" name="endereco" required />
            </label>
            <button type="submit">ENVIAR FORMULÁRIO</button>
          </form>
        </section>
      </main>

      {/* Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <p>
              Obrigado por preencher o formulário! Nossa equipe irá entrar em contato com você pelo telefone e email fornecidos.
            </p>
            <button onClick={handleClosePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
