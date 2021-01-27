// ==UserScript==
// @name         CurseForge Instant Download
// @version      1.0.2
// @description  Instant downloading of Minecraft CurseForge mods.
// @author       TrevTV
// @match        https://www.curseforge.com/minecraft/mc-mods/*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var queryURL = document.querySelector('.text-sm a').href // Rewritten by origamitaco (Tyler Harrison)
    window.location.replace(queryURL);
    var countdown = document.getElementsByClassName("text-xl")[0];
    countdown.remove();
}
)();
