import './home.css'
function Home(){
    const buttonClick=async()=>{
        let api_key="Your Key here";

        let value=document.getElementById('search-input').value;
        document.getElementById('search-input').value=""

        let rainy=	require('../gifs/rainy.gif');
        let cloudy=require('../gifs/cloudy.gif');
        let sunny=require('../gifs/sunny.gif');
        let stormy=require('../gifs/stormy.gif');
        let windy=require('../gifs/windy.gif');
        let snow=require('../gifs/snow.gif');
        let dust=require('../gifs/dust.gif');

        // const element= document.getElementById('search-input').value;
        if(value===""){
            return 0;
        }
        let data
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${api_key}`;
            let response= await fetch(url);
            data=await response.json();
            let d=data.weather[0].main;
        }
        catch(e){
            window.location.reload();

        }

        if(data.weather[0].main.toLowerCase()==="rain"){
            document.getElementById('weather-back').src=rainy;
        }
        else if(data.weather[0].main.toLowerCase()==="clear"){
            document.getElementById('weather-back').src=sunny;
        }
        else if(data.weather[0].main.toLowerCase()==="clouds"){
            document.getElementById('weather-back').src=cloudy;
        }
        else if(data.weather[0].main.toLowerCase()==="thunderstorm"){
            document.getElementById('weather-back').src=stormy;
        }
        else if(data.weather[0].main.toLowerCase()==="mist"){
            document.getElementById('weather-back').src=windy;
        }
        else if(data.weather[0].main.toLowerCase()==="snow"){
            document.getElementById('weather-back').src=snow;
        }
        else if(data.weather[0].main.toLowerCase()==="dust"){
            document.getElementById('weather-back').src=dust;
        }
        else if(data.weather[0].main.toLowerCase()==="haze"){
            document.getElementById('weather-back').src=stormy;
        }
        else if(data.weather[0].main.toLowerCase()==="drizzle"){
            document.getElementById('weather-back').src=dust;
        }
        else{
            document.getElementById('weather-back').src=require('../gifs/opening.gif')
        }

        try{
            document.getElementById('place').textContent=value;
            document.getElementById('temperature').textContent=data.main.temp+"°C";
            document.getElementById('wmd1').textContent="Weather: "+data.weather[0].main;
            document.getElementById('wmd2').textContent="Wind Speed: "+data.wind.speed;
            document.getElementById('wmd3').textContent="Wind Degree: "+data.wind.deg;
            document.getElementById('wmd4').textContent="Humidity: "+data.main.humidity;
            document.getElementById('wmd5').textContent="Min temp: "+data.main.temp_min+" Max Temp: "+data.main.temp_max;
        }
        catch(e){
            window.location.reload()
        }

    }
    return(
        <div className='main-container'>
            {/* <div className='weather-background' id='weather-back'>
            </div> */}
            <img alt='background' className='weather-background' id='weather-back' src={require('../gifs/opening.gif')}/>
            <div className='weather-container'>
                <div className='search'>
                    <input type='text' className='search-bar' placeholder='Enter the region' id='search-input'/>
                    <button onClick={buttonClick}><img src={require('../images/search.png')} alt='search-logo'/></button>
                </div>
                <div className='weather-detalis'>
                    <h1 id='place'>Place</h1>
                    <p style={{fontSize:"50px"}} id='temperature'>?°C</p>
                </div>
                <div className='weather-minor-details'>
                    <p id='wmd1'>Weather: ?</p>
                    <p id='wmd2'>Wind Speed: ?</p>
                    <p id='wmd3'>Wind degree: ?</p>
                    <p id='wmd4'>Humidity: ?</p>
                    <p  id='wmd5'>Min Temp: ?, Max Temp: ?</p>
                </div>
            </div>
            <footer>
            <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
            </footer>
        </div>
    )
}

export default Home;
