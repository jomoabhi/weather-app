const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const weather=require('./utils/weather')
const app=express()
const dirpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(dirpath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather'
    })  
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'enter correct address'
        })
    }

   
    geocode(req.query.address,(error,data1)=>{
           if(error){
                return res.send({error:error})
           }
           else{
                  weather(data1.lat,data1.long,(error,data)=>{
          if(error){
             return res.send({error:error})
        }
        else{
              return res.send({
                  place:data1.place,
                  data:data
              })
        }
          
    })
           }
     })
  
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Error!',
        error:'Page not found,Error 404'
    })
})


app.listen(3000)