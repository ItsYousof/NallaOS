if (localStorage.getItem('bg') === null) {
    localStorage.setItem('bg', 'default');
}

document.addEventListener('DOMContentLoaded', function () {
    let bg = localStorage.getItem('bg');
    let bgImages = {
        'default': '../assets/images/Wallpaper.png',
        'dark': '../assets/images/darkbg.jpg',
        'light': '../assets/images/lightbg.jpg'
    };
    document.body.style.backgroundImage = `url(${bgImages[bg] || bgImages['default']})`;
});

function setBackground(bg) {
    localStorage.setItem('bg', bg);
    let bgImages = {
        'default': '../assets/images/Wallpaper.png',
        'dark': '../assets/images/darkbg.jpg',
        'light': '../assets/images/lightbg.jpg'
    };
    document.body.style.backgroundImage = `url(${bgImages[bg] || bgImages['default']})`;
}

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function () {
        document.querySelectorAll('.icon').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

function openAppstore() {
    document.getElementById('app-store').style.display = 'flex';
}

function openSettings() {
    document.getElementById('settings').style.display = 'flex';
}

document.querySelectorAll('.window-controls .close').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.window').style.display = 'none';
    });
});

document.querySelectorAll('.window-controls .minimize').forEach(btn => {
    btn.addEventListener('click', function () {
        let windowBody = this.closest('.window').querySelector('.window-body');
        windowBody.style.display = windowBody.style.display === 'none' ? 'block' : 'none';
    });
});

function openExplorer() {
    document.getElementById('explorer').style.display = 'flex';
}

function closeExplorer() {
    document.getElementById('explorer').style.display = 'none';
}

// Drag and Drop functionality for windows
document.querySelectorAll('.window-header').forEach(header => {
    let isDragging = false, startX, startY, offsetX, offsetY;

    header.addEventListener('mousedown', function (event) {
        isDragging = true;
        const windowElement = header.closest('.window');
        startX = event.clientX;
        startY = event.clientY;
        offsetX = windowElement.offsetLeft;
        offsetY = windowElement.offsetTop;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
        if (isDragging) {
            const windowElement = header.closest('.window');
            windowElement.style.left = `${offsetX + event.clientX - startX}px`;
            windowElement.style.top = `${offsetY + event.clientY - startY}px`;
        }
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});

document.querySelectorAll('.window-controls .maximize').forEach(btn => {
    btn.addEventListener('click', function () {
        const windowElement = this.closest('.window');
        windowElement.classList.toggle('fullscreen');
    });
});

// Search functionality
let searchUrl = "https://www.google.com/search?q=";
document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let url = document.getElementById("search-input").value;

        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        var iframe = document.getElementById("chrome-frame");
        iframe.src = `${__uv$config.prefix}${__uv$config.encodeUrl(url)}`;
    }
});
