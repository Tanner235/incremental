var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  autoUpgrade: 0
}
function mineGold() {
  gameData.gold +=
gameData.goldPerClick
document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

function autoUpgrade() {
  if (gameData.autoUpgrade = 1){
    gameData.gold -= 1000
    var mainGameLoop = window.setInterval(function() {
      mineGold()
    }, 1000)
  }
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  document.getElementById("mineGoldMenu").style.display = "none"
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
// go to a tab for the first time, so not all show
tab("mineGoldMenu")

function hardReset() {
  gameData.gold += 100000
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}
