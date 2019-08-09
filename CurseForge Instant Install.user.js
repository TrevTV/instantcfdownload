// ==UserScript==
// @name         CurseForge Instant Download
// @version      1.0.0
// @description  Instant downloading of Minecraft CurseForge mods.
// @author       TrevTV
// @match        https://www.curseforge.com/minecraft/mc-mods/*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var baseUrl = `https://www.curseforge.com/minecraft/mc-mods`
    var id = ((document.URL).split("/"))[7];
    var modName = ((document.URL).split("/"))[5];
    window.location.replace(`${baseUrl}/${modName}/download/${id}/file`);
}
)();