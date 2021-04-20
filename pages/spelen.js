import { useState } from "react";
import styles from "../styles/Spelen.module.css";

let currentQuestion;
let straf;
export default function Spelen() {
  const [begonnen, setBegonnen] = useState(false);
  const [moeilijkheid, setMoeilijkheid] = useState();
  const [givenAntwoord, setAntwoord] = useState(false);
  const [goedeAntwoord, setGoedeAntwoord] = useState();

  const easyQuestions = [{ vraag: "Hoe heet de vriendin van Donald duck?", antwoord1: "Katrina", antwoord2: "Katrien", antwoord3: "Mona", antwoord4: "Minnie", right: 2 }, { vraag: "Hoeveel dagen zitten er in een schrikkeljaar?", antwoord1: "355", antwoord2: "365", antwoord3: "366", antwoord4: "354", right: 3 }, { vraag: "Hoeveel weken zitten er in een jaar?", antwoord1: "53", antwoord2: "51", antwoord3: "48", antwoord4: "52", right: 4 }, { vraag: "Noem de langste rivier ter wereld?", antwoord1: "De Rijn", antwoord2: "De Nijl", antwoord3: "De Amazone", antwoord4: "De waal", right: 2 }, { vraag: "Wat is het kleinste land ter wereld?", antwoord1: "Belgie", antwoord2: "Luxemburg", antwoord3: "Zuid-Afrika", antwoord4: "Het Vaticaan", right: 4 }, { vraag: "Wat is een andere naam voor een schaapkameel?", antwoord1: "Koe", antwoord2: "Dromedaris", antwoord3: "Lama", antwoord4: "Schaap", right: 3 }, { vraag: "Wat is een tuimelaar?", antwoord1: "Dolfijn", antwoord2: "Paard", antwoord3: "Hond", antwoord4: "Iemand die valt", right: 1 }, { vraag: "Bij welk dier wordt het mannetje zwanger?", antwoord1: "Hond", antwoord2: "Walvis", antwoord3: "Zeepaardje", antwoord4: "Geen enkel dier", right: 3 }, { vraag: "Welke kleur heeft de zwarte neushoorn?", antwoord1: "Wit", antwoord2: "Grijs", antwoord3: "Zwart", antwoord4: "Groen", right: 2 }, { vraag: "In welk land opende in 1921 de eerste autosnelweg?", antwoord1: "Nederland", antwoord2: "Amerika", antwoord3: "China", antwoord4: "Duitsland", right: 4 }, { vraag: "Hoe worden wegen waarvoor je moet betalen om erop te mogen rijden genoemd?", antwoord1: "Tolwegen", antwoord2: "Betaalde wegen", antwoord3: "Geldwegen", antwoord4: "Goude wegen", right: 1 },]
  const mediumQuestions = [{ vraag: "Hoeveel kubieke decimeter is 95409 liter?", antwoord1: "954,09", antwoord2: "95.409", antwoord3: "9,5409", antwoord4: "95409000", right: 2 }, { vraag: "Welk land in Europa heeft de meeste inwoners?(Rusland telt niet mee)", antwoord1: "Frankrijk", antwoord2: "Belgie", antwoord3: "Polen", antwoord4: "Duitsland", right: 4 }, { vraag: "Op welke dag in 1940 gaf Nederland zich over aan de Duitsers?", antwoord1: "15 mei", antwoord2: "15 april", antwoord3: "13 mei", antwoord4: "13 april", right: 1 }, { vraag: "Welk land heeft de meeste WK's voetbal gewonnen?", antwoord1: "Brazilië", antwoord2: "Duitsland", antwoord3: "Italië", antwoord4: "Argentinië", right: 1 }, { vraag: "Wat is de hoofdstad van Canada?", antwoord1: "Vancouver", antwoord2: "Ottawa", antwoord3: "Quebec", antwoord4: "Toronto", right: 2 }, { vraag: "Wat is het grootste zoogdier op aarde?", antwoord1: "Olifant", antwoord2: "Walvis", antwoord3: "Hamerhaai", antwoord4: "Blauwe vinvis", right: 4 }, { vraag: "Wat is het kleinste ponyras?", antwoord1: "Shetlandpony", antwoord2: "Amerikaanse Pony", antwoord3: "Falabella", antwoord4: "Mini paard", right: 1 },]
  const hardQuestions = [{ vraag: "Hoeveel landen zijn er lid van de Europese Unie?", antwoord1: "27", antwoord2: "30", antwoord3: "24", antwoord4: "51", right: 1 }, { vraag: "In welk continent ligt Bhutan?", antwoord1: "Azië", antwoord2: "Europa", antwoord3: "Zuid-Amerika", antwoord4: "Noord-Amerika", right: 1 }, { vraag: "Welk van de genoemde landen heeft de meeste inwoners?", antwoord1: "Rusland", antwoord2: "Bangladesh", antwoord3: "Japan", antwoord4: "Australië", right: 2 }, { vraag: "Hoelang duurt een dag op mars?", antwoord1: "24 uur, 39 minuten en 35 seconden", antwoord2: "10 uur 40 minuten en 40 seconden", antwoord3: "11 uur 39 minuten en 34 seconden", antwoord4: "37 uur 59 minuten en 2 seconden", right: 1 }, { vraag: "Welke vogel is de meest voorkomende ter wereld?", antwoord1: "Duif", antwoord2: "Papegaai", antwoord3: "Kip", antwoord4: "Kraai", right: 3 }, { vraag: "Van welk hondenras is Samson uit de tv-programma Samson en Gert?", antwoord1: "Bobtail", antwoord2: "Poedel", antwoord3: "Labrador", antwoord4: "Het is geen echt ras", right: 1 },]
  const superhardQuestions = [{ vraag: "Wat is de hoogste berg gezien van het middelpunt van de aarde?", antwoord1: "Mount Everest", antwoord2: "K2", antwoord3: "Chimborazo", antwoord4: "Mont Blanc", right: 3 }, { vraag: "Hoeveel landen heeft Zuid-Amerika?", antwoord1: "10", antwoord2: "13", antwoord3: "19", antwoord4: "15", right: 2 }, { vraag: "Hoeveel landen hebben de kleur rood in hun vlag?", antwoord1: "155", antwoord2: "123", antwoord3: "10", antwoord4: "120", right: 1 }, { vraag: "Hoeveel landen heeft Noord-Amerika?", antwoord1: "3", antwoord2: "14", antwoord3: "35", antwoord4: "23", right: 4 }, { vraag: "Hoeveel strepen staan er op de Amerikaanse vlag?", antwoord1: "14", antwoord2: "16", antwoord3: "13", antwoord4: "50", right: 3 }, { vraag: "Hoeveel tijdzones zijn er in Rusland?", antwoord1: "10", antwoord2: "11", antwoord3: "12", antwoord4: "13", right: 2 },]

  const randomQuestion = () => {
    if (moeilijkheid === "makkelijk") {
      currentQuestion = easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
    } else if (moeilijkheid === "gemiddeld") {
      currentQuestion = mediumQuestions[Math.floor(Math.random() * mediumQuestions.length)];
    } else if (moeilijkheid === "moeilijk") {
      currentQuestion = hardQuestions[Math.floor(Math.random() * hardQuestions.length)];
    } else if (moeilijkheid === "supermoeilijk") {
      currentQuestion = superhardQuestions[Math.floor(Math.random() * superhardQuestions.length)];
    }
  }

  const randomStraf = () => {
    const straffen = ["Vermoord jezelf", "Ook een straf"];
    straf = straffen[Math.floor(Math.random() * straffen.length)]
  }

  if (begonnen) {
    if (!moeilijkheid) {
      return (
        <div className={styles.frame}>
          <button className={styles.btnMakkelijk} onClick={() => setMoeilijkheid("makkelijk")}>Makkelijk</button>
          <button className={styles.btnGemiddeld} onClick={() => setMoeilijkheid("gemiddeld")}>Gemiddeld</button>
          <button className={styles.btnMoeilijk} onClick={() => setMoeilijkheid("moeilijk")}>Moeilijk</button>
          <button className={styles.btnZeerMoeilijk} onClick={() => setMoeilijkheid("supermoeilijk")}>Zeer Moeilijk</button>
        </div>
      )
    } else if (givenAntwoord) {
      if (goedeAntwoord === undefined) {
        return (
          <div className={styles.frame}>
            <h1 className={styles.question}>{currentQuestion.vraag}</h1>
            <h2 className={styles.awnserIs}>Het goede antwoord is:</h2>
            <h3 className={styles.awnser}>{currentQuestion.right}. {currentQuestion.right === 1 ? currentQuestion.antwoord1 : ""}
              {currentQuestion.right === 2 ? currentQuestion.antwoord2 : ""}
              {currentQuestion.right === 3 ? currentQuestion.antwoord3 : ""}
              {currentQuestion.right === 4 ? currentQuestion.antwoord4 : ""}</h3>
            <button className={styles.btn} onClick={() => {
              if (givenAntwoord === currentQuestion.right) {
                setGoedeAntwoord(true);
              } else {
                setGoedeAntwoord(false);
              }
            }}>Ga door</button>
          </div>
        );
      } else if (goedeAntwoord) {
        setTimeout(() => window.location.reload(), 5000);
        return (
          <div className={styles.frame}>
            <h1 className={styles.question}>Gefeliciteerd</h1>
          </div>
        );
      } else if (!goedeAntwoord) {
        setTimeout(() => window.location.reload(), 10000);
        randomStraf();
        return (
          <div className={styles.frame}>
            <h1 className={styles.question}>Aiii</h1>
            <h3 className={styles.awnserIs}>Je straf is:</h3>
            <h4 className={styles.straf}>{straf}</h4>
          </div>
        );
      }

    } else {
      randomQuestion();
      return (
        <div className={styles.frame}>
          <h1 className={styles.question}>{currentQuestion.vraag}</h1>
          <button className={styles.awnser1} onClick={() => setAntwoord(1)}>{currentQuestion.antwoord1}</button>
          <button className={styles.awnser2} onClick={() => setAntwoord(2)}>{currentQuestion.antwoord2}</button>
          <button className={styles.awnser3} onClick={() => setAntwoord(3)}>{currentQuestion.antwoord3}</button>
          <button className={styles.awnser4} onClick={() => setAntwoord(4)}>{currentQuestion.antwoord4}</button>
        </div>
      )
    }

  } else {
    return (
      <div className={styles.frame}>
        <button className={styles.beginBtn} onClick={() => setBegonnen(true)}>Begin</button>
      </div>
    )
  }
}
