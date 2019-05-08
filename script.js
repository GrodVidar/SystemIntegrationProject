const mainDiv = document.getElementById("mainDiv");
const hpKey = "4ac1f1eb94344e009c98b323a4f4a2af";
const slKey = "2fddd8be222741dca106f37a60e159f7";
var hpurl;

function setUrl()
{
    var g_station = document.getElementById('station').value;
    hpurl = "api.sl.se/api2/nearbystopsv2.json?key="+ hpKey +"&searchstring=" + g_station +"&stationsonly=true&maxresults=1";
    console.log(hpurl);
}
