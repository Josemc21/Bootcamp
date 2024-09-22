import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const WarningNotUsed = () => {
    return <h1>Warning: Not used</h1>;
}

const ListOfClicks = ({ clicks }) => {
    return <p>{clicks.join(', ')}</p>;
}

/*const INITIAL_COUNTER_STATE = {
    left: 0 //2,
    right: 0 //4,
    msg: 'Message from state'
};*/


const App = () => {
    //const [left, setLeft] = useState(0);
    //const [right, setRight] = useState(0);

    //const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        /*const newCountersState = {
            ...counters,
            left: counters.left + 1
        }

        setCounters(newCountersState);*/
        setClicks(prevClicks => [...prevClicks, 'L']);
    };

    const handleClickRight = () => {
        /*setCounters({
            ...counters,
            right: counters.right + 1
        });*/
        setClicks(prevClicks => [...prevClicks, 'R']);
    };

    const handReset = () => {
        //setCounters(INITIAL_COUNTER_STATE);
        setClicks([]);
    }

    const left = clicks.filter(click => click === 'L');
    const right = clicks.filter(click => click === 'R');

    return (
        <div>
            {left.length /*counters.left*/}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {right.length /*counters.right*/}
            <p>
                <button onClick={handReset}>reset</button>
            </p>
            <p>Total clicks: {clicks.length}</p>
            {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
        </div>
    );
};

root.render(<App />);