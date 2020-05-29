import React from 'react';
import Cover from "../../Components/Cover/Cover";
import Footer from '../../Components/Footer';
import "../About/about.style.css";


class About extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }


    componentDidMount() {
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=EYYXVCpXeuBaEcDVbPYh2L04mrypnoUTvTnu4Lei"
      )
        .then(res => res.json())
        .then(data => this.setState({ items: [data] }));
    }

  render() {
      return(
          <div>
              <div className="nasa_container">
              {this.state.items.map((nasa, id) => (
                  <div key={id} className="nasa">
                    <div class_name="nasa_img">
                      <img className="img_1" src={nasa.hdurl} alt={nasa.title} />
                  </div>
                      <h1>{nasa.copyright}</h1>
                      <h2>{nasa.date}</h2>
                      <p align="justify" className ="explanation">{nasa.explanation}</p>
          </div>
        ))}
              </div>
              <Footer/>
          </div>
      ) 
  }


}


export default About;
