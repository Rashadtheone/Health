import React, { Component } from 'react';
import './App.css';
import { Card,CardTitle,Button, } from 'reactstrap';
 import { NavItem, Navbar,Modal } from 'react-materialize'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data:null,
      value: 'Search',
      modal: false
    }
    this.getData()
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A search was submitted' + this.state.value);
    event.preventDefault();
  }



  

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div className="App">
      <nav>
<Navbar brand='FindYourHealth' left>
<form onSubmit={this.handleSubmit}>
  <NavItem onClick={() => this.handleReload}>
          
          <input id='searchBox'value={this.state.value} onChange={this.handleChange} />
          </NavItem>
    <NavItem>
        <input id='submitBth' type="submit" value="Submit" />
        </NavItem>
      </form>
  
</Navbar>
</nav>
        <div className="App">
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
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
