import React from 'react';
import Cover from "../../Components/Cover/Cover";
import Footer from '../../Components/Footer';


class About extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }


    componentDidMount(){
      fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then((res) => res.json())
        .then(({ drinks }) => {
          this.setState({ items: [ ...drinks ]})
        });
  }

  render() {
      return(
          <div>
            <Cover/>
              <div>
                 {this.state.items.map(({ idDrink, strDrink, strDrinkThumb}) => (
                     <div key={idDrink} >
                       <div>{strDrink}</div>
                       <img src={strDrinkThumb} alt={idDrink}/>
                     </div>
                 ))} 
              </div>
          </div>
      ) 
  }


}


export default About;
