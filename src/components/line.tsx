import React from "react";
import { styles } from "../styles";

const Line = ({
  attemptedWord,
  correctWord,
}: {
  attemptedWord: string;
  correctWord: string;
}) => {
  return (
    <div style={styles.row}>
      <div
        style={{
          ...styles.letterContainer,
          ...(attemptedWord &&
            (attemptedWord[0].toUpperCase() === correctWord[0].toUpperCase()
              ? styles.letterCorrect
              : correctWord
                  .toUpperCase()
                  .indexOf(attemptedWord[0].toUpperCase()) > -1
              ? styles.letterPartial
              : styles.letterIncorrect)),
        }}
      >
        {attemptedWord ? attemptedWord[0] : ""}
      </div>
      <div
        style={{
          ...styles.letterContainer,
          ...(attemptedWord &&
            (attemptedWord[1].toUpperCase() === correctWord[1].toUpperCase()
              ? styles.letterCorrect
              : correctWord
                  .toUpperCase()
                  .indexOf(attemptedWord[1].toUpperCase()) > -1
              ? styles.letterPartial
              : styles.letterIncorrect)),
        }}
      >
        {attemptedWord ? attemptedWord[1] : ""}
      </div>
      <div
        style={{
          ...styles.letterContainer,
          ...(attemptedWord &&
            (attemptedWord[2].toUpperCase() === correctWord[2].toUpperCase()
              ? styles.letterCorrect
              : correctWord
                  .toUpperCase()
                  .indexOf(attemptedWord[2].toUpperCase()) > -1
              ? styles.letterPartial
              : styles.letterIncorrect)),
        }}
      >
        {attemptedWord ? attemptedWord[2] : ""}
      </div>
      <div
        style={{
          ...styles.letterContainer,
          ...(attemptedWord &&
            (attemptedWord[3].toUpperCase() === correctWord[3].toUpperCase()
              ? styles.letterCorrect
              : correctWord
                  .toUpperCase()
                  .indexOf(attemptedWord[3].toUpperCase()) > -1
              ? styles.letterPartial
              : styles.letterIncorrect)),
        }}
      >
        {attemptedWord ? attemptedWord[3] : ""}
      </div>
      <div
        style={{
          ...styles.letterContainer,
          ...(attemptedWord &&
            (attemptedWord[4].toUpperCase() === correctWord[4].toUpperCase()
              ? styles.letterCorrect
              : correctWord
                  .toUpperCase()
                  .indexOf(attemptedWord[4].toUpperCase()) > -1
              ? styles.letterPartial
              : styles.letterIncorrect)),
        }}
      >
        {attemptedWord ? attemptedWord[4] : ""}
      </div>
    </div>
  );
};

export default Line;
