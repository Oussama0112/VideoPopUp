// button hover effect

document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("pop")) {
    const r = e.target.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.target.style.setProperty("--tran-or", `${x}px ${y}px`);
  }
});
//------------------------------------------------------------------
document.querySelector(".pop").addEventListener("click", function () {
  let videoContainer = document.createElement("div");
  videoContainer.classList.add("videoContainer");
  let exit = document.createElement("div");
  exit.innerText = "X";
  exit.className = "exit";
  let myvideo = document.createElement("video");
  myvideo.setAttribute("controls", "");
  myvideo.setAttribute("preload", "auto");
  myvideo.setAttribute("width", "95%");
  myvideo.setAttribute("height", "95%");

  myvideo.setAttribute("src", "img/awesome-video.mp4");

  videoContainer.appendChild(myvideo);
  videoContainer.appendChild(exit);
  document.body.style.cssText = " box-shadow: 0 0 100px 10px black inset;";
  document.body.appendChild(videoContainer);
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("exit")) {
    e.target.parentElement.remove();
  }
});
