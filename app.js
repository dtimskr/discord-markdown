const x = "`";
const xx = "```";

module.exports.italics = (text) => {
    return `*${text}*`
};

module.exports.bold = (text) => {
    return `**${text}**`
};

module.exports.boldItalics = (text) => {
    return `***${text}***`
};

module.exports.underline = (text) => {
    return `__${text}__`
};

module.exports.underlineItalics = (text) => {
    return `__*${text}*__`
};

module.exports.underlineBold = (text) => {
    return `__**${text}**__`
};

module.exports.underlineBoldItalics = (text) => {
    return `__***${text}***__`
};

module.exports.strikethrough = (text) => {
    return `~~${text}~~`
};

module.exports.code = (text) => {
    return `${x}${text}${x}`
}

module.exports.multiCode = (text) => {
    return `${xx}${text}${xx}`
};