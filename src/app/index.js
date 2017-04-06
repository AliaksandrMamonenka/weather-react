import React from 'react';
import './style.less';

import Header from './../components/header';
import Navigation from './../components/navigation';
import SingleCityPage from './../pages/single-city';

class App extends React.Component {
    render() {
        return (
            <div className="weather-app">
                <div className="weather-app_bg-image">.</div>
                <div className="weather-app_main-content-wrapper">
                    <Header />
                    <div className="weather-app_main-content">
                        <Navigation />
                        <SingleCityPage />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
