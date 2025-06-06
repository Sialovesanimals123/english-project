function page1(){
    window.open("index.html")
}

function page2(){
    window.open("character.html")
}

function page3(){
    window.open("hs.html")
}

function createsnowflake(){
    var snowflake = document.createElement('div')
    snowflake.classList.add('snowflake')
    snowflake.textContent='❄️'
    snowflake.style.left= Math.random() * window.innerWidth + 'px';
    var falltime = 5 + Math.random() * 5;
    snowflake.style.animationDuration= falltime + 's'
    document.body.appendChild(snowflake);

    setTimeout(()=>{
        snowflake.remove();
    }, falltime*2000)
    
}

setInterval(createsnowflake, 500)
