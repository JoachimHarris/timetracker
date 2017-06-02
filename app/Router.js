import React from 'react';
import{ Scene, Router } from 'react-native-router-flux';

import FrontPage from './components/FrontPage/FrontPage.js';
import HomeMap from './components/Home/HomeMap/HomeMap.js';
import SchoolMap from './components/School/SchoolMap/SchoolMap.js';
import WorkMap from './components/Work/WorkMap/WorkMap.js';

const RouterComponent = () => {
    return  (
        <Router>
            <Scene key="frontpage" component={FrontPage} title="FrontPage" initial />
            <Scene key="homemap" component={HomeMap} title="Home Map" />
            <Scene key="schoolmap" component={SchoolMap} title="School Map" />
            <Scene key="workmap" component={WorkMap} title="Work Map" />
        </Router>
    );
};

export default RouterComponent;
