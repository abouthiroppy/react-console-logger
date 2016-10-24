import React from 'react';
import ReactDOM from 'react-dom';
import {Logger, ConsoleLogger} from '../lib';

const myLogger = new Logger();

const root = () => (
  <div>
    <h1>react-console-logger</h1>
    <ConsoleLogger
      logger={myLogger}
      style={{
        margin: 'auto',
        lineHeight: 1.5
      }}
    />
  </div>
);

ReactDOM.render(
  root(),
  document.getElementById('root')
);

setInterval(() => {
  const index = Math.floor(Math.random()*(4 - 0) + 0);

  switch (index) {
    case 0:
      return myLogger.log('log:)');
    case 1:
      return myLogger.info('info:)');
    case 2:
      return myLogger.warn('warn:)');
    case 3:
      return myLogger.error('error;(');
  }
}, 2000);
