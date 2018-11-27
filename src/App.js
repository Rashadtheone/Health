import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:null,
    }
    this.getData()
  }
  getData() 
  {
    let data = fetch('https://www.healthcare.gov/api/index.json')
    .then((res) => {
      res.json().then((res)=>{
        console.log(res)
        this.setState({data: res})
      })
    } )
  }

  render() {
    return (
      <div className="App">

        <body>
          {
            this.state.data ?
            this.state.data.map((item) =>
            <h3>{item.title}</h3>
            )
          :
          <h3>wait..... data is fetching</h3>
          }
        </body>
      </div>
    );
  }
}

export default App;
