import React, { useState } from 'react'
import data from './data'
function App() {
  const [value, setValue] = useState(0)
  const [newParagraphsCreated, setnewParagraphsCreated] = useState([])

  console.log(newParagraphsCreated)

  function handleSubmit(e) {
    e.preventDefault()
    generateParagraphs()
  }

  function generateParagraphs() {
    let inputVal = parseInt(value)

    let newListOfParagraphs = []

    for (let i = 1; i <= inputVal; i++) {
      let paragraphoAgregar = data[Math.floor(Math.random() * data.length)]

      newListOfParagraphs.push(paragraphoAgregar)
    }

    return setnewParagraphsCreated(newListOfParagraphs)
  }

  return (
    <div className='container' onSubmit={handleSubmit}>
      <h2>lorem ipsum Generator</h2>
      <div>
        <p>By Alexander Calderon</p>
      </div>
      <form>
        <label>Paragraphs</label>
        <input
          type='number'
          placeholder='0'
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Generate</button>
      </form>

      <div className='paragraph-results'>
        {newParagraphsCreated &&
          newParagraphsCreated.map((paragraph, index) => (
            <p key={index}>
              {' '}
              {index + 1 + ' '}
              {paragraph}
            </p>
          ))}
      </div>
    </div>
  )
}

export default App
