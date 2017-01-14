var builder=require('botbuilder');
var restify=require('restify');

var connector=new builder.ChatConnector({
    appId:process.env.BOTFRAMEWORK_APPID,
    appPassword:process.env.BOTFRAMEWORK_APPSECRET
});
var bot=new builder.UniversalBot(connector);

bot.dialog('/',function(session){
    session.send('hello');
});

var server=restify.createServer();
server.listen(process.env.port || process.env.PORT || 9999,function(){
    console.log('%s listening to %s', server.name, server.url);
});

server.post('/api/messages',connector.listen());
