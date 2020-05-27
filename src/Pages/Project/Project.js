import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../Components/Firstscreen/Header/header.css';

class Project extends React.Component {
  constructor(props) {
      super(props);
      const isAuth = sessionStorage.getItem("IS_AUTH") === "true";
      if (!isAuth) {
          props.history.replace("/");
      }
  }
    onLogout = () => {
      sessionStorage.removeItem("IS_AUTH");
      this.props.history.replace("/");
    };


    const get = () => {
    fetch ("http://localhost:3004/posts")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
  } 
    

    render() {
    return (
    <div>
    <header className="firstscreen">
      <div id="baner">
        <div className="header">
          <Link className="header_link" to="/">Главная</Link>
          <Link className="header_link" to="/Project">Наши проекты</Link>
          <Link className="header_link" to="/About">Услуги</Link>
          <Link className="header_link" to="/Users">Новости</Link>
          <Link className="header_link" onClick={this.onLogout}>Выход</Link>
        </div>
        <div className="line" />
        <div className="under_line">
          <div>Наши проекты</div>
          <div>
            <button onClick={get}>get</button>
          </div>
        </div>
      </div>

    </header>
    </div>
    );
  }
}


export default withRouter(Project);

