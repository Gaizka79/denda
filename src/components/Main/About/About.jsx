import React from "react";

function About () {
  return (
    <section className="about">
      <h2>About</h2>
      <ul className="horarios">
        <p className="horarios">Horarios</p>
        <li>Lunes: 9h - 14h</li>
        <li>Martes: 9h - 14h</li>
        <li>Miércoles: 9h - 14h</li>
        <li>Jueves: 9h - 14h</li>
        <li>Viernes: 9h - 14h /
          17:30h - 20:00h
        </li>
        <li>Sábado: 9h - 14h</li>
      </ul>
      <div className="mapa">
        <p>Mapa</p>
        {/* eslint-disable-next-line */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11605.54716338559!2d-3.0076938!3d43.3480193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe36b2be586802c71!2sCarniceria!5e0!3m2!1ses!2ses!4v1670662874631!5m2!1ses!2ses" width="600" height="450" /* style="border:0;" */ allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
      <div className="contacto">
        <a href="tel:+34944910440" className="link">Tlf: 944 91 04 40</a><br /><br />
        <a href="mailto:agaizka@hotmail.com" className="link">email: javi@harategia.com</a>

      </div>
      
    </section>
  )
}

export default About;
