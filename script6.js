var http = require('http');
var url = require('url');

http.createServer(function(req,resp){
    resp.writeHead(200, {"Content-Type" : "text/html"})
    var q = url.parse(req.url, true).query;
    switch (q.opd) {
        case "mais":
            var txt = parseInt(q.Numero1) + parseInt(q.Numero2);
            var txt2 = "o resultado e " + txt;
            resp.end(txt2);
        break;
        case "menos":
            var txt = parseInt(q.Numero1) - parseInt(q.Numero2);
            var txt2 = "o resultado e " + txt;
            resp.end(txt2);
        break;
        case "vezes":
            var txt = parseInt(q.Numero1) * parseInt(q.Numero2);
            var txt2 = "o resultado e " + txt;
            resp.end(txt2);
        break;
        case "dividir":
            var txt = parseInt(q.Numero1) / parseInt(q.Numero2);
            var txt2 = "o resultado e " + txt;
            resp.end(txt2);
        break;
    }    
}).listen(4000)
