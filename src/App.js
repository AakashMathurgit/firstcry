import React, { Component } from 'react';
import { robots } from './robots';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import { render } from '@testing-library/react';
import Scroll from './Scroll'
import './App.css'
class App extends Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            srchval: '',
            filteredlist : [],
        }
    }  
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
    onSearchChange = (event) => {
        this.setState({srchval : event.target.value });
        
        
        this.setState({filteredlist : this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.srchval.toLowerCase());
        })})
        
    }
    render(){
        return(    
            <div className='tc'>
            <h1> Robo header</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll><Cardlist robots={this.state.filteredlist} /></Scroll>
            
            </div>
            );
    };
    
}

export default App; 