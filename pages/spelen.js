import { useState } from "react";
import styles from "../styles/Spelen.module.css";

let currentQuestion;
let straf;
export default function Spelen() {
  const [begonnen, setBegonnen] = useState(false);
  const [moeilijkheid, setMoeilijkheid] = useState();
  const [givenAntwoord, setAntwoord] = useState(false);
  const [goedeAntwoord, setGoedeAntwoord] = useState();

  const easyQuestions = [{ vraag: "Hoe heet de vriendin van Donald duck?", antwoord1: "Katrina", antwoord2: "Katrien", antwoord3: "Mona", antwoord4: "Minnie", right: 2 }, { vraag: "Hoeveel dagen zitten er in een schrikkeljaar?", antwoord1: "355", antwoord2: "365", antwoord3: "366", antwoord4: "354", right: 3 },]
  const mediumQuestions = [{ vraag: "Hoeveel kubieke decimeter is 95409 liter?", antwoord1: "954,09", antwoord2: "95.409", antwoord3: "9,5409", antwoord4: "95409000", right: 2 }, { vraag: "Welk land in Europa heeft de meeste inwoners?(Rusland telt niet mee)", antwoord1: "Frankrijk", antwoord2: "Belgie", antwoord3: "Polen", antwoord4: "Duitsland", right: 4 },]
  const hardQuestions = [{ vraag: "Hoeveel landen zijn er lid van de Europese Unie?", antwoord1: "27", antwoord2: "30", antwoord3: "24", antwoord4: "51", right: 1 }, { vraag: "In welk continent ligt Bhutan?", antwoord1: "Azië", antwoord2: "Europa", antwoord3: "Zuid-Amerika", antwoord4: "Noord-Amerika", right: 1 },]
  const superhardQuestions = [{ vraag: "Wat is de hoogste berg gezien van het middelpunt van de aarde?", antwoord1: "Mount Everest", antwoord2: "K2", antwoord3: "Chimborazo", antwoord4: "Mont Blanc", right: 3 }, { vraag: "Hoeveel landen heeft Zuid-Amerika?", antwoord1: "10", antwoord2: "13", antwoord3: "19", antwoord4: "15", right: 2 },]

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
            <h3 className={styles.awnser}>{currentQuestion.right} {currentQuestion.right === 1 ? currentQuestion.antwoord1 : ""}
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
