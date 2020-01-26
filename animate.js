const anim = document.getElementById("animate");
const btn = document.getElementById("start");


function animate() {
  let xPos = 0;
  let yPos = 0;
  anim.style.backgroundImage = "url('burger.png')";

  const mv_interval = setInterval(move, 40);
  xSize = 96;
  ySize = 96;
  anim.style.visibility = "visible";

  // moves frame
  function move() {
    xPos++;
    yPos++;
    anim.style.top = xPos + 'px';
    anim.style.left = yPos + 'px';
  }

  // shrinks frame
  const size_interval = setInterval(shrink, 175);
  function shrink() {
    if (xSize == 0) {
      clearInterval(mv_interval);
      clearInterval(size_interval);
      anim.style.backgroundImage = "url('smoke.gif')";
      xSize = 3
      ySize = 4
      anim.style.width = xSize + 'px';
      anim.style.height = ySize + 'px';

      const smoke_interval = setInterval(grow, 225);
      function grow() {
        if (xSize == 15) {
          clearInterval(smoke_interval);
          btn.style.visibility = "visible"
        } else {
          xSize++;
          ySize++
          anim.style.width = xSize + 'px';
          anim.style.height = ySize + 'px';

          xPos--;
          yPos--;
          anim.style.top = xPos + 'px';
          anim.style.left = yPos + 'px';
        }
      }

    } else {
      xSize--;
      ySize--;
      anim.style.width = xSize + 'px';
      anim.style.height = ySize + 'px';
    }
  }

}

btn.addEventListener(("click"), () => {
  anim.style.visibility = "hidden";
  btn.style.visibility = "hidden";

  // runs animation
  animate();
})


