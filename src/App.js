import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn/LogIn';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import SignUp from './components/Form/SignUp/SignUp';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (


    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <PrivateRoute exact path="/contact">
            <ContactUs></ContactUs>
          </PrivateRoute>

          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>

          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <Route path="/signup">
            <SignUp></SignUp>
          </Route>

          <Route to="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </AuthProvider>
  );
}

export default App;
