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
  <NavItem onClick={() => console.log('test click')}><Input validate defaultValue='search' /></NavItem>
</Navbar>
</nav>
        <body>
          {
            this.state.data ?
            this.state.data.map((item) =>
          
          <Card body>
            <CardTitle>{item.title}</CardTitle>
            
            <Modal
  header={item.title}
  fixedFooter
  trigger={<Button>More Info</Button>}>
            <h1>Description</h1>
              <p>{item.bite}</p>
              <a href={"https://www.healthcare.gov/"+ item.url}>{item.title}</a>
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
