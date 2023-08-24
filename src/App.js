// App.js 파일 수정
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./mainScreen/navigationBar/NavigationBar";
import Header from "./mainScreen/header/Header";
import Footer from "./mainScreen/footer/Footer";
import MainScreen from "./mainScreen/mainScreen/MainScreen";
import LoginPage from "./loginPage/LoginPage";
import SignUpPage from "./signUpPage/SignUpPage";
import FindIdPage from "./findIdPage/FindIdPage";
import FindPwPage from "./findPwPage/FindPwPage";
import MyPage from "./myPage/MyPage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");

    const login = (id) => {
        setIsLoggedIn(true);
        setUserId(id);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserId("");
    };

    return (
        <Router>
            <div className="App">
                <NavigationBar
                    isLoggedIn={isLoggedIn}
                    userId={userId}
                    onLogout={logout}
                />
                <Header />
                <div className="MainContent">
                    <Routes>
                        <Route path="/" exact element={<MainScreen />} />
                        <Route
                            path="/login"
                            element={<LoginPage onLogin={login} />}
                        />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/find-id" element={<FindIdPage />} />
                        <Route path="/find-password" element={<FindPwPage />} />
                        <Route path="/mypage" element={<MyPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
