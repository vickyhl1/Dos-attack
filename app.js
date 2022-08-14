

const http = require('http')
const port = 80

const badIp = {};

const server = http.createServer(function(req, res){
    // const ip = req.socket.remoteAddress;
    // if (ip=='::1') {
    //     req.socket.destroy();
    //     console.log(`Killed request for ${ip}`)
    //     return;
    // } else {
    //     badIp[ip] = new Date();
    // }
    const d = new Date();
    if(d.getHours()==18){
        const ip = req.socket.remoteAddress;
        req.socket.destroy();
        console.log(`Killed request for ${ip}`)
        return;
    }
    res.write("Hola\n");
    res.end();
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' +port)
    }
})

function getIp(remoteAddress){
     const ipSplitted = remoteAddress.split(':');
     return ipSplitted[ipSplitted.length - 1];
 }

