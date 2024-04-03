import { useState } from "react"
import ADD_ICON from "../../assets/add.svg"
import styles from "./InputWithAddButton.module.css"
import { motion } from "framer-motion"

export function InputWithAddButton({ setArray, letter, words }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState(null)

  function changeWord(e) {
    setValue(e.target.value)
    setError(null)
  }

  function addWord(event) {
    event.preventDefault()
    if (value.charAt(0).toLowerCase() === letter && !words.includes(value.toLowerCase())) {
      setArray(prevArray =>
        prevArray.map(arr => {
          if (arr.letter === letter) {
            return { ...arr, words: [...arr.words, value.toLowerCase()] }
          } else {
            return arr
          }
        })
      )
    } else {
      setError("Nieprawidłowy wyraz !!")
    }
    setValue("")
  }

  return (
    <>
      <form className={styles.addInput}>
        <input
          type='text'
          placeholder='wpisz słowo'
          name={letter}
          value={value}
          onChange={changeWord}
        />
        <motion.button
          type='submit'
          onClick={addWord}
          whileTap={{ scale: 0.9 }}>
          <img src={ADD_ICON} />
        </motion.button>
      </form>
      {error !== null && <p className={styles.error}>{error}</p>}
    </>
  )
}
