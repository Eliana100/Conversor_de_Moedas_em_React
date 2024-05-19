import { useState } from 'react'
import './App.css'

function App() {
  const [quantia, setQuantia] = useState(0);
  const [debMoeda, setDeMoeda] = useState("BRL");
  const [paraMoeda, setParaMoeda] = useState("USD");

  const [Resultado, setResultado] = useState(0);

  function converterMoeda() {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${quantia}&from=${debMoeda}&to=${paraMoeda}`)
    .then((resp) => resp.json())
    .then((data) =>setResultado(data.rates[paraMoeda]));
  }

  return (
    <div className='container'>
      <div>
        <label>Quantia:</label>
        <input type="number" 
        value={quantia}
        onChange = {(e) => setQuantia(e.target.value)} />
      </div>


      <select value={debMoeda} onChange={e=>setDeMoeda(e.target.value)}>
       <option value='USD'>Dolar</option>
       <option value='BRL'>Real</option>
       <option value='EUR'>Euro</option>
      </select>


      <select value={paraMoeda} onChange={e=>setDeMoeda(e.target.value)}>
       <option value='USD'>Dolar</option>
       <option value='BRL'>Real</option>
       <option value='EUR'>Euro</option>
      </select>

      <button onClick={() => converterMoeda()}>Converter</button>
      <div className='resultado'>{Resultado}</div>
    </div>
  );
}

export default App
