# Logo Generator
This application allows users to create a simple logo with only four prompts!
 
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
 
## Installation
Clone this repository by using 
```
git clone git@github.com:Teacher2Coder/logo-generator.git
```

Upon opening the repository, install the dependant packages by using
```
npm install
```


 
## Usage
After the dependant packages have been installed, the user can initialize the application by running the command
```
node index.js
```

The user will be prompted with the question: "What text would like in your logo? (Note: only three characters, please)" if the user enters more than three characters, no logo will be rendered.

Next, the user will be asked to select a color for their text to be in the logo. Their choices include red, orange, yellow, green, blue, purple, brown, black, white and grey.

Next, the user will be asked to select a shape for their logo. Their choices will include circle, oval, triangle, square, rectangle, pentagon, hexagon, octogon and diamond.

Finally, the user will be asked to select a color for the shape. Their choices include red, orange, yellow, green, blue, purple, brown, black, white and grey.

When all prompts have been answered an svg file will be created named after the text that the user inputed. The user can navigate over to the newly created file and observe it. When the user opens the file in a browser, the logo will available for the user to see.

If the user wants to see examples, they can look in the examples directory for other svg files created using the application.
 
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2024 Ethan Robert Owens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 
## Contributing
If you have any code suggestions, please fork the repository and send me a mesage on GitHub or contact me via email (below)
 
## Tests
To run the appropriate tests, use
```
npm run test
```

All test will be run and several svg files will be created. Feel free to delete the svg files after the test is complete.
 
## Questions
* GitHub: [@Teacher2Coder](https://www.github.com/Teacher2Coder)
* Email: ethan.owens4@gmail.com