import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/gallery" component={Gallery}></Route>
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
