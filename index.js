const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 6060;

app.use(express.static(path.join(__dirname, 'public')));

// Start the server on port 6060
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});