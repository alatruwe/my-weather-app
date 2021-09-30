import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h1>My Weather App</h1>
      {/* rainbow border */}
      <ul className="colorful-border">
        <li className="colorful-border-red"></li>
        <li className="colorful-border-orange"></li>
        <li className="colorful-border-yellow"></li>
        <li className="colorful-border-light-green"></li>
        <li className="colorful-border-green"></li>
        <li className="colorful-border-blue"></li>
        <li className="colorful-border-violet"></li>
      </ul>
    </div>
  );
}

export default NavBar;
