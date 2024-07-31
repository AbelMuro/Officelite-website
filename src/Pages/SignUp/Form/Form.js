import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import SelectSubscription from './SelectSubscription';
import EnterPhone from './EnterPhone';
import EnterCompany from './EnterCompany';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';

function Form() {
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();        
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const sub = e.target.elements.subscription.value;
        const price = e.target.elements.price.value;
        const phone = e.target.elements.phone.value;
        const company = e.target.elements.company.value;
        console.log(name, email, sub, price, phone, company);
        alert('Email Subscribed');
        navigate('/')
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}> 
            <EnterName/>
            <EnterEmail/>
            <SelectSubscription/>
            <EnterPhone/>
            <EnterCompany/>
            <button className={styles.submit}>
                Get on the list
            </button>
        </form>
    )
}

export default Form;