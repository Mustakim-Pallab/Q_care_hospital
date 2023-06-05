import './App.css';
import Topbar from './Components/Homepage/Topbar/Topbar';
import Navigation from './Components/Shared/Navbar/Navigation';
import Services from './Components/Services/Services';
import HomeServices from './Components/Homepage/Home Services/HomeServices'
import Header from './Components/Homepage/Header/Header';
import Login from './Components/Shared/Login/Login';
import { createContext, useState } from 'react';
import { BrowserRouter as Router,
  Switch ,
  Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import NewAccount from './Components/Shared/NewAccount/NewAccount';
import Details from './Components/Shared/Details/Details';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Shared/Footer/Footer';
import Specialities from './Components/Researches/Specialities';
import NotFound from './Components/NotFound/NotFound';



function App() {

  const [Users, setUsers] = useState({})
  return (
    <div className="App">
    
      
      <AuthProvider>
      <Router>
        
          <Topbar></Topbar>
          <Navigation></Navigation>

        <Switch>

          <Route path="/Home">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>

          
          <Route path="/login">
            <br /> <br /> 
            <Login></Login>
          </Route>

          <PrivateRoute path="/details/:name">
            <Details> </Details>
          </PrivateRoute>

          <Route path="/new">
            <br /> <br />
            <NewAccount></NewAccount>
          </Route>
          <Route path="/about_us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/speciality">
            <Specialities></Specialities>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      <Footer></Footer>

    </Router>
      </AuthProvider>
  

    </div>
  );
}

export default App;
