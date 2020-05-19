import React from "react";

function App() {
 
  const [isCurrentText, setCurrentText] = React.useState([]);
  const [items, setItems] = React.useState([]);

  function handleText(event) {
   // const name = event.target.name;
    const value = event.target.value;
    setCurrentText(value);
  }

  function submitText() {
    setItems(prevValue => {
      return [...prevValue, isCurrentText];
    });
    setCurrentText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="text"
          onChange={handleText}
          type="text"
          value={isCurrentText}
        />
        <button onClick={submitText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(x => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
