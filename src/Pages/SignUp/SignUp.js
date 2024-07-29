import React from 'react';
import images from './images';
import * as styles from './styles.module.css';

//this is where i left off, next up is the text and form
function SignUp(){

    return(
        <main className={styles.container}>
            <img className={styles.background} src={images['pattern']}/>
        </main>
    )
}

export default SignUp;