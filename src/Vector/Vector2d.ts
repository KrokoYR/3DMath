import { Point2d } from '../Point/Point2d';

export class Vector2d {
  constructor(firstPoint: Point2d, secondPoint: Point2d) {
    this.startPoint = firstPoint;
    this.endPoint = secondPoint;
  }

  startPoint: Point2d;

  endPoint: Point2d;

  get coordinates() {
    const { startPoint, endPoint } = this;
    return {
      x: endPoint.x - startPoint.x,
      y: endPoint.y - startPoint.y,
    };
  }

  get length() {
    const { x, y } = this.coordinates;
    const root = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (Number.isNaN(root)) console.error(`Length cannot be less than zero`);

    return root && Math.abs(root);
  }
}
