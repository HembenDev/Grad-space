function getUser(name,callback){
  console.log(`Fetching ${name} user's name....`)
  setTimeout(() => {
    callback(name)
  }, 2000);
}

function fetchData(data){
  console.log(`Hello! ${data}`)
}

getUser('Jeremiah',fetchData)