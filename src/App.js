import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./mainScreen/navigationBar/NavigationBar";
import Header from "./mainScreen/header/Header";
import Footer from "./mainScreen/footer/Footer";
import MainScreen from "./mainScreen/mainScreen/MainScreen";
import LoginPage from "./loginPage/LoginPage";
import SignUpPage from "./signUpPage/SignUpPage";
import FindIdPage from "./findIdPage/FindIdPage";
import FindPwPage from "./findPwPage/FindPwPage";

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
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/find-id" element={<FindIdPage />} />
                        <Route path="/find-password" element={<FindPwPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
