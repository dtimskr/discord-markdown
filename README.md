# Discord Markdown

> A lightweight and easy-to-use library for formatting text with Discord markdown syntax

[![NPM](https://nodei.co/npm/@dtim/discord-markdown.png?mini=true)](https://npmjs.org/package/@dtim/discord-markdown)
[![npm version](https://img.shields.io/npm/v/@dtim/discord-markdown.svg)](https://www.npmjs.com/package/@dtim/discord-markdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📦 Installation

```bash
npm install @dtim/discord-markdown
```

## 🚀 Quick Start

```javascript
const dm = require('@dtim/discord-markdown');

// Simple formatting
message.channel.send(dm.bold('Hello World!'));
message.channel.send(dm.italics('Hello World!'));
message.channel.send(dm.code('const x = 5;'));
```

## 📚 API Reference

### Basic Formatting

| Function | Description | Example Output |
|----------|-------------|----------------|
| `bold(text)` | Makes text **bold** | `**text**` |
| `italics(text)` | Makes text *italic* | `*text*` |
| `boldItalics(text)` | Makes text ***bold and italic*** | `***text***` |
| `underline(text)` | Makes text __underlined__ | `__text__` |
| `strikethrough(text)` | Makes text ~~strikethrough~~ | `~~text~~` |

### Combined Formatting

| Function | Description | Example Output |
|----------|-------------|----------------|
| `underlineItalics(text)` | Underlined and italic | `__*text*__` |
| `underlineBold(text)` | Underlined and bold | `__**text**__` |
| `underlineBoldItalics(text)` | Underlined, bold and italic | `__***text***__` |

### Code Formatting

| Function | Description | Example Output |
|----------|-------------|----------------|
| `code(text)` | Inline code | `` `text` `` |
| `multiCode(text)` | Code block | ` ```text``` ` |

## 💡 Usage Examples

### Discord.js Bot Example

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
const dm = require('@dtim/discord-markdown');

client.on('message', message => {
    if (message.content === '!format') {
        message.channel.send(dm.bold('This is bold!'));
        message.channel.send(dm.italics('This is italic!'));
        message.channel.send(dm.code('console.log("Hello");'));
        message.channel.send(dm.multiCode('function example() {\n    return true;\n}'));
    }
});
```

### Combining Multiple Formats

```javascript
const dm = require('@dtim/discord-markdown');

// You can combine functions
const text = dm.bold(dm.italics('Nested formatting'));
// Result: ***text***

// Or use combined functions
const text2 = dm.underlineBoldItalics('All formats');
// Result: __***text***__
```

### Using Numbers

The library accepts both strings and numbers:

```javascript
const dm = require('@dtim/discord-markdown');

dm.bold(123);        // Works! Returns "**123**"
dm.italics(42);      // Works! Returns "*42*"
dm.code(3.14);       // Works! Returns "`3.14`"
```

### Error Handling

The library includes built-in validation for unsupported types:

```javascript
const dm = require('@dtim/discord-markdown');

try {
    dm.bold({}); // Will throw TypeError
} catch (error) {
    console.error('Expected string or number');
}
```

## 📝 License

MIT © [dtim](https://github.com/dtimskr)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@dtim/discord-markdown)
- [GitHub Repository](https://github.com/dtimskr/discord-markdown)
- [Report Issues](https://github.com/dtimskr/discord-markdown/issues)
