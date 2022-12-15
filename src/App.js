import './App.css';
import React, { useState } from "react";
function App() {
  const [deckOpen, setDeckOpen] = useState("collapse");
  return (
    <div className="App">
            <h2>Create a deck</h2>
	    <input placeholder="Name of deck"/>
	    <button onClick={() => setDeckOpen("visible")}>Create deck</button>
	<div style={{visibility:deckOpen}}>
       	<h2>Create a flashcard:</h2>
        <input className="parameter-inputs" placeholder="Original Word" dir="rtl"/>
        <input className="parameter-inputs" placeholder="Translation"/>
	<br/>
        <input className="parameter-inputs" placeholder="שרש" dir="rtl"/>
        <input className="parameter-inputs" placeholder="Translation of שרש"/>
	</div>
    </div>
  );
}

export default App;
