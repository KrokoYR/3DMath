import { Point2d } from '../Point/Point2d';

export class Vector2d {
  constructor(firstPoint: Point2d, secondPoint: Point2d) {
    this.startPoint = firstPoint;
    this.endPoint = secondPoint;
  }

  startPoint: Point2d;

  endPoint: Point2d;

  get coordinates(): Point2d {
    const { startPoint, endPoint } = this;
    return {
      x: endPoint.x - startPoint.x,
      y: endPoint.y - startPoint.y,
    };
  }

  get length(): number {
    const { x, y } = this.coordinates;
    const root = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    return Math.abs(root);
  }

  get hasZeroCoordinates(): boolean {
    return Object.values(this.coordinates).some((coor) => coor === 0);
  }

  get isZeroVector(): boolean {
    return Object.values(this.coordinates).every((coor) => coor === 0);
  }
}
