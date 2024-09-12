document // makes it so you can press enter to submit as opposed to just being able to press a button
    .getElementById("search-input")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.stopPropagation();
            event.preventDefault();
            let url = document.getElementById("search-input").value; // if no periods are detected in the input, search google instead
            let searchUrl = "https://www.google.com/search?q=";

            if (!url.includes(".")) {
                url = searchUrl + encodeURIComponent(url);
            } else {
                if (!url.startsWith("http://") && !url.startsWith("https://")) { // if no http or https is detected, add https automatically
                    url = "https://" + url;
                }
            }

            let iframeWindow = document.getElementById("chrome-iframe");
            if (!iframeWindow) {
                iframeWindow = document.createElement("iframe");
                iframeWindow.id = "chrome-iframe";
                document.getElementById("chrome-frame").appendChild(iframeWindow);
            }

            iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
    });