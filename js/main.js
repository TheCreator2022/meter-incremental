let meter = 0;
let mps = 0;
let mpc = 1
let mpcps = 0
var costs = [50, 600, 7.2e4, 1e7]
const amount0 = [1, 20, 720, 9200]
const amount1 = [360]

document.getElementById("click").onclick = () => {
  meter += mpc
}

document.getElementById("cost1").onclick = () => {
  if (meter >= costs[0]) {
    meter -= costs[0]
    mps += amount0[0]
    costs[0] *= 2.2
  }
}

document.getElementById("cost2").onclick = () => {
  if (meter >= costs[1]) {
    meter -= costs[1]
    mps += amount0[1]
    costs[1] *= 2.2
  }
}

document.getElementById("cost3").onclick = () => {
  if (meter >= costs[2]) {
    meter -= costs[2]
    mps += amount0[2]
    mpcps += 45
    costs[2] *= 2.2
  }
}

document.getElementById("cost4").onclick = () => {
  if (meter >= costs[3]) {
    meter -= costs[3]
    mps += amount0[3]
    costs[3] *= 2.2
  }
}

function UpdateGameArea() {
  meter += mps
  mpc += mpcps
  
  document.getElementById("meter").innerText = meter
  document.getElementById("mps").innerText = mps
  document.getElementById("mpc").innerText = mpc
  document.getElementById("cost1num").innerText = costs[0]
  document.getElementById("cost2num").innerText = costs[1]
}

setInterval(UpdateGameArea, 100)