const express = require('express')
const app = express();

//Root route
app.get('/', (req,res)=>{
  res.send('Welcome to our home page!')
});


//Shared products
const products = [
  {id : 1,label: 'product 1'},
  {id : 2,label: 'product 2'},
  {id : 3,label: 'product 3'}
]

//get all products
app.get('/products', (req,res)=>{
  res.json(products)
})

//Get a single product
app.get('/products/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  console.log(req.params)
  if(isNaN(productId)){
    return res.status(400).send('Invalid product ID!. Please provide a number')
  }
  const getSingleProduct = products.find((product => product.id === productId));
  if(getSingleProduct){
    res.json(getSingleProduct)
  }else{
    res.status(404).send('Product is not found! please try with different id!')
  }
})

const port = 3000;
app.listen(port, ()=>{ 
  console.log(`Server is now running on port ${port}`)
})