import React from 'react';
import styles from '../styles/table.module.css';

const Table = (props) => {
    return <table className={styles.result}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {props.completeData.map(each => {
                return <tr>
                    <td>{each.year}</td>
                    <td>{each.totalSavingsYet}</td>
                    <td>{each.interestPerYear}</td>
                    <td>{each.totalInterestYet}</td>
                    <td>{each.investCapitalYet}</td>
                </tr>
            })}
        </tbody>
    </table>;
}

export default Table;