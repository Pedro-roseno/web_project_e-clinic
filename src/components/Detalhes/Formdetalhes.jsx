
import "./detalhes.css";
import "../../styles/global.css";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


function Detalhes() {

    return (


      <div id="global">

<div id="conteudo"> 

<section id="section">

<nav id="nav-1">
<span id="timeout">00:00</span>
        <span id="nome">Mario</span>
        <Icon name="close" id="icone" />
       </nav>

</section>
</div>


   <section id="iputs-area">

                <input
                className="input_area1"
                type="text"
                placeholder="Descrição...."
               
              />


              <input
                className="input_area1"
                type="text"
                placeholder="Observações...."
               
              />

</section>



      </div>


    );


  }
  

  export default  Detalhes;
  