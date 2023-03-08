const os = require ("os");
console.log(os.platform());

setInterval((e)=>{
    const { freemem, totalmem} = os
    const total = parseInt(totalmem() /1024 /1024);
    const mem = parseInt(freemem() /1024 /1024);
    const percent = parseInt((mem/total) *100);
    
    const stats = {
        free: `${mem}MB`,
        total: `${total}MB`,
        usage: `${percent}%`
    }
    console.clear()
    console.log("======PC STATS=======");
    console.table(stats)
}, 1000)
