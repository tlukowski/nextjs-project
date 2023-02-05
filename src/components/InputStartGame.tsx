import Router from 'next/router';
import { useState } from "react";
import styles from '@/styles/InputStartGame.module.scss';

export const InputStartGame = () =>{    
    const [val, setVal] = useState('');
    const click = () => {
        if(val){
            Router.push({
                pathname: '/kategorie',
                query: {nick: val}
            })
        }        
    }
    const change = (e: any) => {
        setVal(e.target.value);
    }
    return(
        <div className={styles.intro}>
            <h2>Jak masz na imię</h2>
            <div className={styles.border}>
            <input className={styles.name} onChange={change} value={val} type="text" maxLength={10}></input>
            </div>
            <button onClick={click}>Stwórz grę</button>
        </div>
    )
}