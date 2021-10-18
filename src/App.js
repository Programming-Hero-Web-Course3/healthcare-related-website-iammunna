import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Header></Header>

    //   <HomePage></HomePage>

    //   <Services></Services>

    //   <AboutUs></AboutUs>

    //   <ContactUs></ContactUs>

    //   <NotFound></NotFound>
    //   <Footer></Footer>
    // </div>

    <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path="/">
          <HomePage></HomePage>
        </Route>

        <Route exact path="/home">
          <HomePage></HomePage>
        </Route>

        <Route exact path="/services">
          <Services></Services>
        </Route>

        <Route exact path="/contact">
          <ContactUs></ContactUs>
        </Route>

        <Route exact path="/about">
          <AboutUs></AboutUs>
        </Route>



      </Switch>
    </BrowserRouter>
  );
}

export default App;
