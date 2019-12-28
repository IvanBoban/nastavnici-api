const express=require ('express');
const app = express();
const array = require('./nastavnci_list')
const port = process.env.PORT || 4000 ;
const cors = require('cors');
app.use(cors())
app.get('/', (req,res)=>{
    res.send(array)
})


app.listen(port, ()=> console.log(`listening on ${port}`))