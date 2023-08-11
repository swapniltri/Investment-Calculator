import React, { useState } from 'react';
import styles from '../styles/form.module.css';

const Form = (props) => {

    const [currSaving, setCurrSaving] = useState('');
    const [yearlySaving, setYearlySaving] = useState('');
    const [expInterest, setExpectedInterest] = useState('');
    const [invDuration, setInvDuration] = useState('');

    const currSavingHandler = (event) => {
        setCurrSaving(event.target.value);
    }

    const yearlySavingHandler = (event) => {
        setYearlySaving(event.target.value);
    }

    const expInterestHandler = (event) => {
        setExpectedInterest(event.target.value);
    }

    const invDurationHandler = (event) => {
        setInvDuration(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const investmentData = {
            curr: currSaving,
            yearly: yearlySaving,
            interest: expInterest,
            duration: invDuration
        }
        props.calculateHandlerUtil(investmentData);
    }

    const resetHandler = () => {
        setCurrSaving('');
        setYearlySaving('');
        setExpectedInterest('');
        setInvDuration('');
        props.resetHandlerUtil();
    }

    return <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input value={currSaving} onChange={currSavingHandler} type="number" id="current-savings" />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input value={yearlySaving} onChange={yearlySavingHandler} type="number" id="yearly-contribution" />
            </p>
        </div>
        <div className={styles['input-group']}>
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input value={expInterest} onChange={expInterestHandler} type="number" id="expected-return" />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input value={invDuration} onChange={invDurationHandler} type="number" id="duration" />
            </p>
        </div>
        <p className={styles.actions}>
            <button onClick={resetHandler} type="button" className={styles.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={styles.button}>
                Calculate
            </button>
        </p>
    </form>;
}

export default Form;