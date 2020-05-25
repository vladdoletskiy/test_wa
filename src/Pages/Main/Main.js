import React from "react";
import Header from "../../Components/Firstscreen/Header/Header";
import Content from "../../Components/Secondscreen/Content";
import MoreContent from "../../Components/Content1/MoreContent";
import Gallery from "../../Components/Gallery/Gallery";
import VideoPresentation from "../../Components/VideoPresentation/VideoPresentation";
import Mailing from "../../Components/Mailing/Mailing";
import Footer from "../../Components/Footer";
import Burger from "../../Components/Burger/Burger";
import Navigation from "../../Components/Navigation/Navigation";

const Main = () => {
    return (
    <div>
    <Header />
    <Burger/>
    <Content />
    <MoreContent />
    <Gallery/>
    <VideoPresentation/>
    <Mailing/>
    <Footer/>
    </div>
    )
};
export default Main;




