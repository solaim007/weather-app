import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import './App.css';

function App() {
    const Weather = useWeather();
    
    useEffect(() => {
      Weather.fetchCurrentUserLocationData();

    }, [Weather]);
    return (
        <div className='app'>
            <h1> Weather Forecast </h1>
            <Input/>
            <Button onClick={Weather.fetchData} value="Search"/>
            <Card/>
            <Button value="Refresh"/>
        </div>
    );
}

export default App;
