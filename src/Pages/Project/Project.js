import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../Components/Firstscreen/Header/header.css';
import Cover from "../../Components/Cover/Cover";
import Footer from "../../Components/Footer";
import Burger from "../../Components/Burger/Burger";

class Project extends React.Component {
 
    

    render() {
    return (
      <div>
        <Burger/>
        <Cover/>
        <Footer/>
        </div>
    );
  }
}


export default withRouter(Project);

