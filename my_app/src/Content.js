import React, { Component } from 'react';
import graph from './graph.png';


class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
          image : []
        };
      }

    
    render() { 
        return (
            <div className='row' style={{display:'flex'}}>
                <div className='column'>
                <img src='http://127.0.0.1:5000/status-tickets'/>
                <img src='http://localhost:5000/priority'/>
                <img src='http://localhost:5000/2020-tickets'/>
                <img src='http://localhost:5000/2019-tickets'/>
                <img src='http://localhost:5000/specialist'/>
                <img src='http://localhost:5000/categories'/>
                <img src='http://localhost:5000/comparison2020-2019' />
                </div> 
            </div>
        );
    }
}
 
export default Content ;