import React, { Component } from 'react';
import './App.css';
import { Card,CardTitle,CardText,Input,Button} from 'reactstrap';
 import { NavItem, Navbar,Modal } from 'react-materialize'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:null,
      query: [],
      modal: false
    }
    this.getData()
    this.toggle = this.toggle.bind(this);
 
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

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  
  searchData() {

  }

  

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div className="App">
      <nav>
<Navbar brand='FindYourHealth' left>
  <NavItem onClick={() => console.log('test click')}> About </NavItem>
  <NavItem onClick={() => console.log('test click')}><Input label="First Name" validate defaultValue='Alvin' /></NavItem>
</Navbar>
</nav>
        <body>
          {
            this.state.data ?
            this.state.data.map((item) =>
          
          <Card body>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.bite}</CardText>
            
            <Modal
  header='Modal Header'
  fixedFooter
  trigger={<Button>More Info</Button>}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</Modal>
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
