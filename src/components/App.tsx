import { hot } from 'react-hot-loader/root';
import React, { FunctionComponent } from 'react';
import Normal from './Normal';
import Request from './Request';
import Summary from './Summary';

const App: FunctionComponent = () => {
  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <Normal />
      <Request />
      <Summary />
    </div>
  );
};

export default hot(App);
