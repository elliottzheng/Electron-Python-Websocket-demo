var ws = new WebSocket("ws://120.79.203.251:8080/webSocket");
    ws.onopen = function (e) {
        console.log('Connection to server opened');
        ws.send("???");
    }
    ws.onmessage = function (msg) {
	   //	alert(msg.data+"这是接收到的内容");
        console.log(msg.data)
    }
    function send(){
        ws.send(JSON.stringify({message:'什么东西'}))
    }