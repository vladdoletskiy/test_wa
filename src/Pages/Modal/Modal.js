import React from "react";
import "../Modal/modal.style.css";

import { withRouter, Link } from 'react-router-dom';

class Modal extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
        email: "",
        pass: "",
        emailError:""
     };
    }
      
    onChange = key => e => {
        this.setState({ [key]: e.target.value});
        if (key === "email" && this.state.emailError) {
            this.setState({ emailError: ""});
        }
         };

    onSubmit = () => {
        if 
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
  {
        sessionStorage.setItem("IS_AUTH", true);
        this.props.history.push("/project");
    } else {
        this.setState({ emailError: "email is not valide"});
    } 
};



    render() {
    return (
    <div>
        
        <header className="firstscreen">
      <div id="baner" className="baner">
        <div className="header">
          <Link className="header_link" to="/">Главная</Link>
          <Link className="header_link" to="/Project">Наши проекты</Link>
          <Link className="header_link" to="/About">Услуги</Link>
          <Link className="header_link" to="/Users">Новости</Link>
          <Link className="header_link" to="/Modal">Вход</Link>
        </div>
        <div className="line" />
            <div className="under_line form">
                <div> 
                <input className="input_auth" onChange={this.onChange("email")} value={this.state.email} placeholder="e-mail"/>
                </div>
                <div className="error">{this.state.emailError}</div>
                <div> 
                <input className="input_auth"type="password" onChange={this.onChange("pass")} value={this.state.pass} placeholder="password"/>
                </div>
            <div>
                <button onClick={this.onSubmit} disabled={!(this.state.email && this.state.pass)} className="button_modal">Submit</button>
            </div>
            </div>
      </div>
    </header>
    </div>);
  }
}


export default withRouter(Modal);
