import { useState } from "react";
import a2 from './assets/a2.png';
import a3 from './assets/a3.png';
import a4 from './assets/a4.png';
import rs6 from './assets/rs6.png';
import r8 from './assets/r8.png';
export function Tabel() {
  const tablicaAut = [
  {id: 1, marka: "Audi", model: "A2", rok: 2003, zdjecie: a2},
  {id: 2, marka: "Audi", model: "A3", rok: 2003, zdjecie: a3},
  {id: 3, marka: "Audi", model: "A4", rok: 2008, zdjecie: a4},
  {id: 4, marka: "Audi", model: "RS6", rok: 2015, zdjecie: rs6},
  {id: 5, marka: "Audi", model: "R8", rok: 2008, zdjecie: r8}
];
  const [wyszukiwanie, ustawWyszukiwanie] = useState("");

  const filtrowanieAut = tablicaAut.filter((auto) => {
    const calaNazwa = `${auto.marka} ${auto.model}`.toLowerCase().replace(/\s+/g, '');
    const trescWyszukiwania = wyszukiwanie.toLowerCase().trim().replace(/\s+/g, '');
    return calaNazwa.includes(trescWyszukiwania);
  });
  return(
    <>
      <div className="text-center">
        <input
        type="text"
        placeholder="Wyszukaj auto..."
        value={wyszukiwanie}
        onChange={(e) => ustawWyszukiwanie(e.target.value)} 
        />
      </div>
     <ul className="list-group list-group-flush my-3 border border-4 border-dark-cyan rounded-3 shadow-lg bg-dark-cyan text-light fst-italic fs-5">
      {filtrowanieAut.map((auto) =>(
        <li key={auto.id} className="centered-list-group-item bg-info text-muted fst-italic fs-5 color-dark-cyan">
          <p className="text-center">{auto.marka} {auto.model} {auto.rok}r. <img src={auto.zdjecie} className="img-fluid rounded-5" width="100" height="100"/></p>
        </li>
      ))}
     </ul>
    </>
  )
}