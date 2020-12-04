const cityName = document.getElementById('cityName');
const btn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp  = document.getElementById('temp')

const getInfo = async(e) => {
    e.preventDefault();
    let CityVal = cityName.value;
    if (CityVal === "") {
        city_name.innerText = `please enter city`;
    }else{
        try {
            city_name.innerText ="";
            const api_key ="81df5fa7242cd7df900e1a518ef21bea";
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${CityVal}&units=metric&appid=${api_key}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);   
            temp.innerHTML = `${data.main.temp}`;
            city_name.innerText = `${data.name} , ${data.sys.country}`;        
        } catch{
        city_name.innerText = `please enter city`;
            
        }
        }
}


btn.addEventListener("click", getInfo )