import React from "react";

import botox from "../../assets/images/botox.jpg";
import foxy from "../../assets/images/foxy.jpg";
import hydra from "../../assets/images/hydra.jpg";
import marcaje from "../../assets/images/marcaje.jpg";
import relleno from "../../assets/images/relleno.jpg";
import rino from "../../assets/images/rino.jpg";

import clasess from "./Treatments.module.scss";

const Treatments = () => {
  return (
    <div className={clasess.container} id="#treatments">
      <h2>
        OUR <span>TOP</span> TREATMENTS
      </h2>
      <div className={clasess["container--cards"]}>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={botox} alt="" loading="lazy"></img>
            <h3>Botox</h3>
          </div>
          <p>
            Descubre el increíble poder del Botox, un procedimiento estético no
            invasivo que reduce arrugas y líneas de expresión, rejuveneciendo tu
            apariencia. Nuestro equipo de expertos te brindará resultados
            naturales y seguros. Recupera una piel suave y radiante en minutos.
            ¡Dile adiós a las arrugas y saluda a una versión más joven de ti!
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={relleno} alt="" loading="lazy"></img>
            <h3>Relleno de labios</h3>
          </div>
          <p>
            Embellece tus labios con nuestra técnica perfeccionada de relleno de
            labios. Nuestro equipo experto utiliza técnicas seguras para dar
            volumen y definición a tus labios. Resalta tu belleza con resultados
            naturales y duraderos. Descubre la confianza de lucir unos labios
            irresistibles y cautivadores. ¡Realza tu sonrisa y siéntete más
            bella que nunca!
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={rino} alt="" loading="lazy"></img>
            <h3>Rinomodelación</h3>
          </div>
          <p>
            Transforma tu nariz sin cirugía con la innovadora rinomodelación.
            Nuestro equipo especializado utiliza técnicas avanzadas para
            corregir imperfecciones y mejorar la forma de tu nariz. Resultados
            asombrosos, naturales y sin dolor. Descubre una nueva armonía facial
            y gana confianza con esta opción segura y efectiva. ¡Resalta tu
            belleza única!
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={foxy} alt="" loading="lazy"></img>
            <h3>Foxy eyes</h3>
          </div>
          <p>
            Eleva tu mirada con la tendencia Foxxy Eyes. Nuestro equipo experto
            utiliza técnicas precisas para levantar y alargar visualmente tus
            ojos, logrando una apariencia seductora. Obtén un aspecto cautivador
            con resultados naturales y duraderos. Descubre la belleza de unos
            ojos enigmáticos y resalta tu atractivo único. ¡Atrévete a brillar!
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={hydra} alt="" loading="lazy"></img>
            <h3>Hydrafacial</h3>
          </div>
          <p>
            Experimenta el Hydrafacial, el tratamiento facial más avanzado.
            Nuestro equipo especializado rejuvenecerá tu piel con esta terapia
            de hidrodermoabrasión que limpia, exfolia e hidrata en profundidad.
            Resultados inmediatos, sin molestias ni tiempo de inactividad.
            Disfruta de una piel radiante y revitalizada al instante. Descubre
            el secreto para lucir un cutis impecable.
          </p>
        </div>
        <div className={clasess["container-card"]}>
          <div className={clasess["container-card__top"]}>
            <div className={clasess.layer}></div>
            <img src={marcaje} alt="" loading="lazy"></img>
            <h3>Marcaje Mandibular</h3>
          </div>
          <p>
            Descubre el sorprendente marcaje mandibular, una técnica estética
            que define y resalta tus rasgos faciales. Nuestro equipo experto
            utiliza inyectables para crear una mandíbula más definida y
            esculpida. Resultados notorios y naturales, sin cirugía. Experimenta
            un cambio asombroso en tu perfil y luce una apariencia más
            contorneada y atractiva. ¡Potencia tu belleza única!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
