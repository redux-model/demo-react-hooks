import React, { FunctionComponent } from 'react';
import Normal from './Normal';
import Request from './Request';
import Summary from './Summary';
import styles from './App.module.styl';

const App: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Normal />
      <Request />
      <Summary />
    </div>
  );
};

export default App;
