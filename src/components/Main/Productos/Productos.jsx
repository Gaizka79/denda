import React from "react";

import carne1 from '../../../assets/carne1.jpeg';
import carne2 from '../../../assets/carne2.jpeg';
import carne3 from '../../../assets/carne3.jpeg';
import carne4 from '../../../assets/carne4.jpeg';

function Productos () {
  return (
    <section className="productos">
      <h2>Productos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas ipsam commodi voluptates sapiente at?</p>
      <div className="fotos">
        <article>
          <img src={carne1} alt="producto1" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quisquam iste ea laborum ex accusantium!</p>
        </article>
          <div className="clear"></div>
        <article>
          <img src={carne2} alt="producto2" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam doloribus earum sit iste hic reiciendis tenetur minima dicta fuga est velit obcaecati rem quia molestias, repellat repudiandae porro nisi.</p>
        </article>
          <div className="clear"></div>
        <article>
          <img src={carne3} alt="producto3" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam obcaecati tenetur at modi? Rem eius esse cumque voluptates maxime consectetur sint eaque autem qui eum, minus eveniet porro iste ut?</p>
        </article>
          <div className="clear"></div>
        <article>
          <img src={carne4} alt="producto4" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio natus repellendus voluptatum fugit aut nobis, consequuntur id corrupti laboriosam! Amet est earum asperiores facilis quae accusantium corrupti quis unde.</p>
        </article>
        
        
        
        
      </div>
    </section>
  )
}

export default Productos;
