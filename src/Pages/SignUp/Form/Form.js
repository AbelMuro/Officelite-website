import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import SelectSubscription from './SelectSubscription';
import EnterPhone from './EnterPhone';
import EnterCompany from './EnterCompany';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
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