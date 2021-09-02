import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './contact.scss'
import { Consumer } from '../../context'
import { DELETE_CONTACT } from '../../context'
import axios from 'axios'
import { EditOutlined } from '@ant-design/icons';
//router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class Contact extends Component {
    state = {
        isShowContact: false,
        loadingInternal: false
    }

    onShowContact = () =>{
        this.setState({
            isShowContact: !this.state.isShowContact
        })
    }

    onDeleteContact = async(id,dispatch) =>{
        this.setState({loadingInternal:true})
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        this.setState({loadingInternal:false})
        dispatch(
        {
            type: DELETE_CONTACT,
            payroll:id
        })
           
    }

    render() {
        const {id, name, email, phone} = this.props.contact
        const {isShowContact,loadingInternal} = this.state
        return (
            <Consumer>
                {
                    value=>{
                        const {dispatch} = value
                        return(
                            <React.Fragment>
                                {
                                    loadingInternal && <div className="loader"></div>
                                }
                                {
                                    !loadingInternal && (<div className='container-card card card-body mb-3' >
                                        <h3>
                                            {name}
                                            <i onClick = {this.onShowContact} className='fas fa-sort-down customItemPlus ' />
                                            <i onClick = {this.onDeleteContact.bind(this,id,dispatch)} className='fas fa-times customItemTimes ' />
                                        </h3>
                                        <Link to={`/editcontact/${id}`} className='nav-link'>
                                            <EditOutlined />    
                                        </Link> 
                                        {   
                                            isShowContact &&
                                            <ul className='list-group'>
                                                <li className='list-group-item'>email: {email}</li>
                                                <li className='list-group-item'>phone: {phone}</li>
                                                <li className='list-group-item'>
                                                    <Link to={`/detail/${id}`} className='nav-link'>Click me!</Link>
                                                </li>
                                            </ul>
                                        }
                                    </div>)
                                }
                            </React.Fragment>
                        )
                    }
                }
            </Consumer>
        )
    }
}
