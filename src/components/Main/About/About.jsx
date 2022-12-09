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
        <li>Viernes: 9h - 14h</li>
        <li>Sábado: 9h - 14h</li>
      </ul>
      <div className="mapa">
        <p>Mapa</p>
        {/* eslint-disable-next-line */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.3843826884363!2d-3.0097137850427766!3d43.348069680126734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5be7fe2e0427%3A0x1105b24e07be4f5c!2sC.%20Euskal%20Herria%2C%2021%2C%2048991%20Getxo%2C%20Vizcaya!5e0!3m2!1ses!2ses!4v1670409856161!5m2!1ses!2ses" /*width="600" height="450"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */></iframe>
      </div>
      <div className="contacto">
        <a href="tel:+34696159056" className="link">Tlf: 940 000 000</a><br /><br />
        <a href="mailto:agaizka@hotmail.com" className="link">email: javi@harategia.com</a>

      </div>
      
    </section>
  )
}

export default About;
