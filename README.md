# base64-enc-dec

An easy-to-use Base64 encoder and decoder

### Installation

`npm install base64-enc-dec`
- to just install the package

`npm install base64-enc-dec --save`
- to add the package directly to your package.jsom

### Usage  

``` javascript
var base64 = require('base64-enc-dec');

var string = "Hello, World!";

let encoded = base64.encode(string);
console.log(encoded); // SGVsbG8sIFdvcmxkIQ==

let decoded = base64.decode(encoded);
console.log(decoded); // Hello, World!
```

### License

Licensed under MIT. See [LICENSE](LICENSE) for more information.  

------

Created by [Mark Amirkan](https://markamirkan.com)