const fruits = ["Apple", "Banana", "Cherry"];
const FruitList = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
