// import require from 'require.js'

// 'use strict';
// const fs = require('fs');

// let rawdata = fs.readFileSync("count.json");
// let data = JSON.parse(rawdata);
// console.log(data);


const btn = document.getElementById("start");
btn.addEventListener(("click"), () => {
  btn.style.visibility = "hidden";

  // makes button visible again 17 seconds after press
  setTimeout(function(){ btn.style.visibility = "visible"; }, 17000);
  myMove();
})

function myMove() {
  const anim = document.getElementById("animate");
  let xPos = 0;
  let yPos = 0;
  let xSize = 96;
  let ySize = 96;
  const id_pos = setInterval(frame_pos, 40);
  anim.style.visibility = "visible";

  // moves frame
  function frame_pos() {
    if (xPos == 420) {
      clearInterval(id_pos);
    } else {
      xPos++;
      yPos++;
      anim.style.top = xPos + 'px';
      anim.style.left = yPos + 'px';
    }
  }

  // shrinks frame
  const id_size = setInterval(frame_size, 175);
  function frame_size() {
    if (xSize == 0) {
      clearInterval(id_size);
    } else {
      xSize--;
      ySize--;
      anim.style.width = xSize + 'px';
      anim.style.height = ySize + 'px';
    }
  }
}
