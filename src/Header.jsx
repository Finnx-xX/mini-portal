import {useState, useEffect} from 'react';
import { ButtonMsg } from './ButtonMsg.jsx';
export function Header() {
  const [ifCiemne, ustawIfCiemne] = useState(false);
  
  function przelacznik() {
    
      if(ifCiemne) {
        document.body.style.backgroundColor = "#04b5cc";
        ustawIfCiemne(false);
      }else{
        document.body.style.backgroundColor = "#47f9ff";
        ustawIfCiemne(true);
      }
    }
    function auto() {
    
      if(ifCiemne) {
        document.body.style.backgroundColor = "";
        ustawIfCiemne(false);
      }else{
        document.body.style.backgroundColor = "";
        ustawIfCiemne(true);
      }
    }
  const [hasloDnia, ustawHasloDnia] = useState("");
  const hasla = [
          "Samochody to moja pasja!",
          "Nie ma nic lepszego niż jazda samochodem!",
          "Samochody są jak sztuka - każdy ma swój styl.",
          "Nie ma nic bardziej ekscytującego niż nowy model samochodu.",
          "Samochody to nie tylko środek transportu, to styl życia."
        ];
  useEffect(() => {
  const losoweHaslo = hasla[Math.floor(Math.random() * hasla.length)];
  ustawHasloDnia(losoweHaslo);
  }, []);

  return(
    <>
      <div className="container border border-top-0 border-5 rounded-5 border-dark-cyan text-center bg-info p-2">
        <h1 className="display-4 font-round color-dark-cyan">Portal o samochodach</h1>
        <h3 className="fst-italic color-dark-cyan">Hasło dnia: {hasloDnia}</h3>
        <button className="shadow-lg btn fst-italic btn-info border border-4 mx-2 bg-dark-cyan border-dark-cyan" onClick={przelacznik}>
          Przełącznik tła
        </button>
        <button className="shadow-lg btn fst-italic btn-info border border-4 bg-dark-cyan border-dark-cyan" onClick={auto}>
          tło standardowe
        </button>
          <ButtonMsg />
      </div>
    </>
  )
}