import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './CovidStats.css';

const CovidStats = () =>{
    const [record, setRecord] = useState({});
    useEffect(() => {
          axios.get('https://corona.lmao.ninja/v2/countries/india').then((res) => {
          setRecord(res.data);
        });
      }, []);
    return(
        <div className="stats-container">
            <h1 className="app-heading">Covid Tracker App</h1>
            <h2>Cases</h2>
            <div className="cases-flex-container">
                <div className="cases-flex-item">
                    <h4>Total Cases</h4>
                    {record.cases}
                </div>
                <div className="cases-flex-item">
                    <h4>Cases Per Million</h4>
                    {record.casesPerOneMillion}
                </div>
                <div className="cases-flex-item">
                    <h4>Cases Reported Today</h4>
                    {record.todayCases}
                </div>
            </div> 
            <h2>Recovered</h2>
            <div className="recovered-flex-container">
                <div className="recovered-flex-item">
                    <h4>Total Recovered</h4>
                    {record.recovered}
                </div>
                <div className="recovered-flex-item">
                    <h4>Recovered Per Million</h4>
                    {record.recoveredPerOneMillion}
                </div>
                <div className="recovered-flex-item">
                    <h4>Recovered Today</h4>
                    {record.todayRecovered}
                </div>
            </div>
            <h2>Deaths</h2>
            <div className="deaths-flex-container">
                <div className="deaths-flex-item">
                    <h4>Total Deaths</h4>
                    {record.deaths}
                </div>
                <div className="deaths-flex-item">
                    <h4>Deaths Per Million</h4>
                    {record.deathsPerOneMillion}
                </div>
                <div className="deaths-flex-item">
                    <h4>Deaths Reported Today</h4>
                    {record.todayDeaths}
                </div>
            </div>
            <h2>Active Cases</h2>
            <div className="active-flex-container">
                <div className="active-flex-item">
                    <h4>Total Active Cases</h4>
                    {record.active}
                </div>
                <div className="active-flex-item">
                    <h4>Active Cases Per Million</h4>
                    {record.activePerOneMillion}
                </div>
            </div>
            <h2>Tests</h2>
            <div className="tests-flex-container">
                <div className="tests-flex-item">
                    <h4>Total Tests</h4>
                    {record.tests}
                </div>
                <div className="tests-flex-item">
                    <h4>Tests Per Million</h4>
                    {record.testsPerOneMillion}
                </div>
            </div> 
            <div className="updated-at">{"updated at: " + new Date(record.updated)}</div>   
        </div>    
    );
}

export default CovidStats;