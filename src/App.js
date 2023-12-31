import React from 'react';
import Covid from "./components/covid";
import './App.css'
const App = () => {
    return (
        <>
            <h3 align='center'><div className='live'> 🔴LIVE</div></h3>
            <h1 align='center'>COVID-19 STATUS TRACKER</h1>
            <Covid/>
            <footer>PS: This site refreshes automatically after every 15 seconds.</footer>
        </>
    );
};

export default App;