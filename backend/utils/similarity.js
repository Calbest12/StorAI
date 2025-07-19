// backend/utils/similarity.js

import euclidean from 'compute-euclidean-distance';

/**
 * Returns the most similar entry to the input vector from a list of candidates.
 * @param {number[]} input - The input vector
 * @param {{ vector: number[], id: string }[]} candidates - Each candidate has an id and a vector
 * @returns {{ id: string, distance: number }} - Closest candidate
 */
export function findClosestMatch(input, candidates) {
  if (!input || !Array.isArray(input) || input.length === 0) return null;

  let closest = null;
  let minDistance = Infinity;

  for (const c of candidates) {
    const dist = euclidean(input, c.vector);
    if (dist < minDistance) {
      minDistance = dist;
      closest = { id: c.id, distance: dist };
    }
  }

  return closest;
}
