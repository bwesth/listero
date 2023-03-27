import { useState } from "react";

function List() {
  const [list, setList] = useState([
    { value: "Lav komponent", checked: false },
    { value: "brug states", checked: false },
    { value: "brug iterativ rendering", checked: false },
    { value: "brug conditional rendering", checked: false },
    { value: "brug props", checked: false },
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

  function deleteItem(index) {
    setList((prevState) =>
      prevState.filter((item, itemIndex) => itemIndex !== index)
    );
  }

  function handleCheck(index) {
    setList((prevState) => {
      // Fordi vores array nu har objekter, kan vi ikke bare kopiere det med [...prevState]
      // Vi bliver nødt til at lave et "deep copy", så det nye array ikke har de samme REFERENCER, men helt nye objekter.
      let newList = JSON.parse(JSON.stringify(prevState));
      // Vi inverterer checked boolean værdien i den givne position
      newList[index].checked = !newList[index].checked;
      // Og returnere det nye array til vores setList funktion.
      return newList;
    });
  }

  return (
    <div>
      <h1>Min Liste</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
      </form>
      {list.length > 0 ? (
        <ul>
          {list.map((item, index) => (
            <li>
              <span onClick={() => handleCheck(index)}>
                {item.checked ? <s>{item.value}</s> : item.value}
              </span>
              <span onClick={() => deleteItem(index)}>🗑️</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Listen er tom</p>
      )}
    </div>
  );
}

export default List;
