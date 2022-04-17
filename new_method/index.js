function HomePage() {
  return (
    <div>
      <img
        src="./assets/react-logo.png"
        alt="React Logo"
        width="50px"
        height="50px"
      />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <div>
    <HomePage />
  </div>,
  document.getElementById("root")
);
