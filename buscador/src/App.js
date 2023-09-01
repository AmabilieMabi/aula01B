import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {

  
 const [input, setInput] = useState('');

  function aoClicar(){
    alert('o que tem dentro do input: ' + input)  
  }
  


  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

    <main className="main">
      <h2>CEP:5028975017</h2>
      <spam> Rua: socorro</spam> 
      <spam> Bairro: socorro</spam> 
      <spam> Estado: socorro</spam> 
    </main>

    </div>
  );
}

export default App;

