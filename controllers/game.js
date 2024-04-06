const fs = require("fs").promises;
const { config } = require('../appModules/rating')
const { getRandomGame } = require('../appModules/api')

async function gameRouteController(res) {
    try {
        const ratingFile = await fs.readFile(config.PASS_TO_RATING_FILE, 'utf8');
        const data = JSON.parse(ratingFile);
        const game = getRandomGame(data);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(game));
    }
    catch (err) {
        res.statusCode = 500;
        console.log(err);
        res.end("Internal Server Error");
    }
}
module.exports = gameRouteController;