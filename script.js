const mainDiv = document.getElementById("mainDiv");
var long, lat;
var local = document.createElement('div')
const hpKey = "4ac1f1eb94344e009c98b323a4f4a2af";
const slKey = "2fddd8be222741dca106f37a60e159f7";
var hpsearch = document.getElementById("hplats").value;
var hpurl = "api.sl.se/api2/nearbystopsv2.json?key="+ hpKey +"&searchstring=" + hpsearch +"&stationsonly=true&maxresults=1";

console.log(hpurl);
