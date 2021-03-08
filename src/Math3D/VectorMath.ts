import { isEqual } from 'lodash';

import { Vector3d } from '../Vector/Vector3d';
import { RADIAN } from './constants';

class VectorMath3D {
  /**
   * Checks if two vectors are equal.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns `true` if vectors are equal, `false` otherwise
   *
   */
  isEqual(firstVector: Vector3d, secondVector: Vector3d): boolean {
    return isEqual(firstVector, secondVector);
  }

  /**
   * Checks if two vectors are collinear.
   *
   * @remarks
   * There 3 Conditions for vectors to be collinears:
   * 1) Two vectors `a` and `b` are collinear, if there is a number `n` such,
   * that `a = n * b`
   * 2) Two vectors are collinear if the ratios of their coordinates are equal.
   * 3) Two vectors are collinear if their cross product is equal to the zero vector.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns `true` if vectors are collinear, `false` otherwise
   *
   */
  isCollinear(firstVector: Vector3d, secondVector: Vector3d): boolean {
    // Only if both have or have no zero values:
    if (firstVector.hasZeroCoordinates === secondVector.hasZeroCoordinates) {
      return firstVector.hasZeroCoordinates
        ? this.isCollinearWithNullCoordinates(firstVector, secondVector)
        : this.isCollinearWithRatio(firstVector, secondVector);
    } else {
      const crossProduct = this.crossProduct(firstVector, secondVector);
      return Object.values(crossProduct).every((coor) => coor === 0);
    }
  }

  /**
   * Checks if two vectors are collinear.
   *
   * @remarks
   * Two vectors `a` and `b` are collinear, if there is a number `n` such,
   * that `a = n * b`
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns `true` if vectors are collinear, `false` otherwise
   *
   */
  isCollinearWithNullCoordinates(firstVector: Vector3d, secondVector: Vector3d): boolean {
    if (firstVector.isZeroVector || secondVector.isZeroVector) return true;

    const firstVectorArray = Object.values(firstVector.coordinates);
    const secondVecondArray = Object.values(secondVector.coordinates);
    const nonZeroIndex = firstVectorArray.findIndex((coor) => coor !== 0);

    const ratio = firstVectorArray[nonZeroIndex] / secondVecondArray[nonZeroIndex];
    const multipledArr = Object.values(this.multiplyByNum(secondVector, ratio));

    return multipledArr.every((coor, i) => coor === firstVectorArray[i]);
  }

  /**
   * Checks if two vectors are collinear.
   *
   * @remarks
   * `Two vectors are collinear if the ratios of their coordinates are equal.`
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns `true` if vectors are collinear, `false` otherwise
   *
   */
  isCollinearWithRatio(firstVector: Vector3d, secondVector: Vector3d): boolean {
    const { x: x1, y: y1, z: z1 } = firstVector.coordinates;
    const { x: x2, y: y2, z: z2 } = secondVector.coordinates;
    return [x1 / x2, y1 / y2, z1 / z2].every((elem, i, arr) => elem === arr[0]);
  }

  /**
   * Checks if two vectors' length are equal.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns `true` if vectors' length are equal, `false` otherwise
   *
   */
  isEqualLength(firstVector: Vector3d, secondVector: Vector3d) {
    return firstVector.length === secondVector.length;
  }

  /**
   * Cross product computation.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns Cross product between `firstVector` and `secondVector`
   *
   */
  crossProduct(firstVector: Vector3d, secondVector: Vector3d) {
    const { x: x1, y: y1, z: z1 } = firstVector.coordinates;
    const { x: x2, y: y2, z: z2 } = secondVector.coordinates;

    return {
      x: y1 * z2 - z1 * y2,
      y: z1 * x2 - x1 * z2,
      z: x1 * y2 - y1 * x2,
    };
  }

  /**
   * Algebraic interpretation of dot product.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns Dot product of two vectors
   *
   */
  dotProcuctAlg(firstVector: Vector3d, secondVector: Vector3d): number {
    const { x: x1, y: y1, z: z1 } = firstVector.coordinates;
    const { x: x2, y: y2, z: z2 } = secondVector.coordinates;
    return x1 * x2 + y1 * y2 + z1 * z2;
  }

  /**
   * Geometric interpretation of dot product.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns Dot product of two vectors
   *
   */
  dotProductGeo(lengthOfFirstVector: number, lengthOfSecondVector: number, angle: number) {
    return lengthOfFirstVector * lengthOfSecondVector * Math.cos(angle);
  }

  /**
   * Calculate angle between two vectors.
   *
   * @param firstVector - The first vector
   * @param secondVector - The second vector
   * @returns angle between two vectors or `-1` if startPoints are not the same;
   *
   */
  angleBetweenVectors(firstVector: Vector3d, secondVector: Vector3d, inRad = false) {
    if (!isEqual(firstVector.startPoint, secondVector.startPoint)) return -1;

    const dotProduct = this.dotProcuctAlg(firstVector, secondVector);
    const modulesProduct = firstVector.length * secondVector.length;
    const arccos = Math.acos(dotProduct / modulesProduct);

    return inRad ? arccos : arccos * RADIAN;
  }

  /**
   * Multiplying a vector by a number.
   *
   * @param vector - The vector
   * @param num - The number
   * @returns Coordinates of new vector
   *
   */
  multiplyByNum(vector: Vector3d, num: number) {
    const { x, y, z } = vector.coordinates;
    return {
      x: x * num,
      y: y * num,
      z: z * num,
    };
  }

  /**
   * Addition of two vectors.
   *
   * @param vector - The vector
   * @param secondVector - The second vector
   * @returns Coordinates of new vector
   *
   */
  addition(firstVector: Vector3d, secondVector: Vector3d) {
    const { x: x1, y: y1, z: z1 } = firstVector.coordinates;
    const { x: x2, y: y2, z: z2 } = secondVector.coordinates;
    return {
      x: x1 + x2,
      y: y1 + y2,
      z: z1 + z2,
    };
  }

  /**
   * Subtraction of two vectors.
   *
   * @param vector - The vector from which to substract
   * @param secondVector - The vector to be substracted
   * @returns Coordinates of new vector
   *
   */
  substraction(firstVector: Vector3d, secondVector: Vector3d) {
    const { x: x1, y: y1, z: z1 } = firstVector.coordinates;
    const { x: x2, y: y2, z: z2 } = secondVector.coordinates;
    return {
      x: x1 - x2,
      y: y1 - y2,
      z: z1 - z2,
    };
  }
}

export const Vector3DMath = new VectorMath3D();
