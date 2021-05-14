const battleBots = [
    { name: 'optimus', team: 'autobots' },
    { name: 'megatron', team: 'decepticons' },
    { name: 'ironhide', team: 'autobots' },
    {name: 'soundwave', team:  'decepticons' }

];

let botsInDisguise = battleBots.filter(function (bots) {
    return bots.team === "autobots";
}).map(function (bots) {
    return bots.name;
});

console.log(botsInDisguise);