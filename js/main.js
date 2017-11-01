"use strict";
let flags = ["ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "ds", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "fi", "fj", "fk", "fm", "fo"];
// set random flags to background
let blocks = document.querySelectorAll(".block");

for(var i = 1, i2 = 0; i < blocks.length; i += 2) {
    blocks[i - 1].style.backgroundImage = "url(flags/" + flags[i2] + ".svg" + ")";
    blocks[i - 1].className += " " + flags[i2];
    blocks[i].style.backgroundImage = "url(flags/" + flags[i2] + ".svg" + ")";
    blocks[i].className += " " + flags[i2];
    i2++;
}

