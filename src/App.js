import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <hr />
      <HomePage></HomePage>
      <hr />
      <hr />
      <Services></Services>
      <hr />
      <hr />
      <AboutUs></AboutUs>
      <hr />
      <hr />
      <ContactUs></ContactUs>
      <hr />
      <hr />
      <NotFound></NotFound>
      <hr />
      <hr />
      <Footer></Footer>
      <hr />
      <hr />
    </div>
  );
}

export default App;
