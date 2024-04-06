async function getData(url) {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;   
    }
    catch (error){
        console.log(error)
    }
}
function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } 
module.exports = {getData, getRandomGame}; 