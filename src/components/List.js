function List() {
    
    let list = ["Lav komponent", "brug states", "brug iterativ rendering", "brug conditional rendering", "brug propts"]
  
    function parseToListItem(item) {
        return <li>{item}</li>
    }

    return (
    <div>
      <h1>Min Liste</h1>
      <ul>

      </ul>
    </div>
  );
}

export default List;
