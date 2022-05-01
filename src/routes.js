import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import MoviesPage from "./pages/Movies/MoviesPage";
import TVPage from "./pages/TV/TVPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/tv" component={TVPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
