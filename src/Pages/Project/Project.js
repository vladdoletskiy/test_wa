import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../Components/Firstscreen/Header/header.css';

class Project extends React.Component {
  constructor(props) {
      super(props);
      const isAuth = sessionStorage.getItem("IS_AUTH") === "true";
      if (!isAuth) {
          // props.history.replace("/");
      }
  }
    onLogout = () => {
      sessionStorage.removeItem("IS_AUTH");
      this.props.history.replace("/");
    };

  get = () => {
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then((res) => res.json())
    .then((res) => {
    console.log(res);
    });
  }
    

    render() {
    return (
      <div>Project</div>
    );
  }
}


export default withRouter(Project);

