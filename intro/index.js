function NavBar() {
  return (
    <nav>
      <h1> SIIS incorporated</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

ReactDOM.render(
  <div>
    <NavBar />
  </div>,
  document.getElementById("root")
);
