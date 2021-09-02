import React, { Component } from 'react'
import { Consumer } from '../../context'
import Contact from './Contact'
import '../../App.css'

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {
                    value =>{
                        const {contacts, loading} = value
                        return(
                            <React.Fragment>
                                {
                                    loading && <div className="loader"></div>
                                }
                                {
                                    !loading && (
                                        <React.Fragment>
                                            <h1>
                                                <span className='text-danger'>Contact List</span>
                                            </h1>
                                            {
                                                contacts.length > 0 && contacts.map( contact => <Contact
                                                                        key = {contact.id}
                                                                        contact = {contact}
                                                                        />
                                                )
                                                
                                            }
                                        </React.Fragment>
                                    )
                                }
                                {
                                    contacts.length === 0 && 
                                    <p>
                                        <span className='text-danger d-flex justify-content-center'>
                                            <i className="fas fa-exclamation py-1 px-2" />
                                            Not list data
                                        </span>
                                    </p>
                                }
                            </React.Fragment>
                        )
                    }
                }
            </Consumer>
        )
    }
}
