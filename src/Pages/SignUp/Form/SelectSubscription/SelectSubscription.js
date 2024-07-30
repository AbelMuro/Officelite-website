import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function SelectSubscription() {
    const [open, setOpen] = useState(false);
    const [subscription, setSubscription] = useState('Basic Pack');
    const [price, setPrice] = useState('Free');

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSub = (sub, price) => {
        setSubscription(sub);
        setPrice(price);
    }

    return(
        <fieldset className={styles.container} onClick={handleOpen}>
            <strong>
                {subscription}
            </strong>
            <em>
                {price}
            </em>
            <img className={styles.arrow} src={icons['arrow']} style={open ? {transform: 'rotate(180deg)'} : {}}/>
            {open && <div className={styles.dropdown}>
                <button onClick={() => {handleSub('Basic Pack', 'Free')}}>
                    Basic Pack <span>Free</span>
                    {subscription === 'Basic Pack' && <img className={styles.check} src={icons['check']}/>}
                </button>
                <button onClick={() => {handleSub('Pro Pack', '$9.99')}}>
                    Pro Pack <span>$9.99</span>
                    {subscription === 'Pro Pack' && <img className={styles.check} src={icons['check']}/>}
                </button>
                <button onClick={() => {handleSub('Ultimate Pack', '$19.99')}}>
                    Ultimate Pack <span>$19.99</span>
                    {subscription === 'Ultimate Pack' && <img className={styles.check} src={icons['check']}/>}
                </button>
            </div>}
            <input type='hidden' value={subscription} name='subscription'/>
            <input type='hidden' value={price} name='price'/>
        </fieldset>
    )
}

export default SelectSubscription;