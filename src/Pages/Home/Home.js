import React, {useEffect} from 'react';
import Introduction from './Introduction';
import SubscriptionOptions from './SubscriptionOptions';
import * as styles from  './styles.module.css';

function Home() {

    useEffect(() => {
        const body = document.body;
        body.classList.add(styles.body)

        return () => {
            body.classList.remove(styles.body);
        }
    }, [])

    return(
        <main>
            <Introduction/>
            <SubscriptionOptions/>
        </main>
    )
}

export default Home;