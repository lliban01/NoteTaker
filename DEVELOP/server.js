const express       = require('express');
const path          = require('path');
const fs            = require('fs');
const app           = express();
const port          = 5000;

app.use(express.json());
app.use(express.static('../DEVELOP/public'));
require('../DEVELOP/public/apiRoutes')(app);
require('../DEVELOP/public/htmlRoutes')(app);

// Making App Server listen to my Port Number 
app.listen(port, () => console.log(`AppServer listening to Port: ${port}`));
