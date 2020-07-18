import React, { FunctionComponent, useCallback } from 'react';
import { npmInfoModel } from '../models/NpmInfoModel';
import styles from './Request.less';
import { Model } from '@redux-model/react';

const Request: FunctionComponent = () => {
  const npmInfo = npmInfoModel.useData();

  const loading = Model.useLoading(
    npmInfoModel.manage.useLoading(),
    npmInfoModel.combo.useLoading(),
  );

  const handleClick = useCallback(() => {
    npmInfoModel.manage('react-native')
      .then(({ response }) => {
        console.log(`Wow, You got response from ${response._id}`);
      });
  }, []);

  const handleClick1 = useCallback(() => {
    npmInfoModel.manage('node');
  }, []);

  const handleClick2 = useCallback(() => {
    npmInfoModel.combo('not-existed-package').catch((e) => {
      alert(e.message);
    });
  }, []);

  const handleReset = useCallback(() => {
    npmInfoModel.reset();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 style={{ textAlign: 'center', width: '100%' }}>Fetch Effect:</h3>
      <p>Package: {npmInfo._id || '--'}</p>
      <p>License: {npmInfo.license || '--'}</p>
      <p>Homepage: {npmInfo.homepage || '--'}</p>
      <div>
        <button
          onClick={handleClick}
          style={{ width: 120, height: 30 }}
        >
          React-native info
        </button>
        &nbsp;&nbsp;
        <button
          onClick={handleClick1}
          style={{ width: 100, height: 30 }}
        >
          Node.js info
        </button>
        &nbsp;&nbsp;
        <button
          onClick={handleClick2}
          style={{ width: 100, height: 30 }}
        >
          Click and fail
        </button>
        &nbsp;&nbsp;
        <button
          onClick={handleReset}
          style={{ width: 80, height: 30 }}
        >
          Reset
        </button>
        &nbsp;&nbsp;
        <br />
        {loading ? <b style={{ color: 'green' }}>I am fetching...</b> : <span>&nbsp;</span> }
      </div>
    </div>
  );
};

export default Request;
