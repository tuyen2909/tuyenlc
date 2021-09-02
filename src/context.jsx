import React, { Component } from 'react'
import axios from 'axios'

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

const Context = React.createContext();

let HandleContact = (action, state)=>{
    switch(action.type){
        case DELETE_CONTACT: 
            const {contacts} = state
            let newContact = contacts.filter(contact => contact.id !== action.payroll)
            return{
                ...state,
                contacts: newContact
            }

        case ADD_CONTACT:
            return{
                ...state,
                contacts:[
                    action.payroll,
                    ...state.contacts
                ]
            }
        
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map(contact =>
                            contact.id === action.payroll.id ? (contact = action.payroll): contact
                    )
                
            }

        default: return state
    }
}

export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => this.setState(state => HandleContact(action, state)),
        loading: false
    }

    async componentDidMount(){
        this.setState({loading:true})
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({contacts: res.data})
        this.setState({loading: false})
    }

    componentDidUpdate(){
        
    }

    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer