"use strict";

class Homepage extends React.Component {
  render() {
    return (<div>
      <p> Welcome Friend! </p>
      
        <a href="/cards"> click to view card </a>
        <img src = "/static/img/balloonicorn.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />,
 document.querySelector('#app'));
