import React from "react";
import { styles } from "../styles";

const Keyboard = ({
  attemptedWord,
  onLetterClick,
  onSubmit,
  onRemoveLetter,
  result,
  isValidWord,
}: {
  attemptedWord: string;
  onLetterClick: (e: any) => void;
  onRemoveLetter: (e: any) => void;
  onSubmit: (e: any) => void;
  result: "won" | "lost" | "incomplete";
  isValidWord: boolean | null;
}) => {
  return (
    <div style={styles.keyboardContainer}>
      <div style={styles.attemptedLetters}>
        {result === "won"
          ? "Congratulations!"
          : result === "lost"
          ? "Try again tomorrow!"
          : attemptedWord
          ? attemptedWord
          : " "}
        {isValidWord || isValidWord === null ? "" : "Word Not In List"}
      </div>
      <div style={styles.keyboardRow}>
        <div
          style={{
            ...styles.keyboardButton,
          }}
          onClick={onLetterClick}
        >
          q
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          w
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          e
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          r
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          t
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          y
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          u
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          i
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          o
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          p
        </div>
      </div>
      <div style={styles.keyboardRow}>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          a
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          s
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          d
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          f
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          g
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          h
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          j
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          k
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          l
        </div>
      </div>
      <div style={styles.keyboardRow}>
        <div style={styles.keyboardButton} onClick={onSubmit}>
          enter
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          z
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          x
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          c
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          v
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          b
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          n
        </div>
        <div style={styles.keyboardButton} onClick={onLetterClick}>
          m
        </div>
        <div style={styles.keyboardButton} onClick={onRemoveLetter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              fill="var(--color-tone-1)"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
