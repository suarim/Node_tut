const http=require('http')
const server= http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("this is web page")
    }
    if(req.url==='/about')
    {
        res.end("here is history")
    }
    res.end(`<h1>OOPs!</h1>
    <a href="/">go back</a>`)
})
server.listen(5000)