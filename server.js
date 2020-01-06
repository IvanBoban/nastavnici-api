const express=require ('express');
const app = express();
const nastavnci_inf = require('./nastavnci_inf');
const nastavnci_ang = require('./nastavnici_ang');
const nastavnci_skan = require('./nastavnici_skan');
const nastavnci_arh= require('./nastavnici_arh');
const nastavnci_filo = require('./nastavnici_filo')
const port = process.env.PORT || 4000 ;
const cors = require('cors');
app.use(cors())
app.get('/', (req,res)=>{
    res.send(nastavnci_inf)
})
app.get('/inf', (req,res)=>{
    res.send(nastavnci_inf)
})
app.get('/ang', (req,res)=>{
    res.send(nastavnci_ang)
})
app.get('/skan', (req,res)=>{
    res.send(nastavnci_skan)
})
app.get('/arh', (req,res)=>{
    res.send(nastavnci_arh)
})
app.get('/filo', (req,res)=>{
    res.send(nastavnci_filo)
})
app.listen(port, ()=> console.log(`listening on ${port}`))