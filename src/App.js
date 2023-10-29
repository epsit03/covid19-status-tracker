import React from 'react';
import Covid from "./components/covid";
import './App.css'
const App = () => {
    return (
        <>
            <h3 align='center'><div className='live'> 🔴LIVE</div></h3>
            <h1 align='center'>COVID-19 STATUS TRACKER</h1>
            <Covid/>
        </>
    );
};

export default App;