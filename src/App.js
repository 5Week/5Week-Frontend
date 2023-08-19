import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import NavigationBar from "./mainScreen/navigationBar/NavigationBar";
//import Header from "./mainScreen/header/Header";
import MainScreen from "./mainScreen/mainScreen/MainScreen";
//import Footer from "./mainScreen/footer/Footer";
import LoginPage from "./loginPage/LoginPage";

function App() {
    return (
        <Router>
            <div className="App">
                <MainScreen />

                <Routes>
                    <Route path="/" exact component={MainScreen} />
                    <Route path="/login" component={LoginPage} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
