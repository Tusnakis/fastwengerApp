const express = require('express')
const request = require('request');
const app = express()
const port = 3009

// app.get('/players', (req, res) => {
//     var url = 'https://cf.biwenger.com/api/v1/competitions/la-liga/data';
//     request(url, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             jsonObject = JSON.parse(body);
//             var players = [];
//             var objPlayer = {};
//             Object.values(jsonObject.data.players).forEach(function (player) {
//                 objPlayer = { "name": player.name, "fitness": player.fitness, "points": player.points };
//                 players.push(objPlayer);
//             });

//             players.sort(function (a, b) {
//                 return b.points - a.points;
//             });
//             res.send(players);
//         }
//     });
// })

app.get('/players/:position', (req, res) => {
    var url = 'https://cf.biwenger.com/api/v1/competitions/la-liga/data';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonObject = JSON.parse(body);
            var players = [];
            var objPlayer = {};
            Object.values(jsonObject.data.players).forEach(function (player) {
                if (req.params.position == 0) {
                    objPlayer = { "id": player.id, "name": player.name, "slug": player.slug, "fitness": player.fitness, "points": player.points };
                    players.push(objPlayer);
                } else if (player.position == req.params.position) {
                    objPlayer = { "id": player.id, "name": player.name, "slug": player.slug, "fitness": player.fitness, "points": player.points };
                    players.push(objPlayer);
                }
            });

            players.sort(function (a, b) {
                return b.points - a.points;
            });
            res.send(players);
        }
    });
})

app.get('/player/:slug', (req, res) => {
    var url = 'https://cf.biwenger.com/api/v1/competitions/la-liga/data';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonObject = JSON.parse(body);
            var objPlayer = {};
            Object.values(jsonObject.data.players).forEach(function (player) {
                if (player.slug == req.params.slug) {
                    objPlayer = {
                        "name": player.name,
                        "teamID": player.teamID,
                        "position": player.position,
                        "price": player.price,
                        "priceIncrement": player.priceIncrement,
                        "statusInfo": player.statusInfo,
                        "playedHome": player.playedHome,
                        "playedAway": player.playedAway,
                        "fitness": player.fitness,
                        "points": player.points,
                        "pointsHome": player.pointsHome,
                        "pointsAway": player.pointsAway,
                        "pointsLastSeason": player.pointsLastSeason
                    };
                }
            });
            res.send(objPlayer);
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})