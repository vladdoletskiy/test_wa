import React from "react";
import Content from "../../Components/Secondscreen/Content";
import MoreContent from "../../Components/Content1/MoreContent";
import Gallery from "../../Components/Gallery/Gallery";
import VideoPresentation from "../../Components/VideoPresentation/VideoPresentation";
import Mailing from "../../Components/Mailing/Mailing";
import Footer from "../../Components/Footer";
import Burger from "../../Components/Burger/Burger";
import Cover from "../../Components/Cover/Cover";
import Headline from "../../Components/Headline/Headline";


const Main = () => {
    return (
    <div className="main_container">
    <Burger/>
    <Cover/>
    <Headline/>
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




