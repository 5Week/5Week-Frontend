import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./mainScreen/navigationBar/NavigationBar";
import Header from "./mainScreen/header/Header";
import Footer from "./mainScreen/footer/Footer";
import MainScreen from "./mainScreen/mainScreen/MainScreen";
import LoginPage from "./loginPage/LoginPage";

function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <Header />
                <div className="MainContent">
                    <Routes>
                        <Route path="/" exact element={<MainScreen />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
