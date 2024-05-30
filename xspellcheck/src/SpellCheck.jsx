import React, { useState } from 'react'

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

export default function SpellCheck() {

  let [inputText, setInputText] = useState('')
  let [suggestedText, setSuggestedText] = useState('')

  let handleInputChange = (e) => {
        let text = e.target.value
        setInputText(text)

        let words = text.split(" ")

        let correctedWords = words.map((word) => {
            const correctedWord = customDictionary[word.toLowerCase()]
            return correctedWord || word
        })

        const firstCorrection = correctedWords.find(
            (word, index) => word !== words[index]
          );

        setSuggestedText(firstCorrection || "")

  }
  return (
    <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
    </div>
  )
}
