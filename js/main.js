"use strict";
let flags = ["ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "ds", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "fi", "fj", "fk", "fm", "fo"];
// set random flags to background
let blocks = 36,
    wrapper = document.getElementById("wrapper"),
    arr = [];

for(let i = 1, i2 = 0; i < blocks; i += 2) {
    let element = document.createElement("div");
    let element2 = document.createElement("div");
    element.style.backgroundImage = "url(flags/" + flags[i2] + ".svg" + ")";
    element.className += flags[i2] + " block";
    element.id += "a" + Math.floor(Math.random() * blocks);
    element2.style.backgroundImage = "url(flags/" + flags[i2] + ".svg" + ")";
    element2.className += flags[i2] + " block";
    element2.id += "a" + Math.floor(Math.random() * blocks);
    arr.push(element);
    arr.push(element2);
    i2++;
}

arr.sort(function(a, b) {
    return a.id.substring(1) - b.id.substring(1);
});

for(let i = 0; i < arr.length; i++) {
    wrapper.appendChild(arr[i]);
}