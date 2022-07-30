// Globals
let token = " ",
  rotation = 0,
  texture = 0,
  w = map.w,
  h = map.h,
  x = 0,
  y = 0,
  z = 0,
  rx = 45,
  rz = 45;

// Move the scene
const moveScene = (rx, rz) => {
  const $scene = document.querySelector("#scene");
  $scene.style.transformOrigin = `50% 50%`;
  $scene.style.transform = `translate3D(-50%,-50%,-${
    Math.max(w * 200, h * 200) + z * 200
  }px)rotateX(${rx}deg)rotateZ(${rz}deg)`;
};

// Return HTML code for a cube, at the given coordinates
const drawCube = (x, y, z, id = "") => {
  let cube = `<div id='${id}' class='cube' style='transform:${
    id == "hero" ? "scaleX(" + hero_w + ")scaleY(" + hero_h + ")" : ""
  }translate3d(${x * 200}px,${y * 200}px,${z * 200}px)'>`;

  cube += `<div class="face up"></div>`;
  cube += `<div class="face left"></div>`;
  cube += `<div class="face back"></div>`;
  cube += `<div class="face right"></div>`;
  cube += `<div class="face front"></div>`;
  return cube;
};

// Draw scene
const drawScene = () => {
  for (Z in map.layers) {
    for (Y in map.layers[Z]) {
      for (X in map.layers[Z][Y]) {
        token = map.layers[Z][Y][X];
        if (token == "1") {
          // 1 = cube
          scene.insertAdjacentHTML("beforeEnd", drawCube(X, Y, Z));
        }
      }
    }
  }
};

drawScene();
scene.style.width = floor.style.width = w * 200 + "px";
scene.style.height = floor.style.height = h * 200 + "px";
if (top.RX)
  RX.onchange =
    RX.onupdate =
    RX.oninput =
    RZ.onchange =
    RZ.onupdate =
    RZ.oninput =
      () => {
        moveScene((rx = +RX.value), (rz = +RZ.value));
      };
