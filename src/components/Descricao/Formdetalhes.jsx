
import "./detalhes.css";
import "semantic-ui-css/semantic.min.css";


function descricao() {

    return (


      <div className="container">
      <div className="header">
        <span className="time">00:30</span>
        <span className="title">Mario</span>
        <button className="close-btn">X</button>
      </div>
      <div className="content">
        <div className="field">
          <label htmlFor="descricao"><h5>Descrição</h5></label>
          <textarea id="descricao" placeholder="Digite aqui..." />
        </div>
        <div className="field">
          <label htmlFor="observacoes"><h5>Observações</h5></label>
          <textarea id="observacoes" placeholder="Digite aqui..." />
        </div>
      </div>
    </div>

    );


  }
  

  export default   descricao;
  