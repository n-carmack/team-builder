import React from "react";

const Form = (props) => {

    const handleChange = event =>{
        const {name, value} = event.target;
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return(
    <form onSubmit={handleSubmit}>
        <label>Name
            <input placeholder="type name" value={props.name} name="name" onChange={handleChange} />
        </label>
        <label>Email
            <input placeholder="type email" value={props.values.email} name="email" onChange={handleChange} />
        </label>
        <label>Role
            <input placeholder="type role" value={props.values.role} name="role" onChange={handleChange} />
        </label>
        <input type="submit" value="Add Teammember"/>
    </form>
    )
}

export default Form;