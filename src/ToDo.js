import React, {Component} from 'react';

import './ToDo.css'
import ToDoItem from './components/ToDoItem'
import Logo from './assets/logo192.png'

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            // this is where the data goes
            list: [
                {
                    'todo': 'clean the house'
                },
                {
                    'todo': 'buy milk'
                }
            ],
            todo: ''
        };

    }
    createNewItem = () =>{
        this.setState(({list, todo})=>({
            list: [...list,
                {todo}
                ],
            todo: ''
        }))
    }

    handleKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.createNewItem();
            }
        }
    };

    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };

    deleteItem = (itemToDelete) =>{

        this.setState(({ list }) => ({
            list: list.filter((toDo, index) => index !== itemToDelete)
        }))
    }

    render() {
        return(
            <div>
            <h2>React To Do</h2>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">
                        {
                            this.state.list.map((item, key) =>{
                                console.log(item)
                                return <ToDoItem
                                    key={key}
                                    item={item.todo}
                                    deleteItem = {this.deleteItem.bind(this, key)}
                                />
                            })
                        }
                    </div>

                    <div className="ToDoItem">
                        <input className="ToDoItem-Text" type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                        <button className="ToDo-Add" onClick={this.createNewItem}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDo