WS = require('ws');
wss = new WS.Server({ port: 8888 });
const tokenVK = 'e35d6cceec3110d8d4939a27a9050409e21c85464afeef907071a9cb44446b3bf5faf8159e88b3d79da81';
const vkapi = new (require('node-vkapi'))({ accessToken: `${tokenVK}`});
let arr = [],sarr = [],arrNew = [],sArrNew = [],arrHistory = [],items,ID = "55324081";
wss.on('connection', ws => ws.on('message', message => {

    console.log(message);

            vkapi.call('friends.search', {user_id: `${ID}`, count: `888`}).then( body => {
                items = body.items;
                arr = [];
                for (var i = 0; i < items.length; i++ ) {
                    sarr = [];
                    sarr = [ `${items[i].first_name} ${items[i].last_name}`, `${items[i].id}` ];
                    // ws.send(`console.log(${sarr})`);
                    arr.unshift(sarr)
                }
                ws.send(`createBlock(\`${JSON.stringify(arr)}\`)`);
                console.log(`createBlock(\`${JSON.stringify(arr)}\`)`) 
            });

  })
);