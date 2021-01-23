const request=require('request')
const geocode=(address,callback)=>{
    const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoiam9tb3RlcyIsImEiOiJja2szdzFxNnEwMTRtMnVvNngyOGdwcTRjIn0.9JOiivxK_a8CICYUBFiMQQ&limit=1'
    request({url:url1,json:true},(error,response)=>{
                if(error){
                      callback('Unable to connect to Location Service.....',undefined) 
            
                 }
                 else if(response.body.features.length===0){
                      callback('Unable to find this location .Search for another.....',undefined)
                 }
                 else{
                  const lat=response.body.features[0].center[1]
                  const long=response.body.features[0].center[0]
                  const loc=response.body.features[0].place_name
                  callback(undefined,{
                        place:loc,
                        lat:lat,
                        long:long
                  })
                } 
       })

}
module.exports=geocode