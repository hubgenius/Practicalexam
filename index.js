const express= require('express')
const app =express();
const port= 5000
const router = express.Router();
const appRoutes = require("./route/api")(router);
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const DB ="mongodb+srv://mern:kju5566@cluster0.ql0e8.mongodb.net/genius?retryWrites=true&w=majority";
mongoose.connect(DB)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use('/',appRoutes);
app.listen(port,()=> console.log("port running",port))