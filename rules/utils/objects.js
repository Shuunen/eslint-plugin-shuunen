/**
 * @param {object | null} object
 * @param {number} maxLevel
 */
function capNesting (object, maxLevel) {
  const one = 1
  /**
   * @param {object | null} currentObject
   * @param {number} currentLevel
   */
  function capHelper (currentObject, currentLevel) {
    if (currentLevel > maxLevel) return "..."
    if (typeof currentObject !== 'object' || currentObject === null) return currentObject
    const result = Array.isArray(currentObject) ? [] : {} // @ts-expect-error
    for (const key in currentObject) if (Object.hasOwn(currentObject, key)) result[key] = capHelper(currentObject[key], currentLevel + one)
    return result
  }
  return capHelper(object, one)
}

module.exports = { capNesting }
