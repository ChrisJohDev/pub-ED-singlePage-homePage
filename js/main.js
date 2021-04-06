window.onload = () => {
    var count = 0;
    //console.log(`main onload.`);
    /*if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js');
    }*/
    /*
        We want to load the json file projects.json in a global variable and have the service worker sw.js load it into the local cache.
        If the file on the server is newer than the one in the cache then clear cache and load the new version into cache.
    */
}


function loadIframes(data) {
    getPage(data, "en");
    //console.log(`main.js loadIframes data: ${data}`);
    /* let html = "";
     if (data === "wae") {
         //console.log(`main.js loadIframes 2`);
         html += `<iframe title="Weather and Exchange" class="demo_frame" src="/weather-and-exchange/wae.html"></iframe>`;
         //console.log(`main.js loadIframes 3: ${html}`);
     }
     else if (data === "receipt") {
         //console.log(`main.js loadIframes 4`);
         html += `<iframe title="Weather and Exchange" style="min-height: 80vh; width: 75vw;" src="/weather-and-exchange/wae.html"></iframe>`;
         //console.log(`main.js loadIframes 5`);
     }
     else {
         console.log(`main.js loadIframes else data: ${data}`);
     }
 
     if (html !== "") {
         //console.log(`main.js loadIframes 10: ${html}`);
         Helper.setHtml("main", html);
     }
     */
}

function getPage(data, lang) {
    alert(`This is only a one page implementation so the page "${data}" doesn't exist.\nClick on the name 'Chris Johannesson' in the top left of the navigation bar to go to the live website! :-)`);
}
