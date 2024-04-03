import styles from "./WordList.module.css"
import REMOVE_ICON from "../../assets/remove.svg"
export function WordList({ words, letter, setArray }) {
  return (
    <ul className={styles.wordList}>
      {words.sort().map(word => (
        <li key={word}>
          {word}
          <button
            onClick={e =>
              setArray(prevArray =>
                prevArray.map(arr => {
                  if (arr.letter === letter) {
                    return { ...arr, words: arr.words.filter(item => item !== word) }
                  }
                  return arr
                })
              )
            }>
            <img src={REMOVE_ICON} />
          </button>
        </li>
      ))}
    </ul>
  )
}
