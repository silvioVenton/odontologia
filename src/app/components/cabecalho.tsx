"use client"
import Image from "next/image";
import { useState } from "react";
export default function Cabecalho(){

  const [menuSuspenso, setMenuSuspenso] = useState(false);

  const disparo = () =>{
    setMenuSuspenso(!menuSuspenso)
    
    console.log(menuSuspenso)
  }

  const muda = menuSuspenso ? 'mmm mmm-open' : 'mmm';
 
  
   return(
    
    <div className="container_head">
      
      <div className="img_logo">
      <Image 
        src="/logo.png"
        width={300}
        height={50}
        alt="logotipo"
        className="logotipo" 
          
        
      />
      <Image 
        src="/logoMobile.png"
        width={300}
        height={50}
        alt="logotipo"
        className="logotipoMobile" 
          
        
      />
      

      </div>
      <button type="button" className="menuBars" onClick={disparo}>
          <div>
          <Image
          src="/menuBars.png"
          width={30}
          height={40}
          alt="menu bars"
          
          />
          </div>
      </button>

      <div className={muda} >
        <div>
      <ul>
          <a href="#clinica"><li> Sobre nós </li></a>
          <a href="#especialidades"><li> Tratamentos</li></a>
          <a href="#equipe"><li> Equipe </li></a>
          <li> Depoimentos </li>
          <a href="#contatos"><li> Contatos </li></a>
        </ul>
        </div>
        <div style={{fontSize:"30px", position:"absolute", right:"2rem", top:"2rem"}}>
        <button type="button" onClick={disparo}> X </button>
        </div>
      </div>
      
      
      <div className="menu">
        <ul>
          <a href="#clinica"><li> Sobre nós </li></a>
          <a href="#especialidades"><li> Tratamentos</li></a>
          <a href="#equipe"><li> Equipe </li></a>
          <li> Depoimentos </li>
          <a href="#contatos"><li> Contatos </li></a>
          <a href="https://www.instagram.com/clinica_baraodejundiai/"><li>Instagram</li></a>
        </ul>
        
      </div>
      <div className="menuRedeSociais">
        <a href="https://www.instagram.com/clinica_baraodejundiai/">
          <Image
            src="/instagran-color.png"
            width={30}
            height={30}
            alt="Instagram Clínica"
          />
        </a>
        <a href="https://www.facebook.com/clinicabaraodejundiai/" target="_blank">
          <Image
            src="/facebook-color.png"
            width={30}
            height={30}
            alt="Facebook Clínica"
          />
        </a>

      </div>
      
    </div>
    
   )
}