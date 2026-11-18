import { useState } from "react";
export function ButtonMsg() {
      const [imie, ustawImie] = useState(() => {
        return localStorage.getItem("kluczImie");
      });
      const wpisaneImie = () => {
        const wpisanieImie = prompt("Jak masz na imię?");
        if(wpisanieImie !== null && wpisanieImie.trim() !== "") {
            const trimImie = wpisanieImie.trim();
            localStorage.setItem("kluczImie", trimImie);
            ustawImie(trimImie);
        }
        localStorage.setItem("kluczImie", trimImie);
        ustawImie(trimImie);
      }
  return (
    <>
        <button className="mx-2 shadow-lg btn fst-italic btn-info border border-4 bg-dark-cyan border-dark-cyan" onClick={wpisaneImie}>Przedstaw się.</button><br/>
        <p className="fst-italic fs-5 fw-bold color-dark-cyan ">Witaj ponownie, {imie}</p>
    </>
  )
}