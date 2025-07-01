import './style.css';
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.style.position = "absolute";
  trail.style.width = "6px";
  trail.style.height = "6px";
  trail.style.borderRadius = "50%";
  trail.style.background = "#00cc90";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  trail.style.pointerEvents = "none";
  trail.style.zIndex = 9999;
  trail.style.opacity = 0.7;
  trail.style.transition = "opacity 0.5s ease";
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 500);
});
