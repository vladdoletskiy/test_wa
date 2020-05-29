import React from 'react';
// import Cover from "../../Components/Cover/Cover";
// import Footer from "../../Components/Footer";
import  "./user.css";


class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }


    componentDidMount() {
      fetch(
        "http://localhost:3004/posts"
      )
        .then(res => res.json())
        .then(data => this.setState({ items: [data] }));
    }

  render() {
      return(
          <div>
                   <div className="nasa_container">
              {this.state.items.map((list) => (
                  <div key={list.id} className="nasa">
                      <h1>{list.posts.title}</h1>
                      <h2>{list.posts.author}</h2>
          </div>
        ))}
              </div>
            
          </div>
      ) 
  }


}


export default Users;

