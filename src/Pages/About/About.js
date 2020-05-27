import React from 'react';

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
  .then((res) => {
  console.log(res);
//   this.setState({ items: [ ...res ]})   страница не работает - ругается на эту строку
  });
  }

  render() {
      return(
          <div>
              <div>
                 {this.state.items.map((item) => (
                     <div key={item.strDrink} />
                     //вот тут если честно, не уверен что писать что бы вывелся масив
                 ))} 
              </div>
          </div>
      ) 
  }


}


export default About;
