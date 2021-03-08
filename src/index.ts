// import { Point2d } from './Point/Point2d';
import { Point3d } from './Point/Point3d';
import { Vector3d } from './Vector/Vector3d';

// const point2d = new Point2d(1, 2);
const point3d_1 = new Point3d(1, 2, 3);
const point3d_2 = new Point3d(1, 2, 3);

const vector3d = new Vector3d(point3d_1, point3d_2);
console.log(vector3d.coordinates);
