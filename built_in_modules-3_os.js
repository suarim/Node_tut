const os=require('os')
console.log(os.hostname())
console.log(os.uptime())
cur_os={name:os.type(),
rel:os.release(),
tolmem:os.totalmem(),
freemem:os.freemem()}
console.log(cur_os)
