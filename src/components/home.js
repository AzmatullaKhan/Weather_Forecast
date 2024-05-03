import './home.css'
function Home(){
    const buttonClick=async()=>{
        let api_key="b534d92c9221567e3f6748351a6986e0";

        let value=document.getElementById('search-input').value;
        document.getElementById('search-input').value=""

        let rainy=	require('../gifs/rainy.gif');
        let cloudy=require('../gifs/cloudy.gif');
        let sunny=require('../gifs/sunny.gif');
        let stormy=require('../gifs/stormy.gif');
        let windy=require('../gifs/windy.gif');
        let snow=require('../gifs/snow.gif');

        // const element= document.getElementById('search-input').value;
        if(value===""){
            return 0;
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${api_key}`;
        let response= await fetch(url);
        let data=await response.json();
        console.log(data)
        console.log(data.weather[0].main);


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
    }
    return(
        <div className='main-container'>
            {/* <div className='weather-background' id='weather-back'>
            </div> */}
            <img alt='background' className='weather-background' id='weather-back' src={"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZzbzU5bzBydmt5ZWVpY3RtM3gzMmN2OHFpcG1zMHQ2ZnVyamd1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GZd8nPH3TcNSU/giphy.gif"}/>
            <div className='weather-container'>
                <div className='search'>
                    <input type='text' className='search-bar' placeholder='Enter the region' id='search-input'/>
                    <button onClick={buttonClick}><img src={require('../images/search.png')} alt='search-logo'/></button>
                </div>
                <div className='weather-detalis'>
                    <h1>Place</h1>
                    <p style={{fontSize:"50px"}}>?°C</p>
                </div>
                <div className='weather-minor-details'>
                    <p>Weather: ?</p>
                    <p>Wind Speed: ?</p>
                    <p>Humidity: ?</p>
                    <p>Wind Speed: ?</p>
                    <p>Min Temp: ?, Max Temp: ?</p>
                </div>
            </div>
        </div>
    )
}

export default Home;