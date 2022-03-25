export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons" style={{ display: "flex", justifyContent: "space-around", padding: "10px", marginBottom: "15px" }}>
      <button onClick={() => handleSort("title", 1)} className="sortByTitleAsc">Sort by Title Asc</button>
      <button onClick={() => handleSort("title", -1)} className="sortByTitleDesc">Sort by Title Desc</button>
      <button onClick={() => handleSort("price", 1)} className="sortByPriceAsc">Sort by Price Asc</button>
      <button onClick={() => handleSort("price", -1)} className="sortByPriceDesc">Sort by Price Desc</button> 
    </div>
  );
};
