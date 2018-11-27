import React, { Component } from 'react';
import './App.css';
import { Card, 
  Button, 
  CardTitle, 
  CardText,
   Row, 
  Col}
 from 'reactstrap';
 import {NavItem, Navbar, Icon} from 'react-materialize'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:null,
      isOpen: false,
    }
    this.getData()
  }
  
  getData() 
  {
    let data = fetch(' https://www.healthcare.gov/api/index.json')
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
<Navbar brand='FindYourHealth' right>
  <NavItem onClick={() => console.log('test click')}> About </NavItem>
  <NavItem href='components.html'> Contact </NavItem>
</Navbar>
        <body>
          {
            this.state.data ?
            this.state.data.map((item) =>
          
          <Card body>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.bite}</CardText>
            <button>Click me for more info</button>
          </Card>
            )
          :
          <li>wait..... data is fetching</li>
          }
        </body>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
