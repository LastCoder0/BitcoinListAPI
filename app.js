const express=require('express');
const ejs = require('ejs');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path =require('path');
const page_Router = require('./src/routers/page_Router');
app.use(expressLayouts);
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./src/views'));
app.use(express.urlencoded({extended:true}));

app.use('/',page_Router);



app.listen('3000',()=> {
    console.log("3000 porta calisti");
})