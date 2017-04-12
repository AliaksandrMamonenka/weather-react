import React from 'react';

import './style.less';

class MainlInfo extends React.Component {
    render() {

        return (
            <div className="forecast">
                <div className="icon i-13-xl">{this.props.mainInfoData.toString()}</div>
                <div className="info">
                    <div className="temp">
                        <span className="large-temp">6°</span>
                        <span className="small-temp"><em>RealFeel®</em> 7°</span>
                    </div>
                    <span className="cond">Небольшой дождь</span>
                </div>
            </div>
        );
    };
}

export default MainlInfo;