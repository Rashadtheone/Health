import React, { Component } from 'react';

class background extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          data:null,
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
            <div>
                
            </div>
        );
    }
}

export default background;
