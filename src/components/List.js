import { useState } from "react";

function List() {
  const [list, setList] = useState([
    "Lav komponent",
    "brug states",
    "brug iterativ rendering",
    "brug conditional rendering",
    "brug propts",
  ]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList((prevState) => [...prevState, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Min Liste</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
      </form>
      {list.length > 0 ? (
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Listen er tom</p>
      )}
    </div>
  );
}

export default List;
