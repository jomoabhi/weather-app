const request = require('request')
const weather = (lat, long, callback) => {
      const url1 = 'http://api.weatherstack.com/current?access_key=5a466dc871faace9bf65397c913b0231&query=' + lat + "," + long
      request({
            url: url1,
            json: true
      }, (error, response) => {
            if (error) {
                  callback('Unable to connect to weather Service.....', undefined)

            } else if (response.body.error) {
                  callback('Unable to find weather report for this location .Search for another.....', undefined)
            } else {
                  temp = response.body.current.temperature
                  feelt = response.body.current.feelslike
                  loc = response.body.location.name
                  country = response.body.location.country
                   prep = response.body.current.precip
                  hum = response.body.current.humidity
                  const s = 'Temperature=' + temp + ' Degree Celcius but it' + ' Feels-Like=' + feelt + ' Degree Celcius . Precipitation Chances=' + prep  +'%. Humidity='+hum+' in '+ loc
                  callback(undefined, {
                        data: s

                  })
            }
      })

}
module.exports = weather