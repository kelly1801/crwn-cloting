function App() {
  const categories = [
    {title: "Hats"},
    {title: "Jackets"},
    {title: "Sneackers"},
    {title: "Women"},
    {title: "Man"},
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }, index) => (
        <div className="category-container" key={index}>
          <div className="bg-img">
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
