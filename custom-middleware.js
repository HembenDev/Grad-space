const express = require('express');
const port = 4000;
const app = express();

const customMiddleWare = (req,res,next)=>{
  const Timestamp = new Date().toISOString();
  console.log(`${Timestamp} from ${req.method} to ${req.url}`)
  next()
}

app.use(customMiddleWare);

app.get('/', (req,res)=>{
  res.send('Welcome to homepage!')
})

app.get('/about', (req,res)=>{
  res.send('Welcome to about page!')
})

app.listen(port,()=>{
  console.log(`Server now listening on port ${port}!`)
})
