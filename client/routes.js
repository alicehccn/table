import React from 'react';
import { Route } from 'react-router';

import MainLayout from './components/layouts/mainLayout';
import HomePage from './components/pages/home';
// import InfoPage from './components/pages/info';
// import CreditsPage from './components/pages/credits';
import TableBlock from './components/pages/tableBlock';

export default (
  <Route>
    <Route component={MainLayout}>
      <Route path="/" component={HomePage} />
    </Route>
  </Route>
);
