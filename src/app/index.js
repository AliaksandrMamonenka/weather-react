import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style.less';

import Header from './../components/header';
import Navigation from './../components/navigation';

import SingleCityPage from './../pages/single-city';
import ListOfCities from './../pages/list-of-cities';

class App extends React.Component {
    render() {
        return (
            <div className="weather-app">
                <div className="weather-app_bg-image">.</div>
                <div className="weather-app_main-content-wrapper">
                    <Header title="Weather checker" />
                    <div className="weather-app_main-content">

                        <Router>
                           <div>
                               <Navigation />
                              <Switch>
                                  <Route exact path="/" component={SingleCityPage} />
                                  <Route path="/cities-list" component={ListOfCities} />
                                  <Route  render={() => <h1>Page Not Found</h1>} />
                              </Switch>
                           </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
