import React from 'react';
import{ Scene, Router } from 'react-native-router-flux';

import FrontPage from './components/FrontPage/FrontPage.js';
import About from './components/About/About.js';

const RouterComponent = () => {
    return  (
        <Router>
            <Scene key="frontpage" component={FrontPage} title="FrontPage" initial={true} />
            <Scene key="about" component={About} title="About Page" />
        </Router>
    );
};

export default RouterComponent;
