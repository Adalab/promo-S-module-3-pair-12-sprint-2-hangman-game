import { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';

// api
import getWordFromApi from "../services/api";
//components
import Header from "../components/Header/Header.js";
import Dummy from "../components/Dummy/Dummy.js";
import SolutionLetters from "./SolutionLetters/SolutionLetters";
import ErrorLetters from "./ErrorLetters/ErrorLetters";
import Form from "./Form.js/Form";
import Footer from "./Footer/Footer";

// styles
import "../styles/App.scss";
import "../styles/Form.scss";




function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events


  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  
  
  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <Form handleLastLetter={handleLastLetter} lastLetter={lastLetter}></Form>
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()}></Dummy>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
