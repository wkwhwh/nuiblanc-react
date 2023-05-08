import Sketch from "react-p5";
import p5Types from "p5";

let obj: p5Types.Geometry;

export default function ArtworkWtmf() {
  const preload = (p5: p5Types) => {
    obj = p5.loadModel("/artwork_wtmf_V0001.obj", true);
  };

  // See annotations in JS for more information
  const setup = (p5: p5Types) => {
    p5.createCanvas(window.innerWidth, window.innerHeight, "webgl");
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  const draw = (p5: p5Types) => {
    if (window.innerWidth < 800) {
      p5.scale(2, -2);
    } else {
      p5.scale(4, -4);
    }

    p5.angleMode(p5.DEGREES);
    p5.noStroke();
    p5.background(0, 0);
    p5.ambientLight(70);
    p5.pointLight(
      200,
      200,
      200,
      p5.mouseX - p5.width / 2,
      p5.mouseY - p5.height / 2,
      70
    );

    p5.rotateY(-90 - p5.frameCount * 0.01);
    p5.model(obj);
    p5.ambientMaterial(250);
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
}
