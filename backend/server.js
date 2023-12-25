const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());

app.get('/test', (req, res) => {
    res.json({ message: "Holy fuck the server is working" });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
