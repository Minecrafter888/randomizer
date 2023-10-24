import './App.css';
import { useState } from "react";

function App() {
  const [names, setnames] = useState("")
  const [positions, setpositions] = useState("")
  const randomize = () =>{
    const namesInput = names
    const namesList = namesInput.split(",").map(name => name.trim());    
    const positionsInput = positions
    const positionsList = positionsInput.split(",").map(position => position.trim());     
    const assignments = [];
    while (namesList.length > 0) {
      const randomNameIndex = Math.floor(Math.random() * namesList.length);
      const randomPositionIndex = Math.floor(Math.random() * positionsList.length);
      
      const name = namesList.splice(randomNameIndex, 1)[0];
      const position = positionsList.splice(randomPositionIndex, 1)[0];
      
      assignments.push(name + " - " + position);
  }
    const assignmentsList = document.getElementById("assignments");
    assignmentsList.innerHTML = "";
    assignments.forEach(assignment => {
      const listItem = document.createElement("li");
      listItem.textContent = assignment;
      assignmentsList.appendChild(listItem);
  });
  }
  
  return (
    <div className="App">
      <center>
        <h1>Naam en Functie Randomizer</h1>
        <label>Namen</label>
        <input type="text" id="names" name='names' placeholder="Bijvoorbeeld Connor, Kyandro, Jason" onChange={e => setnames(e.target.value)}></input>
        <label>Posities</label>
        <input type="text" id="positions" name='positions' placeholder="Bijvoorbeeld ICT, CCS, Sales" onChange={e => setpositions(e.target.value)}></input>
      </center>
      <center><button onClick={randomize}>Randomize</button></center>
      <center>
        <h2>Randomized Functies:</h2>
        <img src= "https://www.scientias.nl/wp-content/uploads/2020/07/C128124E-2D1F-4625-A8D2-07726DEA2993.jpeg" alt='' width= {300}></img>
        <img src= "https://static01.nyt.com/images/2020/05/19/science/30TB-BORINGSUN1/merlin_172064805_d476abdd-f4da-4015-8ca3-8c45c92c61fa-articleLarge.jpg" alt='' width={200}></img>
        <ul id="assignments"></ul>
      </center>
      
    </div>
  );
}

export default App;
