import React, {Component} from 'react'
import ReactDom from 'react-dom'



class Nav extends Component{


    constructor(props){
        super(props);
        this.state = {
          tickets : []
        };
      }

    componentDidMount(){
        fetch('http://127.0.0.1:5000/ticket')
    .then(res => res.json())
    .then(json => {
      this.setState({
        tickets : json
      })
    })

    
    }

    // async componentDidMount(){
    //     const response =  await fetch('http://127.0.0.1:5000/ticket');
    //     const data = response.json;
    //     this.setState({tickets:data[0]});
    // }

    styles = {
        fontSize : 50, 
        textAlign: 'left'
    };

     font = {
        color:'white'
    };


    render(){
        var {tickets} = this.state
        
        
        return(
            <nav style = {{textAlign:'center'}} className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <h1 style={this.styles} className="badge badge-primary">Dashboard<br/></h1>
                <ul>
                    {tickets.map(item => {
                        return(
                            <div style= {{marginLeft:0}}>
                            <h6 style={this.font}>Total tickets: <span className="badge badge-info">{item.total_tickets}</span></h6>
                            <h6 style={this.font}>Open tickets: <span className="badge badge-warning">{item.open}</span></h6>
                            <h6 style={this.font}>Closed tickets: <span className="badge badge-success">{item.closed}</span></h6>
                            </div>
                        );
                    })}
                </ul>
                <div style={{marginLeft: 600}}>
                    <a href='http://localhost:5000/get-pdf'><button className='btn btn-info'>Download Overview</button></a>
                </div>

            </nav>
        )
    }

}

export default Nav