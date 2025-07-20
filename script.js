function moveUp() {
    const box = document.getElementById("box");
    let position = 0;
    const interval = setInterval(() => {
      if (position >= 270) {
        clearInterval(interval);
      } else {
        position += 2;
        box.style.bottom = position + "px";
      }
    }, 10);
  }
  