/**
 *
 * Testing document if we can use our own types
 *
 * <example>
    :test.js
    ...
 * </example>
 *
 * @alias browser.customDoc
 * @return {Nothing} does nothing 
 * @uses protocol/elements
 * @type documentation
 *
 */

let customDocumentation = function () {
    return this.unify(this.windowHandle(), {
        extractValue: true
    })
}

export default customDocumentation
