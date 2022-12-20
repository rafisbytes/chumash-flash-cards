import './App.css';
import React, { useState } from "react";
function DeckPar(props) {    
    return (
        <div>
            <h2>Create a deck</h2>
            <input placeholder="Name of deck"/>
            <button onClick={() => props.setDeckOpen("visible")}>Create deck</button>
        </div>	
    )
}
function FlashcardPar(props) {
    return (
        <div {...props}>
            <h2>Create a flashcard:</h2>
            <input className="parameter-inputs" placeholder="Original Word" dir="rtl"/>
            <input className="parameter-inputs" placeholder="Translation"/>
            <br/>
            <input className="parameter-inputs" placeholder="שרש" dir="rtl"/>
            <input className="parameter-inputs" placeholder="Translation of שרש"/>
            <button>Create flashcard</button>
	</div>
    )
}
function App() {
  const [deckOpen, setDeckOpen] = useState("collapse");
  return (
    <div className="App">
        <DeckPar setDeckOpen={setDeckOpen}/>
	<FlashcardPar style={{visibility:deckOpen}}/>
    </div>
  );
}

export default App;
