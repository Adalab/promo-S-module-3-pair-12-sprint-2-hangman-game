import "../../styles/Letters.scss";

function SolutionLetters({ word, userLetters }) {
  function renderSolutionLetters(word, userLetters) {
    const wordLetters = word.split("");
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ""}
        </li>
      );
    });
  }

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters(word, userLetters)}</ul>
    </div>
  );
}

export default SolutionLetters;
