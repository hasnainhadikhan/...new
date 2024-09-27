import "./App.css";
import Feature from "./component/Feature";
import Navbar from "./component/Navbar";
import Reviews from "./component/Reviews";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Items from "./component/Items"
import Heroies from "./component/Heroies";
function App() {
  return (
    <>
   <Navbar/>
     <Hero/>
     <Heroies/>
     <Feature/>
     <Items/>
     <Reviews/>
     <Footer/>
    
    </>
  );
}

export default App;
