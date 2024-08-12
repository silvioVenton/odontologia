import Image from "next/image";
export default function Cabecalho(){
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
      </div>
      <div className="menu">
        <ul>
          <li> Sobre nós </li>
          <li> Tratamentos</li>
          <li> Equipe </li>
          <li> Depoimentos </li>
          <li> Contatos </li>
        </ul>
      </div>
      <a className="btn_agenda" href="#" style={{backgroundColor:"#67C0BF", padding:".5rem"}}>

        
        
           <span>Agenda</span>

        
      </a>
    </div>
    
   )
}