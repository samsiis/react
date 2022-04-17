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
function Header() {
  return (
    <header>
      <nav>
        <img src="./assets/react-logo.png" width="40px" height="40px" />
        <h1> This is a fantastic React Training Page</h1>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <small>(C) 2022 Samuel Sopeju development. All rights reserved</small>
    </footer>
  );
}
function Page() {
  return (
    <ol>
      <li>React is a top FE development Framework</li>
      <li>With React, I can land some really cool jobs</li>
      <li>With React, I can build some performant apps and beautiful UIs</li>
    </ol>
  );
}

ReactDOM.render(
  <div>
    <Header />
    <Page />
    <Footer />
  </div>,
  document.getElementById("root")
);
