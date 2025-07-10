 

const myCustomMiddleware = ((req,res,next)=>{
  console.log(`This is running the custom middleware!`)

  next()
})

app.use(myCustomMiddleware);

app.get('/', (req,res)=>{
  res.send('Home Page')
})

app.get('/about', (req,res)=>{
  res.send('About Page')
})

app.listen(port, ()=>{
  console.log(`Server listening on port ${port}!`)
})