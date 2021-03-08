import { Point2d } from './Point2d';

export class Point3d extends Point2d {
  constructor(pointX: number, pointY: number, pointZ: number) {
    super(pointX, pointY);
    this.z = pointZ;
  }

  z: number;
}
