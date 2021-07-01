var numPx;
var ds;



window.onscroll = function (e) {
    numPx = window.scrollY;
   
   

    if(numPx > 0)
    {
        ds = document.getElementById("barprinc");
        ds.style = "position: fixed !important; width: 100%; transition: all 0.3s ease-out 0.3s;"
        console.log("+")
    }

    if(numPx == 0)
    {
        ds = document.getElementById("barprinc");
        ds.style = "position: fixed !important; width: 100%; background-color: #020c15 !important; transition: all 0.3s ease-out 0.3s;"
        console.log("0")
    }

};




