function List() {
  //   let list = [
  //     "Lav komponent",
  //     "brug states",
  //     "brug iterativ rendering",
  //     "brug conditional rendering",
  //     "brug propts",
  //   ];

  let list = [];

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
