import React, { FunctionComponent } from 'react';
import { summaryModel } from '../models/SummaryModel';
import styles from './Summary.css';

const Summary: FunctionComponent = () => {
  const { times, lastTime } = summaryModel.useData();

  return (
    <div className={styles.wrapper}>
      <h3>Summary:</h3>
      <p>You have clicked buttons <span style={{ fontSize: 20, color: '#f00' }}>{times}</span> times.</p>
      <p>Last click time: </p>
      <p>{lastTime || '--'}</p>
    </div>
  );
};

export default Summary;
