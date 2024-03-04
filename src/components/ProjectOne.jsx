// header component
function Header() {
  return (
    <nav className="nav">
      <img src="./src/assets/react.svg" className="nav-logo" alt="ReactLogo" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}
// content component
function MainComponent() {
  return (
    <ol className="list-items">
      <h1>Reason Why I am exicited In React</h1>
      <li>It is Popular Library ..... with cool kids</li>
      <li>I'm more likely to get Job when i know react</li>
    </ol>
  );
}

//   footer component
function Footer() {
  return <p> InOnO . All Rights Reserved</p>;
}

//   project At all
function ProjectOne() {
  return (
    <>
      <Header></Header>
      <MainComponent></MainComponent>
      <Footer></Footer>
    </>
  );
}
export default ProjectOne;
