import React, {useEffect, useState} from 'react';
import './covid.css'

const Covid = () => {
    const [dt, setDt] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json()
            // if(actualData.length > 0) {
            //     setDt(actualData.statewise);
            // }
            console.log(actualData.statewise[0]);
            setDt(actualData.statewise[0]);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <ul>
                <section className="mainbod">
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>OUR </span> COUNTRY</p>
                                <p className="card_total card_small">India</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Total </span> Recovered</p>
                                <p className="card_total card_small">{dt.recovered}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Total </span> Deaths</p>
                                <p className="card_total card_small">{dt.deaths}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Active </span> Cases</p>
                                <p className="card_total card_small">{dt.active}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Delta </span> Confirmed</p>
                                <p className="card_total card_small">{dt.deltaconfirmed}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Time </span> Updated</p>
                                <p className="card_total card_small">{dt.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </section>
            </ul>
            {/*<UserData dt = {dt}/>*/}
        </>
    );
};

export default Covid;