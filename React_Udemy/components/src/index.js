import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard author="Sam" timeAgo="Today at 4:45 PM">
            </ApprovalCard>
            <ApprovalCard author="Alex" timeAgo="Today at 2:00 AM">
            </ApprovalCard>
            <ApprovalCard author="John" timeAgo="Yesterday at 5:00 PM">
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
