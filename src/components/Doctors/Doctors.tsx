import React, { Fragment } from "react";

import andrea from "../../assets/images/andrea.jpg";
import nayelly from "../../assets/images/nayelly.jpg";
import tanya from "../../assets/images/tanya.jpg";
import miguel from "../../assets/images/miguel.jpg";

import clasess from "./Doctors.module.scss";

const Doctors = () => {
  return (
    <Fragment>
      <div className={clasess.background}></div>
      <div className={clasess.container} id="#doctors">
        <div className={clasess["container-content"]}>
          <img src={andrea} alt="Doctor" loading="lazy"></img>
          <div>
            <h3>Dra. Andrea Sánchez </h3>
            <p>
              Conoce a la Dra. Andrea Sánchez, una talentosa doctora enfocada en
              medicina estética y que se enorgullece en ser experta en la
              técnica rusa. Con amplia experiencia y pasión por la belleza
              facial, la Dra. Sánchez ha destacado en el campo de la estética.
              <br></br>
              <br></br>
              Sus pacientes elogian su enfoque meticuloso, trato cálido y
              personalizado; brindando confianza y comodidad en cada
              procedimiento. Impulsada por su amor por la estética, ha fundado
              su propio centro de belleza, ofreciendo resultados naturales y
              notorios. <br></br> <br></br>
              La Dra. Andrea Sánchez trasciende los límites para realzar la
              belleza de sus pacientes, creando admiración y transformando
              vidas. Su dedicación y enfoque la convierten en una figura
              emergente en el mundo de la estética, además se enorgullece de
              haber sido entrenada en grandes centros y congresos tanto
              nacionales como Internacionales buscando siempre estar a la
              vanguardia de la estética facial.
            </p>
          </div>
        </div>
        <div className={clasess["container-content"]}>
          <div>
            <h3>Dra. Nallely González</h3>
            <p>
              La Dra. Nallely González se ha destacado significativamente en su
              campo al especializarse en la armonización facial, así como en la
              reconocida y ampliamente adoptada técnica rusa. Su enfoque se
              centra en proporcionar a sus pacientes lo óptimo en términos de
              estética facial, brindando una atención de alta calidad y
              tratamientos excepcionales adaptados a las necesidades
              individuales de cada persona. <br></br> <br></br>
              Cada tratamiento que la Dra. González ofrece se basa en su
              profunda experiencia, siempre priorizando el respeto por las
              necesidades y expectativas únicas de cada paciente. Este enfoque
              garantiza a los pacientes la seguridad y la confianza en que los
              resultados estarán a la altura de sus expectativas y serán los más
              adecuados para cada situación específica.
              <br></br>
              Además de su experiencia profesional, la Dra. González se destaca
              por su amabilidad, honestidad y enfoque cálido hacia sus
              pacientes. Estas cualidades se reflejan claramente en la alta
              calidad de los servicios que ofrece.
            </p>
          </div>
          <img src={nayelly} alt="Doctor" loading="lazy"></img>
        </div>
      </div>
      <div className={clasess["container-2"]}>
        <div className={clasess["container-content"]}>
          <img src={tanya} alt="Doctor" loading="lazy"></img>
          <div>
            <h3>Dra. Tanya Arellano</h3>
            <p>
              ¡Hola! Soy la Dra. Tanya Arellano, y me complace darte la
              bienvenida a la clínica About Me Medical Spa. <br></br> <br></br>
              Mi viaje comenzó en la Universidad Baja California, donde adquirí
              una sólida formación como médico general. Sin embargo, mi
              curiosidad por la estética y el bienestar me llevó a explorar la
              medicina estética, donde encontré mi verdadera vocación. En
              nuestra clínica, estamos comprometidos a realzar tu belleza
              natural y a brindarte los tratamientos más avanzados en el campo
              de la medicina estética. Con un enfoque centrado en el paciente,
              estamos aquí para ayudarte a sentirte seguro y radiante en tu
              propia piel. <br></br> <br></br>
              Entiendo que la belleza no solo proviene de tratamientos externos,
              sino también de un enfoque holístico en el bienestar. Trabajaré
              contigo para desarrollar un plan de tratamiento personalizado que
              aborde tus objetivos estéticos y de salud de manera integral.
            </p>
          </div>
        </div>
        <div className={clasess["container-content"]}>
          <div>
            <h3>Dr. Miguel Magaña</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation.
            </p>
          </div>
          <img src={miguel} alt="Doctor" loading="lazy"></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Doctors;
