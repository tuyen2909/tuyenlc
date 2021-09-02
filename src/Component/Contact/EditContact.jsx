import React, { Component } from 'react'
import { Consumer } from '../../context'
import FormGroupInput from '../layout/FormGroupInput'
import { UPDATE_CONTACT } from '../../context'
import axios from 'axios'


const REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_VALIDATE_PHONE = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/
export default class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }

    onChangeValue = (e) =>{
       this.setState(
           {
               [e.target.name]: e.target.value
           }
       )
       
    }


    onSubmit = async(dispatch,e)=>{
        e.preventDefault()
        const {name, email, phone} = this.state;
        const {id } = this.props.match.params
        if(name.trim() === ''){
            this.setState({error:{
                name: 'Name is required'
            }})
            return;
        }
        if(email.trim() === ''){
            this.setState({error:{
                email: 'Email is required'
            }})
            return;
        }
        if(!REGEX_VALIDATE_EMAIL.test(email)){
            this.setState({error:{
                email: 'Email is no validate'
            }})
            return;
        }
        if(phone.trim() === ''){
            this.setState({error:{
                phone: 'Phone is required'
            }})
            return;
        }
        if(!REGEX_VALIDATE_PHONE.test(phone)){
            this.setState({error:{
                phone: 'Phone is no validate'
            }})
            return;
        }

        let upContact = {
            // id: uuidv4(),
            name,
            email,
            phone
        }
        try{
            let res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContact)
            dispatch({
                type: UPDATE_CONTACT,
                payroll: res.data
            })
            this.setState({
                name: '',
                email: '',
                phone: '',
                error:{}
            })
            //điều hướng về trang chủ
            this.props.history.push('/')
        }catch(error){
            throw new Error('You have error ' + error);
        }
    }

    async componentDidMount(){
        const {id } = this.props.match.params
        let res =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        })
    }

    render() {
        const {name, email, phone,error} = this.state
        return(
            <Consumer>
                {
                    value=>{
                        const{dispatch} = value
                        return(
                            <div className='card mb-3'> 
                                <div className="card-header">Edit Contact</div>
                                <div className="card-body">
                                    <form action="" onSubmit = {this.onSubmit.bind(this,dispatch)}>
                                        <FormGroupInput 
                                        label = 'Name'
                                        name = 'name'
                                        type = 'text'
                                        placeholder = 'Enter Name...'
                                        value = {name}
                                        onChange = {this.onChangeValue.bind(this)}
                                        error = {error.name}
                                        />
                                        <FormGroupInput 
                                        label = 'Email'
                                        name = 'email'
                                        type = 'text'
                                        placeholder = 'Enter Email...'
                                        value = {email}
                                        onChange = {this.onChangeValue.bind(this)}
                                        error = {error.email}
                                        />
                                        <FormGroupInput 
                                        label = 'Phone'
                                        name = 'phone'
                                        type = 'text'
                                        placeholder = 'Enter Phone...'
                                        value = {phone}
                                        onChange = {this.onChangeValue.bind(this)}
                                        error = {error.phone}
                                        />
                                        <input type="submit" value='Add Contact' className="btn btn-dark btn-block" />
                                    </form>
                                </div>
                        </div>
                        )
                    }
                }
            </Consumer>
            
        )
    }
}
