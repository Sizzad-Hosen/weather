

const loadWeather = (text)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=bcccb269314127e14538facf42f17ca0&units=metric`
    fetch(url )
    console.log(url)
    .then(res=>res.json())
    .then(data=>display(data,text))
}



const display=(data,text)=>{
   document.getElementById('btn-submit').addEventListener('click',function(){
        
        
        const inputField=document.getElementById('input-field');
        input = inputField.value;
     
        const city =document.getElementById('city');
        city.innerHTML=`${data.name}`
        
     
        const temp =document.getElementById('temp');
        temp.innerHTML=`${data.main.temp+'°C'}`
        
     
        const homunity =document.getElementById('humidity');
        homunity.innerHTML = `${data.main.humidity +'%'}`
        
     
        const wind =document.getElementById('wind');
        wind.innerHTML = `${data.wind.speed +'km/h'}`;
        
        
        // loadWeather(textSearch);
        
        
          loadWeather(text);
    })
    
    
}
loadWeather();