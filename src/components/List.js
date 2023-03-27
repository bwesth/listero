import { useState } from "react";

function List() {
  const [list, setList] = useState([
    "Lav komponent",
    "brug states",
    "brug iterativ rendering",
    "brug conditional rendering",
    "brug propts",
  ]);
  

  return (
    <div>
      <h1>Min Liste</h1>
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
