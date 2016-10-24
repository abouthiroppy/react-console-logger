# react-console-logger

Display log.


![](./gif/log.gif)

## example
[example](./example)

```javascript
import {Logger, ConsoleLogger} from 'react-console-logger';

const myLogger = new Logger();

const root = () => (
  <div>
    <h1>react-console-logger</h1>
    <ConsoleLogger
      logger={myLogger}
    />
  </div>
);
```
