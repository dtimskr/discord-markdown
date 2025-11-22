/**
 * Discord Markdown Utility Library
 * Provides easy-to-use functions for formatting text with Discord markdown syntax
 */

// Markdown delimiters
const CODE_DELIMITER = "`";
const MULTI_CODE_DELIMITER = "```";

/**
 * Validates and converts input to string
 * @param {*} text - Value to validate and convert
 * @returns {string} Converted string value
 * @throws {TypeError} If text cannot be converted to string
 */
const validateAndConvert = (text) => {
    if (typeof text === "string" || typeof text === "number") {
        return String(text);
    }
    throw new TypeError(`Expected string or number, got ${typeof text}`);
};

/**
 * Wraps text with specified delimiters
 * @param {string|number} text - Text to wrap
 * @param {string} delimiter - Delimiter to use
 * @returns {string} Wrapped text
 */
const wrap = (text, delimiter) => {
    const textString = validateAndConvert(text);
    return `${delimiter}${textString}${delimiter}`;
};

/**
 * Wraps text in italics markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with italics
 */
module.exports.italics = (text) => wrap(text, "*");

/**
 * Wraps text in bold markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with bold
 */
module.exports.bold = (text) => wrap(text, "**");

/**
 * Wraps text in bold and italics markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with bold and italics
 */
module.exports.boldItalics = (text) => wrap(text, "***");

/**
 * Wraps text in underline markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with underline
 */
module.exports.underline = (text) => wrap(text, "__");

/**
 * Wraps text in underline and italics markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with underline and italics
 */
module.exports.underlineItalics = (text) => wrap(wrap(text, "*"), "__");

/**
 * Wraps text in underline and bold markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with underline and bold
 */
module.exports.underlineBold = (text) => wrap(wrap(text, "**"), "__");

/**
 * Wraps text in underline, bold, and italics markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with underline, bold, and italics
 */
module.exports.underlineBoldItalics = (text) => wrap(wrap(text, "***"), "__");

/**
 * Wraps text in strikethrough markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text with strikethrough
 */
module.exports.strikethrough = (text) => wrap(text, "~~");

/**
 * Wraps text in inline code markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text as inline code
 */
module.exports.code = (text) => wrap(text, CODE_DELIMITER);

/**
 * Wraps text in multi-line code block markdown
 * @param {string|number} text - Text to format
 * @returns {string} Formatted text as code block
 */
module.exports.multiCode = (text) => wrap(text, MULTI_CODE_DELIMITER);