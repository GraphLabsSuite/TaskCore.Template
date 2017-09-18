import {View, setup, Path, view} from "paper";

export class CommonGraphAdapter {
  public static renderGraph(canvasName: string) {
    window.onload = () => {
      const canvas: HTMLCanvasElement = document.getElementById(canvasName) as HTMLCanvasElement;
      // const scope = new PaperScope();
      // setup(canvas);
      // scope.setup(canvas);
      const ctx = canvas.getContext("2d");
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      // const path: Path = new Path();
      // path.strokeColor = 'black';
      // const start: Point = new Point(100, 100);
      // // Move to start and draw a line from there
      // path.moveTo(start);
      // // Note the plus operator on Point objects.
      // // PaperScript does that for us, and much more!
      // path.lineTo(new Point(200, 250));

      // view.update();
    }
  }
}