/**
 * Created by hspcadmin on 2016/6/6.
 */
var bgCa=document.getElementById("bgCa").getContext("2d");
var bgCaGrd= bgCa.createLinearGradient(0,0,658,369);
bgCaGrd.addColorStop(0.3,"#ccbaa4");
bgCaGrd.addColorStop(0,"#95968e");
bgCa.fillStyle=bgCaGrd;
bgCa.fillRect(0,0,658,369);