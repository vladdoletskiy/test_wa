import React from 'react';
import { withRouter } from 'react-router-dom';

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

    render() {
    return (
    <div>
    <div>Наши проекты</div>
    <button onClick={this.onLogout} className="button_modal">Log out</button>
    </div>
    );
  }
}


export default withRouter(Project);
