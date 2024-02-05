import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <header className="header">
        <div className="logo">
        <a href="#">& Healthh</a>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
         <li><button id="explore-button">Explore</button></li>

          </ul>
        </nav>
      </header> 
      <main className="main-content">
    <div className="content-left">
     <h1 >Personalized </h1>
     <h2>Proteins & Gummies </h2>
      <p>Lorem ipsum dolor sit amet, Nullam convallis molestie.</p>
      <button id="explore-button-content">Explore →</button>
    </div>
    <div className="image-right">
      <img src="./images/Plastic_Bottle_with_Gummies.png" alt="Image" />
    </div>
  </main>
     

   </div>
  );
}

export default App;
