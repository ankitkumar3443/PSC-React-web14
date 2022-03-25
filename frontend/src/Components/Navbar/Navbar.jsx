import { Link } from "react-router-dom";

let styleTemp = {
  display: "flex",
  justifyContent: "space-around",
  padding: "15px",
  backgroundColor: "teal",
  marginBottom: "15px",
};

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={styleTemp}>
        <button className="home">
          <Link to="/">Home</Link>
        </button>
        <button className="history">
          <Link to="/section/history">History</Link>
        </button>
        <button className="mystery">
          <Link to="/section/mystery">Mystery</Link>
        </button>
        <button className="mythology">
          <Link to="/section/mythology">Mythology</Link>
        </button>
        <button className="technology">
          <Link to="/section/technology">Technology</Link>
        </button>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
