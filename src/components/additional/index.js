import React from 'react';

import './style.less';

class AditionalInfo extends React.Component {
    render() {
        return (
            <div className="additional-info_wrapper">

                <div className="additional-info_wind-direction">
                    ff
                </div>
                <ul className="additional-info_stats">
                    <li className="wind"><strong>9 км/ч</strong></li>
                    <li>Влажность: <strong>93%</strong></li>
                    <li>Давление: <strong>1006.00 мб </strong></li>
                    <li>УФ-индекс: <strong>1</strong></li>
                    <li>Облачность: <strong>75%</strong></li>
                    <li>Нижняя граница: <strong>457 m</strong></li>
                    <li>Точка росы: <strong>5°&nbsp;C</strong></li>
                    <li>Видимость: <strong>16 км</strong></li>
                </ul>
            </div>
        );
    };
}

export default AditionalInfo;