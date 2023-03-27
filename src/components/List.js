function List() {
    
    let list = ["Lav komponent", "brug states", "brug iterativ rendering", "brug conditional rendering", "brug propts"]
  
    function parseToListItem(item) {
        return <li>{item}</li>
    }

    function renderList(list) {
        let jsxList = []
        for (let i = 0; i < list.length; i++) {
            jsxList[i] = parseToListItem(list[i])
        }
        return jsxList
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
