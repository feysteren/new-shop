import Product from "../Product/Product";
import "./Header.css";
import Slider from "../Slider/Slider";

function Header({ categories, selectCategory, category, price }) {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={() => selectCategory(category)}>
            {categories.map((category) => (
              <option key={category}> {category} </option>
            ))}
          </select>
        </div>

        <div className="collection-sort" style={{ width: 300 }}>
          <Slider price={price} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
