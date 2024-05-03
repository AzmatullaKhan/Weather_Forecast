import './home.css'
function Home(){
    const buttonClick=()=>{
        let value=document.getElementById('search-input').value;
        let rainy=	"http://localhost:3000/static/media/rainy.70f2549f1740b4f1c4d7.gif";
        let cloudy="http://localhost:3000/static/media/cloudy.c7e3f9077fe820e11c10.gif";
        let sunny="	http://localhost:3000/static/media/sunny.b4761a433dc6dde33930.gif";
        let stormy="http://localhost:3000/static/media/stormy.5a07bd6435b3b62d94de.gif";
        let windy="http://localhost:3000/static/media/windy.1600503a462e1da59883.gif";
        if(value.toLowerCase()==="rainy"){
            document.getElementById('weather-back').src=rainy;
        }
        else if(value.toLowerCase()==="sunny"){
            document.getElementById('weather-back').src=sunny;
        }
        else if(value.toLowerCase()==="cloudy"){
            document.getElementById('weather-back').src=cloudy;
        }
        else if(value.toLowerCase()==="stormy"){
            document.getElementById('weather-back').src=stormy;
        }
        else if(value.toLowerCase()==="windy"){
            document.getElementById('weather-back').src=windy;
        }
    }
    return(
        <div className='main-container'>
            {/* <div className='weather-background' id='weather-back'>
            </div> */}
            <img alt='background' className='weather-background' id='weather-back' src={require("../gifs/sunny.gif")}/>
            <div className='weather-container'>
                <div className='search'>
                    <input type='text' className='search-bar' placeholder='Enter the region' id='search-input'/>
                    <button onClick={buttonClick}><img src={require('../images/search.png')} alt='search-logo'/></button>
                </div>
            </div>
        </div>
    )
}

export default Home;