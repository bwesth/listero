function List() {
//   let list = [
//     "Lav komponent",
//     "brug states",
//     "brug iterativ rendering",
//     "brug conditional rendering",
//     "brug propts",
//   ];

  let list = [
    
  ];

  return (
    list.length > 0 && (
      <div>
        <h1>Min Liste</h1>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    )
  );
}

export default List;
