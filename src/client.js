import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import { store } from 'app/reducer';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import 'bootstrap/dist/css/bootstrap.css';

import { App } from 'app';
import { List as PinListContainer } from 'pin/containers/list';
import { Detail as PinDetailContainer } from 'pin/containers/detail';
import { Edit as PinEditContainer } from 'pin/containers/edit';
import { Create as PinCreateContainer } from 'pin/containers/create';

const routes = (
  <div>
    <Provider store={store}>
      <ReduxRouter>
        <Route path='/' component={App}>
          <IndexRoute component={PinListContainer} />
          <Route path='new' component={PinCreateContainer} />
          <Route path=':id' component={PinDetailContainer} />
          <Route path=':id/edit' component={PinEditContainer} />
        </Route>
      </ReduxRouter>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
);

render(routes, document.getElementById('root'));
