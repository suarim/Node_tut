const fs=require('fs')
fs.readFile('C:/Users/PeeKay/OneDrive/Desktop/node_tutorial/content/result.txt','utf8',(err,result)=>{
    if(err){
        console.log("error")
        return
    }
    const first=result
    fs.readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log("error")
        return
        }
        const second=result
        fs.writeFile('./content/asyncresult.txt',`this is results ${first} ${second}`,{flag:'a'},(err,result)=>{
            if(err){
                console.log("error")
            return
            }

        })
    })
})