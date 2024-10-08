import React, { useState } from "react";
import "./App.css"; // Asegúrate de tener un archivo App.css para los estilos

function App() {
  const [result, setResult] = useState("");
  const [resultImage, setResultImage] = useState("");

  const calculateResult = () => {
    const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
    const form = document.forms["quizForm"];

    // Recorre las preguntas y acumula las respuestas
    for (let i = 1; i <= 5; i++) {
      const selected = form["q" + i].value;
      if (selected) {
        answers[selected]++;
      }
    }

    // Encuentra la respuesta mayoritaria
    let maxAnswer = "a";
    for (const key in answers) {
      if (answers[key] > answers[maxAnswer]) {
        maxAnswer = key;
      }
    }

    // Define los resultados según la respuesta mayoritaria
    let resultText = "";
    let resultImageUrl = "";
    switch (maxAnswer) {
      case "a":
        resultText = "Unternehmer des Jahres";
        resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
        break;
      case "b":
        resultText = "Sport";
        resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
        break;
      case "c":
        resultText = "Perfekter Bräutigam";
        resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
        break;
      case "d":
        resultText = "Nice man";
        resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
        break;
      case "e":
        resultText = "Familie";
        resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
        break;
      case "f":
        resultText = "Party man";
        resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
        break;
    }

    // Actualiza el estado con el resultado y la imagen
    setResult(resultText);
    setResultImage(resultImageUrl);

    // Muestra el resultado en el pop-up
    document.getElementById("resultModal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("resultModal").style.display = "none";
  };

  return (
    <div className="quiz-container">
      <h1>Welchen Stil suchst du?</h1>
      <form id="quizForm">
        {/* Pregunta 1 */}
        <div className="question">
          <p>1. Was machst du am liebsten in deiner Freizeit?</p>
          <label>
            <input type="radio" name="q1" value="a" /> Berufliche
            Veranstaltungen.
          </label>
          <label>
            <input type="radio" name="q1" value="b" /> Sport treiben oder
            Outdoor-Aktivitäten.
          </label>
          <label>
            <input type="radio" name="q1" value="c" /> Vorbereitungen für
            besondere Anlässe.
          </label>
          <label>
            <input type="radio" name="q1" value="d" /> Mit Freunden ausgehen.
          </label>
          <label>
            <input type="radio" name="q1" value="e" /> Zeit mit der Familie
            verbringen.
          </label>
          <label>
            <input type="radio" name="q1" value="f" /> Auf Partys gehen.
          </label>
        </div>

        {/* Pregunta 2 */}
        <div className="question">
          <p>2. Wie würdest du deinen Modestil beschreiben?</p>
          <label>
            <input type="radio" name="q2" value="a" /> Elegant und
            professionell.
          </label>
          <label>
            <input type="radio" name="q2" value="b" /> Casual und bequem.
          </label>
          <label>
            <input type="radio" name="q2" value="c" /> Raffiniert und elegant.
          </label>
          <label>
            <input type="radio" name="q2" value="d" /> Attraktiv und vielseitig.
          </label>
          <label>
            <input type="radio" name="q2" value="e" /> Entspannt und bequem.
          </label>
          <label>
            <input type="radio" name="q2" value="f" /> Trendig.
          </label>
        </div>

        {/* Pregunta 3 */}
        <div className="question">
          <p>3. Welche Art von Veranstaltungen besuchst du am liebsten?</p>
          <label>
            <input type="radio" name="q3" value="a" /> Firmenveranstaltungen.
          </label>
          <label>
            <input type="radio" name="q3" value="b" /> Sportwettbewerbe.
          </label>
          <label>
            <input type="radio" name="q3" value="c" /> Hochzeiten, Jubiläen und
            persönliche Feierlichkeiten.
          </label>
          <label>
            <input type="radio" name="q3" value="d" /> Gesellschaftliche
            Treffen, Abendessen und Ausgehen mit Freunden.
          </label>
          <label>
            <input type="radio" name="q3" value="e" /> Familiäre Aktivitäten,
            Zusammenkünfte und Abendessen zu Hause.
          </label>
          <label>
            <input type="radio" name="q3" value="f" /> Konzerte, Clubs und
            nächtliche Veranstaltungen.
          </label>
        </div>

        {/* Pregunta 4 */}
        <div className="question">
          <p>4. Was ist dir bei der Auswahl eines Outfits am wichtigsten?</p>
          <label>
            <input type="radio" name="q4" value="a" /> Der professionelle
            Eindruck und die Eleganz.
          </label>
          <label>
            <input type="radio" name="q4" value="b" /> Der Komfort und die
            Leistung bei Aktivitäten.
          </label>
          <label>
            <input type="radio" name="q4" value="c" /> Der Stil und die Wirkung
            bei besonderen Anlässen.
          </label>
          <label>
            <input type="radio" name="q4" value="d" /> Die Fähigkeit, sich an
            verschiedene soziale Situationen anzupassen.
          </label>
          <label>
            <input type="radio" name="q4" value="e" /> Der Komfort und der
            lässige Ansatz für den Alltag.
          </label>
          <label>
            <input type="radio" name="q4" value="f" /> Die Fähigkeit,
            aufzufallen.
          </label>
        </div>

        {/* Pregunta 5 */}
        <div className="question">
          <p>5. Wann fühlst du dich am sichersten?</p>
          <label>
            <input type="radio" name="q5" value="a" /> Mit einem gepflegten und
            professionellen Look, der Selbstbewusstsein ausstrahlt.
          </label>
          <label>
            <input type="radio" name="q5" value="b" /> Mit Kleidung, die
            Bewegungsfreiheit und Funktionalität ermöglicht.
          </label>
          <label>
            <input type="radio" name="q5" value="c" /> Mit einem raffinierten
            Stil, der bei besonderen Anlässen auffällt.
          </label>
          <label>
            <input type="radio" name="q5" value="d" /> Mit einem Outfit, das
            dich bei gesellschaftlichen Treffen hervorstechen lässt.
          </label>
          <label>
            <input type="radio" name="q5" value="e" /> Mit einem entspannten und
            bequemen Stil für die Zeit mit der Familie.
          </label>
          <label>
            <input type="radio" name="q5" value="f" /> Mit einem trendigen Look,
            der dich bei nächtlichen Veranstaltungen glänzen lässt.
          </label>
        </div>

        <button type="button" onClick={calculateResult}>
          Absenden
        </button>
      </form>

      {/* Modal para mostrar el resultado */}
      <div id="resultModal" className="modal" style={{ display: "none" }}>
        <div className="modal-content">
          <p className="result-text" id="resultText">
            Dein Stil ist: {result}
          </p>
          {resultImage && (
            <div style={{ textAlign: "center" }}>
              <img
                src={resultImage}
                alt={result}
                style={{ width: "200px", height: "auto", margin: "10px" }}
              />
            </div>
          )}
          <button className="close-button" onClick={closeModal}>
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
