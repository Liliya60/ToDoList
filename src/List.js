import { Component } from 'react';
import itemList from './itemList.jpg';


export class List extends Component {
    state = {
        userInput: "",
        list: [ ]
        }

    onChangeEvent(event) {
        this.setState ({userInput: event});
    }
    
    addItem(input){
        if(input === ''){
            alert("Please enter an item")
        }
        else{
            let listArray = this.state.list;
        listArray.push(input);
        this.setState({list: listArray, userInput: ''})
        }
        
    }

    deleteItem(){
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle ('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text" 
                placeholder="What do you want to do?"
                onChange= {(event) => {this.onChangeEvent(event.target.value)}}
                value={this.state.userInput} />
            </div>
            <div className='container'>
                <button className="add" onClick = {() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            
            <ul>
                {this.state.list.map((item, index) => (
                <li onClick = {this.crossedWord} key={index}><img src={itemList} width="40px"></img>{item}</li>))}
            </ul>
            <div className='container'>
            <button className="delete" onClick={() => this.deleteItem()}>Delete</button>
           </div></form>
            </div>
        )
    }
}