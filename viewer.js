// Globals
// let rotation = 0;
// let texture = 0;
let w = map.w;
let h = map.h;
// let x = 0;
// let y = 0;
let z = 0;
let rx = 45;
let rz = 45;

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
  } translate3d(${x * 200}px,${y * 200}px,${z * 200}px)'>`;

  cube += `<div class="face up"></div>`;
  cube += `<div class="face left"></div>`;
  cube += `<div class="face back"></div>`;
  cube += `<div class="face right"></div>`;
  cube += `<div class="face front">${z}</div></div>`;
  return cube;
};

const drawCoin = (x, y, z, id = "") => {
  let cube = `<div id='${id}' class='cube' style='transform:${
    id == "hero" ? "scaleX(" + hero_w + ")scaleY(" + hero_h + ")" : ""
  } translate3d(${x * 200}px,${y * 200}px,${z * 200}px)'>`;

  cube += `<div class="face up"></div>`;
  cube += `<div class="face left"></div>`;
  cube += `<div class="face back"></div>`;
  cube += `<div class="face right"></div>`;
  cube += `<div class="face front">${z}</div></div>`;
  return cube;
};

// Draw scene
const drawScene = () => {
  let token = " ";

  for (Z in map.layers) {
    for (Y in map.layers[Z]) {
      for (X in map.layers[Z][Y]) {
        token = map.layers[Z][Y][X];
        if (token == "1") {
          // 1 = cube
          scene.insertAdjacentHTML("beforeEnd", drawCube(X, Y, Z));
        }
        if (token === "2") {
          scene.insertAdjacentHTML("beforeEnd", drawCoin(X, Y, Z));
        }
      }
    }
  }
};

init();

function init() {
  drawScene();
  const $scene = document.querySelector("#scene");
  $scene.style.width = floor.style.width = w * 200 + "px";
  $scene.style.height = floor.style.height = h * 200 + "px";

  const $RX = document.querySelector("#RX");
  const $RZ = document.querySelector("#RZ");
  if ($RX) {
    // $RX.onchange = () => {
    //   console.log($RX);
    // };
    $RX.onupdate = () => {
      console.log($RX);
    };

    $RX.onchange =
      $RX.onupdate =
      $RX.oninput =
      $RZ.onchange =
      $RZ.onupdate =
      $RZ.oninput =
        () => {
          moveScene((rx = +$RX.value), (rz = +$RZ.value));
        };

    // WILL I?
    // addEventListener로 바꿀수 있나?
    // addMoveSceneEvent(RX, change);
    // addMoveSceneEvent(RX, update);
    // addMoveSceneEvent(RX, input);
    // addMoveSceneEvent(RZ, change);
    // addMoveSceneEvent(RZ, update);
    // addMoveSceneEvent(RZ, input);
  }
}

// function addMoveSceneEvent(target, evt) {
//   target.addEventListener(evt, moveScene((rx = +RX.value), (rz = +RZ.value)));
// }
