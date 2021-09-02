import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from 'classnames'

export default class FormGroupInput extends Component {
    render() {
        const {label, name, type, placeholder, value, onChange, error} = this.props
        return (
            <div className="form-group ">
                <label htmlFor={name}>{label}</label>
                <input 
                    name= {name}
                    type= {type}
                    className = {classnames("form-control form-control-lg", {'is-invalid': error})}
                    placeholder= {placeholder}
                    value = {value}
                    onChange = {onChange}
                />
                <div>{error}</div>
            </div>
)
    }
}


FormGroupInput.defaultValue = {
    type: 'text'
}