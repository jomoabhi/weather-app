

console.log("this is cliesnt side js")


const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const ms1=document.querySelector('#m1')
const ms2=document.querySelector('#m2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc=search.value
    ms1.textContent="Loading..."
    fetch('/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            ms1.textContent=data.error
            ms2.textContent=''
        }
        else{
            ms1.textContent=data.place
            const js=JSON.stringify(data.data)
            const a=JSON.parse(js)
            ms2.textContent=a.data
            console.log(data.data)
        }
    })
})
    

})