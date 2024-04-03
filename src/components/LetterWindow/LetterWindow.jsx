import styles from "./LetterWindow.module.css"
import { InputWithAddButton } from "../InputWithAddButton/InputWithAddButton"
import { WordList } from "../WordList/WordList"
export function LetterWindow({ letter, setArray, words }) {
  return (
    <div className={styles.letterWindow}>
      <h2>{letter}</h2>
      <InputWithAddButton
        setArray={setArray}
        letter={letter}
        words={words}
      />
      <WordList
        words={words}
        setArray={setArray}
        letter={letter}
      />
    </div>
  )
}
