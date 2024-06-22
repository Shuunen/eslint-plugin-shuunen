/**
 * @param {object | null} object
 * @param {number} maxLevel
 */
function capNesting(object, maxLevel) {
  // Helper function to handle the recursion
  /**
   * @param {object | null} currentObject
   * @param {number} currentLevel
   */
  function capHelper(currentObject, currentLevel) {
    // If the current level exceeds the max level, return a placeholder (null or any value you want)
    if (currentLevel > maxLevel) return
    // If the current object is not an object, return it as is
    if (typeof currentObject !== 'object' || currentObject === null) return currentObject // eslint-disable-line consistent-return
    // Create a new object or array depending on the current object type
    const result = Array.isArray(currentObject) ? [] : {}
    // Iterate through the keys of the current object
    for (const key in currentObject)
      if (Object.hasOwn(currentObject, key))
        // @ts-expect-error
        result[key] = capHelper(currentObject[key], currentLevel + 1) // eslint-disable-line no-magic-numbers
    return result // eslint-disable-line consistent-return
  }
  // Start the recursion with the initial object and level 1
  return capHelper(object, 1) // eslint-disable-line no-magic-numbers
}

module.exports = { capNesting }
