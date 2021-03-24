import React, { FunctionComponent, useCallback } from 'react';
import { counterModel } from '../models/CounterModel';
import styles from './Normal.module.scss';

const Normal: FunctionComponent = () => {
  const count = counterModel.useData((data) => data.amount);

  const handleClick = useCallback(() => {
    counterModel.increase();
  }, []);

  const handleReset = useCallback(() => {
    counterModel.reset();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3>Normal Effect:</h3>
      <p>You clicked <span style={{ fontSize: 18, color: '#f00' }}>{count}</span> times.</p>
      <div>
        <button onClick={handleClick} style={{ width: 100, height: 30 }}>Click Button</button>
        &nbsp;&nbsp;
        <button onClick={handleReset} style={{ width: 80, height: 30 }}>Reset</button>
      </div>
    </div>
  );
};

export default Normal;
