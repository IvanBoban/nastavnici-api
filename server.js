const express=require ('express');
const app = express();
const odsjeci = require('./odsjeci')
const nastavnci_ang = require('./nastavnici_ang');
const nastavnci_arh= require('./nastavnici_arh');
const nastavnci_filo = require('./nastavnici_filo');
const nastavnci_fon = require('./nastavnici_fon')
const nastavnci_ger = require('./nastavnici_ger')
const nastavnci_skan = require('./nastavnici_skan');
const nastavnci_inf = require('./nastavnci_inf');
const nastavnci_neder = require('./nastavnci_neder');
const port = process.env.PORT || 4000 ;
const cors = require('cors');
app.use(cors());

app.get('/odsjeci', (req,res)=>{
    res.send(odsjeci)
});
app.get('/', (req,res)=>{
    res.send(nastavnci_inf)
});
app.get('/inf', (req,res)=>{
    res.send(nastavnci_inf)
});
app.get('/ang', (req,res)=>{
    res.send(nastavnci_ang)
});
app.get('/skan', (req,res)=>{
    res.send(nastavnci_skan)
});
app.get('/arh', (req,res)=>{
    res.send(nastavnci_arh)
});
app.get('/filo', (req,res)=>{
    res.send(nastavnci_filo)
});
app.get('/fon', (req,res)=>{
    res.send(nastavnci_fon)
});
app.get('/ger', (req,res)=>{
    res.send(nastavnci_ger)
});
app.get('/neder', (req,res)=>{
    res.send(nastavnci_neder)
});
app.listen(port, ()=> console.log(`listening on ${port}`))