import React from 'react';

import './style.less';

import AdditionalInfo from './../../components/additional'
import MainInfo from './../../components/main'
import Map from './../../components/map'

class SingleCityPage extends React.Component {
    render() {
        return (
            <div className="single-city_wrapper">
                <div className="single-city_content-wrapper">
                    <div className="single-city_content">
                        <div className="single-city_content-main">
                            <MainInfo />
                        </div>
                        <div className="single-city_content-additional">
                            <AdditionalInfo />
                        </div>
                    </div>
                    <div className="single-city_content">
                        <Map />
                    </div>
                </div>
            </div>
        );
    };
}

export default SingleCityPage;