// "use strict";


const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Shweta',
    skill: 'mknows how to play black jack',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Lambu_atta',
    skill: 'Awesome Poker player',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Name: {this.props.name}</h2>
        <img src={this.props.imgUrl} />
        <h2>Skill: {this.props.skill} </h2>
      </div>
    );
  }
}


// class TradingCardContainer extends React.Component {
//   render(){
//     const cards_lst = [];
//     for (const card of tradingCardData){
//       cards_lst.push(
//       <TradingCard
//       name = {card.name}
//       skill = {card.skill}
//       imgUrl ={card.imgUrl}
//       />
//       );
//     }
 

//   return (
//     <div> {cards_lst} </div>
//     );
//   }
// }
class TradingCardContainer extends React.Component {
  render() {
    const tradingCards = [];

    for (const currentCard of tradingCardData) {
      tradingCards.push(
        <TradingCard
          name={currentCard.name}
          skill={currentCard.skill}
          imgUrl={currentCard.imgUrl}
        />
      );
    }

    return (
      <div>
        {tradingCards}
      </div>
    );
  }
}

ReactDOM.render(
<TradingCardContainer/>,
document.querySelector('#container'))

