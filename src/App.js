import React, { Component } from 'react';
import './App.css';
import { Card,CardTitle,CardText,Input,Button, Modal, ModalHeader, ModalBody, ModalFooter }
 from 'reactstrap';
 import { NavItem, Navbar } from 'react-materialize'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:null,
      isOpen: false,
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
      modal: !this.state.modal
    });
  }
  
  searchData() {
  //  create functionality here
  }

  

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div className="App">
      <nav>
<Navbar brand='FindYourHealth' left>
  <NavItem onClick={() => console.log('test click')}> About </NavItem>
  <NavItem onClick={() => console.log('test click')}><Input label="First Name" validate defaultValue='Alvin' /></NavItem>
  {/* need to setup search of query that has been preformed. the styling issue with the searchbar sitting to high. */}
</Navbar>
</nav>
        <body>
          {
            this.state.data ?
            this.state.data.map((item) =>
          
          <Card body>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.bite}</CardText>
            {/* need to implement onclick function for button to display rest of the information recived. */}
            <Button onClick={this.toggle}>{this.props.buttonLabel}More Info</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
            <ModalBody>
                ----
                ---
            </ModalBody>
          < ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
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
