if (localStorage.getItem('nvidiaInstalled') === null) {
    localStorage.setItem('nvidiaInstalled', 'false');
}

if (localStorage.getItem('nvidiaInstalled') === 'true') {
    // Create NVIDIA app icon
    const nvidiaIcon = document.createElement('div');
    nvidiaIcon.classList.add('icon');
    nvidiaIcon.innerHTML = '<i class="fa-solid fa-gamepad"></i>';

    taskbar.appendChild(nvidiaIcon);

    // Create NVIDIA window
    const nvidiaWindow = document.createElement('div');
    nvidiaWindow.classList.add('window');

    const nvidiaStyles = `
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

        .window-body1 {
            flex-grow: 1; /* Ensures this section grows to fill the remaining space */
            display: flex; /* Make sure the iframe takes the full space */
            flex-direction: column;
            margin: 0;
            padding: 0;
        }

        iframe {
            flex-grow: 1; /* The iframe will now fill all remaining space in its parent */
            width: 100%;
            border: none;
        }
    `;

        nvidiaWindow.innerHTML = `
        <style>${nvidiaStyles}</style>
        <div class="window-header">
            <span class="window-title">NVIDIA</span>
            <div class="window-controls">
                <button class="minimize1"></button>
                <button class="maximize1" onclick="toggleFullscreen()"></button>
                <button class="close1" onclick="closeWindow()"></button>
            </div>
        </div>
        <div class="window-body1">
            <iframe src="" id="nvidia-frame" frameborder="0"></iframe>
        </div>
    `;

    document.body.appendChild(nvidiaWindow);

    function closeWindow() {
        nvidiaWindow.classList.remove('fullscreen');
        nvidiaWindow.style.display = 'none';
    }

    function toggleFullscreen() {
        if (nvidiaWindow.classList.contains('fullscreen')) {
            nvidiaWindow.classList.remove('fullscreen');
        } else {
            nvidiaWindow.classList.add('fullscreen');
        }
    }

    // Event listener for NVIDIA app icon
    nvidiaIcon.addEventListener('click', () => {
        nvidiaWindow.style.display = 'flex';
        toggleFullscreen(nvidiaWindow);
        openNivida('https://play.geforcenow.com/mall/')
    });
}