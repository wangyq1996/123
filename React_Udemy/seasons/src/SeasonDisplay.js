import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
    let output;

    if (month > 3 && month < 10) output = 'summer';
    else output = 'winter';

    if (lat < 0) output = 'summer' ? 'winter' : 'summer';

    return output;
};

// Good way to config
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun',
    },
    winter: {
        text: "Burr, it's chilly",
        iconName: 'snowflake',
    },
};

const SeasonDisplay = (props) => {
    console.log(props);
    //{ lat: xxx }

    const season = getSeason(props.lat, new Date().getMonth() + 1);

    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} />
        </div>
    );
};

export default SeasonDisplay;
