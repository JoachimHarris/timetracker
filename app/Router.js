import React from 'react';
import{ Scene, Router } from 'react-native-router-flux';

import FrontPage from './components/FrontPage/FrontPage.js';
import HomeMap from './components/Home/HomeMap/HomeMap.js';
import SchoolMap from './components/School/SchoolMap/SchoolMap.js';
import WorkMap from './components/Work/WorkMap/WorkMap.js';
import FrontPageFooter from './components/FrontPageFooter/FrontPageFooter.js';
import UserInfo from './components/FrontPageFooter/FrontPageFooterComponents/UserInfo/UserInfo.js';
import TotalTime from './components/FrontPageFooter/FrontPageFooterComponents/TotalTime/TotalTime.js';
import CalendarDays from './components/FrontPageFooter/FrontPageFooterComponents/CalendarDays/CalendarDays.js';
import BookmarkPlaces from './components/FrontPageFooter/FrontPageFooterComponents/BookmarkPlaces/BookmarkPlaces.js';
import AddCustom from './components/AddCustom/AddCustom.js';
import AddCustomPage from './components/AddCustom/AddCustomPage/AddCustomPage.js';

const RouterComponent = () => {
    return  (
        <Router>
            <Scene key="frontpage" component={FrontPage} title="FrontPage" initial />
            <Scene key="homemap" component={HomeMap} title="Home Map" />
            <Scene key="schoolmap" component={SchoolMap} title="School Map" />
            <Scene key="workmap" component={WorkMap} title="Work Map" />

        {/* Routes for The footer on the Frontpage component */}
            <Scene key="userinfo" component={UserInfo} title="User Info" />
            <Scene key="totaltime" component={TotalTime} title="Total time spend" />
            <Scene key="calendardays" component={CalendarDays} title="Calender Day" />
            <Scene key="bookmarkplaces" component={BookmarkPlaces} title="Bookmark Places" />
            <Scene key="addcustompage" component={AddCustomPage} title="Add Custom Place" />
        </Router>
    );
};

export default RouterComponent;
