
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cabecalho from "./components/cabecalho";
import Image from "next/image";
import Menu from "./components/menu_esp";
import Form from "./components/formulario";
import Galeria from "./components/newGaleria"
import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleTagManager } from "@next/third-parties/google";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odontologia Barão de Jundiaí",
  description: "Transformando Vidas através de sorrisos."
  
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-BR">
       <GoogleTagManager gtmId="GTM-5RKTS6H5" />
        
      
      
      
      
      <body className={inter.className}>
      <a id="btn_fixo" href="https://wa.me/5511944449458?text=Estou%20vindo%20do%20link%20no%20site%20%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
        <Image
        src="/whatsappLogo.png"
        width={80}
        height={80}
        alt="logoWhatsapp"
        className="logoWhatsapp"
        />
        </a>
        
       
      <section className="one">  
       

        <Cabecalho />
        
      


      <section className="firstSection">
          <div className="titulo">
            <span className="titulo_principal">
              Transformando <br /> vidas através <br /> de < span style={{color:"#fff"}}>sorrisos</span>.
            </span>
            <div>
            <span className="titulo_sub">Tratamentos odontológicos de alta qualidade para toda a família</span>
            </div>


            <a id="btn_cta" href="https://wa.me/5511944449458?text=Estou%20vindo%20do%20link%20no%20site%20%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
            <div className="btn_cta">
              <span>Agende sua consulta </span>
            </div>
          </a>

            

          </div>
          
          
            

      </section>
      </section>
     
     

    




      <section className="especialidades" id="especialidades">
        
       

        <div className="txt_espec">
          <h1>TRATAMENTOS <br /></h1>
          <span>Nossa clínica oferece uma ampla gama de especialidades odontológicas para cuidar do sorriso de toda a família, em todas as fases da vida. Nossa equipe de especialistas é altamente qualificada e utiliza as mais recentes tecnologias e técnicas modernas para garantir o melhor atendimento</span>
        </div>
        
          <Menu 
          

          />
        

      </section>
      <section className="containerEquipe" id="equipe">
      
        <div className="txtEquipe">
          <h1>Nossa especialidade é estar< br/>sempre se especializando.</h1>
          <h3>Uma equipe de profissionais qualificados em suas profissões e engajados em cuidadar da sua saúde bucal, autoestima e conforto.</h3>
        </div>
       
        <div className="quadroIndividual">

        <div className="individual">
          <div className="card">
            <div className="identificaçãoProf">
                <Image
                src="/fotos/draVanessa.png"
                width={180}
                height={150}
                alt="imagem dentista"
                className="fotoCirculo"
                
                />
                <span className="nomeDentista">
                  Dra. Vanessa A. de Oliveira
                </span>
            </div>
            <div className="destalheProf">
              <h3>
              Especialista em Ortodontia< br/> Adulto( Corretiva ),< br/> Infantil ( Preventiva / Corretiva ) e Harmonização Orofacial
              </h3>
            </div>
          </div>
        </div>



        <div className="individual">
          <div className="card">
            <div className="identificaçãoProf">
              
                <Image
                src="/fotos/drLeandro.png"
                width={180}
                height={150}
                alt="imagem dentista"
                className="fotoCirculo"
                
                />
                
                <span className="nomeDentista">
                Dr Leandro Campos
                </span>
            </div>
            <div className="destalheProf">
              <h3>
              Especialista em Implantodontia e Periodontia
              </h3>
            </div>
          </div>
        </div>



        <div className="individual">
          <div className="card">
            <div className="identificaçãoProf">
              
                <Image
                src="/fotos/draMarilia_Circle.png"
                width={180}
                height={150}
                alt="imagem dentista"
                className="fotoCirculo"
                
                />
                
                <span className="nomeDentista">
                Dra Marilia Cogo
                </span>
            </div>
            <div className="destalheProf">
              <h3>
              Clínica Geral e especialista em Implantodontia 
              </h3>
            </div>
          </div>
        </div>



        <div className="individual">
          <div className="card">
            <div className="identificaçãoProf">
                <Image
                src="/fotos/draVanessaEnes_Circle.png"
                width={180}
                height={150}
                alt="imagem dentista"
                className="fotoCirculo"
                
                />
                <span className="nomeDentista">
                Dra Vanessa Enes
                </span>
            </div>
            <div className="destalheProf">
              <h3>
              Clínica Geral e especialista em Prótese sobre Implante.
              </h3>
            </div>
          </div>
        </div>



        

        </div>
      </section>

      <section className="imgClinica">
        <div className="slide">
          <Galeria
          />
        </div>
          
      </section>
      <section className="secondSection" id="clinica">
         
        
         <div className="valores">
           
              
             <span>Mais de 20 anos dedicados ao bem estar</span>
             <h1>Com mais de 20 anos de experiência na área odontológica, a Clínica Odontológica Barão de Jundiaí iniciou suas atividades no final de 2003, com a Dra Salma Tavares formando uma equipe capacitada e humanizada, que se dedica com carinho e amor ao trabalho que realiza.
Ao longo de todos esses anos, o crescimento foi gradual, em conjunto ao desenvolvimento técnico dos doutores na capacitação de cursos e especializações.
Temos como missão a transformação do seu sorriso .
               </h1>
       </div>

     </section>

      <section className="agendamento" id="agendamento">
        <Form
        />
        
      </section>
      <section className="localização">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.167882090793!2d-46.8852391!3d-23.1869114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf274f21d94f43%3A0x1b3e87d5775f8243!2sClinica%20Odontol%C3%B3gica%20Bar%C3%A3o%20de%20Jundia%C3%AD!5e0!3m2!1sen!2sbr!4v1722887506393!5m2!1sen!2sbr" width="100%" height="450"></iframe>
      </section>
      
      <footer className="footer" id="contatos">
        <div className="clinica_footer">
          <Image
          src="/ativoUm.png"
          width={250}
          height={100}
          alt="logo rodape"
          className="logo_footer"
          />
          <div>
            <h1>Transformando vidas através de sorriso</h1>
          </div>
          <div className="icon_redes">
            <Image
              src="/logo_face.png"
              width={40}
              height={40}
              alt="logotipo facebook"
              className="lg_face"

            />
            <Image
              src="/logo_insta.png"
              width={40}
              height={40}
              alt="logotipo facebook"
              className="lg_face"

            />
           
          </div>
        </div>
        <div className="especialidades_footer">
          <span>Especialidades:</span>
          <ul>
            
            <li>Ortodontia</li>
            <li>Implantodontia</li>
            <li>Prótese</li>
            <li>Clínica Geral</li>
            <li>Endodontia</li>
            <li>Odontopediatria</li>
            <li>Haomonização Orafacial</li>
          </ul>

        </div>
        <div className="contatos_footer">
          <dl>
            <dt>Contatos:</dt>
                <dd> 11 94444-9458 </dd>
                <dd> 11 4522-0429</dd>
            <dt> e-mail:</dt>
                <dd> clinicaodontologicabr1@outlook.com</dd>
            <dt> Endereço:</dt>
                <dd> Rua Barão de Jundiaí, 938 | Centro </dd>
            <dt>CNPJ:</dt>  
                <dd>41.631.065/0001-12</dd>  
          </dl>

        </div>

      </footer>

      
      
        
        
        

      </body>
    </html>
  );
}
