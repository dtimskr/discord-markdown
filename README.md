# Discord Markdown

## Installation
[![NPM](https://nodei.co/npm/@dtim/discord-markdown.png?mini=true)](https://npmjs.org/package/@dtim/discord-markdown)

## Usage
```javascript
const dm = require('@dtim/discord-markdown');
[...]

message.channel.send(dm.italics('text'));
message.channel.send(dm.bold('text'));
message.channel.send(dm.boldItalics('text'));
message.channel.send(dm.underline('text'));
message.channel.send(dm.underlineItalics('text'));
message.channel.send(dm.underlineBold('text'));
message.channel.send(dm.underlineBoldItalics('text'));
message.channel.send(dm.strikethrough('text'));
message.channel.send(dm.code('text'));
message.channel.send(dm.multiCode('text'));
```