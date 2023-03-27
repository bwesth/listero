import { useState } from "react";

function List() {
  const [list, setList] = useState([
    "Lav komponent",
    "brug states",
    "brug iterativ rendering",
    "brug conditional rendering",
    "brug propts",
  ]);
  const [input, setInput] = useState("")

  return (
    <div>
      <h1>Min Liste</h1>
      <input type="text" value={input}/>
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
