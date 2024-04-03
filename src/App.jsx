import { Container } from "./components/Container/Container"
import { LetterWindow } from "./components/LetterWindow/LetterWindow"

import { useState } from "react"

function App() {
  const [array, setArray] = useState([
    { letter: "a", words: [] },
    { letter: "b", words: [] },
    { letter: "c", words: [] },
    { letter: "ć", words: [] },
    { letter: "d", words: [] },
    { letter: "e", words: [] },
    { letter: "f", words: [] },
    { letter: "g", words: [] },
    { letter: "h", words: [] },
    { letter: "i", words: [] },
    { letter: "j", words: [] },
    { letter: "k", words: [] },
    { letter: "l", words: [] },
    { letter: "ł", words: [] },
    { letter: "m", words: [] },
    { letter: "n", words: [] },
    { letter: "o", words: [] },
    { letter: "p", words: [] },
    { letter: "r", words: [] },
    { letter: "s", words: [] },
    { letter: "ś", words: [] },
    { letter: "t", words: [] },
    { letter: "u", words: [] },
    { letter: "w", words: [] },
    { letter: "z", words: [] },
    { letter: "ż", words: [] },
    { letter: "ź", words: [] },
  ])

  return (
    <Container>
      {array.map(arr => (
        <LetterWindow
          letter={arr.letter}
          key={arr.letter}
          setArray={setArray}
          words={arr.words}
        />
      ))}
    </Container>
  )
}

export default App
