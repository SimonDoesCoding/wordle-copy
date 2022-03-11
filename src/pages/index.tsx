import React, { useEffect, useMemo, useState } from "react";
import { styles } from "../styles";
import axios from "axios";
import Line from "../components/line";
import Keyboard from "../components/keyboard";

const IndexPage = () => {
  const [correctWord, setCorrectWord] = useState("");
  const [attempts, setAttempts] = useState<string[]>([]);
  const [attemptedWord, setAttemptedWord] = useState<string>("");
  const [isValidWord, setIsValidWord] = useState<boolean | null>(null);
  const [result, setResult] = useState<"won" | "lost" | "incomplete">(
    "incomplete"
  );

  const getRandomWord = async () => {
    let randomWord = "";
    do {
      const randomWordApiResult = await axios.get<string[]>(
        "https://random-word-api.herokuapp.com/word?number=50&swear=0&lang=en"
      );
      if (
        randomWordApiResult.status === 200 &&
        randomWordApiResult.data &&
        randomWordApiResult.data.length > 0
      ) {
        randomWord =
          randomWordApiResult.data.find((word) => word.length === 5) ?? "";
      }
    } while (randomWord === "");

    setCorrectWord(randomWord);
  };

  useMemo(() => {
    getRandomWord();
  }, []);

  useEffect(() => {
    if (
      attempts[attempts.length - 1] &&
      attempts[attempts.length - 1].toUpperCase() ===
        correctWord.toUpperCase() &&
      result === "incomplete"
    ) {
      setResult("won");
      return;
    }

    if (attempts.length === 6) {
      setResult("lost");
      return;
    }

    if (attemptedWord.length < 5) {
      return;
    }
  });

  const onLetterClick = (e: any) => {
    if (attemptedWord.length >= 5 || result !== "incomplete") {
      return;
    }

    setIsValidWord(null);

    const guessedLetter =
      e.target.innerHTML.length > 1 ? "" : e.target.innerHTML;

    setAttemptedWord(attemptedWord + guessedLetter);
  };

  const onSubmit = () => {
    if (attemptedWord.length !== 5 || result !== "incomplete") {
      return;
    }

    verifyWord(attemptedWord)
      .then((result) => {
        if (result) {
          setIsValidWord(true);
          setAttempts([...attempts, attemptedWord]);
        } else {
          setIsValidWord(false);
        }
      })
      .finally(() => {
        setAttemptedWord("");
      });
  };

  const verifyWord = async (attemptedWord: string) => {
    try {
      const result = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${attemptedWord}`
      );

      return result.status === 200;
    } catch {
      return false;
    }
  };

  const onRemoveLetter = () => {
    if (attemptedWord.length === 0) {
      return;
    }
    setAttemptedWord(attemptedWord.substring(0, attemptedWord.length - 1));
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {Array(6)
          .fill(1)
          .map((v, i) => (
            <div key={i}>
              <Line attemptedWord={attempts[i]} correctWord={correctWord} />
            </div>
          ))}

        <Keyboard
          attemptedWord={attemptedWord}
          isValidWord={isValidWord}
          onLetterClick={onLetterClick}
          onRemoveLetter={onRemoveLetter}
          onSubmit={onSubmit}
          result={result}
        />
      </div>
    </main>
  );
};

export default IndexPage;
