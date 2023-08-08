import React from 'react';
import NavigationBar from "../navigationBar/NavigationBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./MainScreen.css"


function MainScreen(props) {

    return (
        <div className={"mainScreen"}>
            <NavigationBar />
            <Header />
            <div className={"body"}>
                body
            </div>
            <Footer />
        </div>
    );
}
export default MainScreen;