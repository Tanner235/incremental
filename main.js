var gameData = {
  wood: 0,
  woodPerClick: 1,
  woodPerClickCost: 10,
  cobble: 0,
  cobblePerClick: 1,
}
function mineWood() {
  gameData.wood +=
gameData.woodPerClick
document.getElementById("woodMined").innerHTML = gameData.wood + " Wood Mined"
}

function mineCobble() {
  gameData.cobble +=
gameData.cobblePerClick
document.getElementById("cobbleMined").innerHTML = gameData.cobble + " Cobblestone Mined"
}

function buyWoodPerClick() {
  if (gameData.wood >= gameData.woodPerClickCost) {
    gameData.wood -= gameData.woodPerClickCost
    gameData.woodPerClick += 1
    gameData.woodPerClickCost *= 2
    document.getElementById("woodMined").innerHTML = gameData.wood + " Wood Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.woodPerClick + ") Cost: " + gameData.woodPerClickCost + " Wood"
  }
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("mineWoodMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
// go to a tab for the first time, so not all show
tab("mineWoodMenu")

// will run a loop constantly updating values mostly used on startup
var mainGameLoop = window.setInterval(function() {
  document.getElementById("woodMined").innerHTML = gameData.wood + " Wood Mined"
  document.getElementById("cobbleMined").innerHTML = gameData.cobble + " Cobblestone Mined"
}, 200)

function hardReset() {
  gameData.wood += 100000
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('woodMinerSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("woodMinerSave"))
if (savegame !== null) {
  gameData = savegame
}
