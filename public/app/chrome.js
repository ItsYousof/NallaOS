let taskbar = document.getElementById('taskbar');

const newApp = document.createElement('div');
newApp.classList.add('icon');
newApp.innerHTML = '<i class="fa fa-chrome"></i>';

taskbar.appendChild(newApp);

newApp.addEventListener('click', () => {
    window1.style.display = 'flex';
});

let window1 = document.createElement('div');
window1.classList.add('window');

let styles = `
    /* Utility classes */
    .window {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 12px;
        width: 600px;
        height: 400px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        flex-direction: column;
        z-index: 100;
        resize: both;
        overflow: hidden;
    }

    .window.fullscreen {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: none;
        resize: none;
        border-radius: 0;
    }

    .window-header {
        background: rgba(0, 0, 0, 0.8);
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: white;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        cursor: move;
        user-select: none;
    }

    /* Control buttons (minimize, maximize, close) */
    .window-controls {
        display: flex;
        gap: 8px;
    }

    .window-controls button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .window-controls button:active {
        transform: scale(0.95);
    }

    .window-controls .close1 {
        background: #e81123;
    }

    .window-controls .minimize1 {
        background: #ecf406;
    }

    .window-controls .maximize1 {
        background: #43b582;
    }

    .window-body {
        flex-grow: 1;
        padding: 20px;
        background-color: white;
        overflow-y: auto;
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            height: 40px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            outline: none;
            font-size: 15px;
            margin-bottom: 20px;
            padding: 0 20px;
            border-radius: 5px;
        }
    }

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

window1.innerHTML = `
    <style>${styles}</style>
    <div class="window-header">
        <span class="window-title">Chrome</span>
        <div class="window-controls">
            <button class="minimize1"></button>
            <button class="maximize1" onclick="toggleFullscreen()"></button>
            <button class="close1" onclick="closeWindow()"></button>
        </div>
    </div>
    <div class="window-body">
        <input type="text" placeholder="Search Google" id="search-input"/>
        <iframe src="" id="chrome-frame" frameborder="0"></iframe>
    </div>
`;

window1.style.display = 'none';

function closeWindow() {
    window1.classList.remove('fullscreen');
    window1.style.display = 'none';
}

function toggleFullscreen() {
    if (window1.classList.contains('fullscreen')) {
        window1.classList.remove('fullscreen');
    } else {
        window1.classList.add('fullscreen');
    }
}

document.body.appendChild(window1);
