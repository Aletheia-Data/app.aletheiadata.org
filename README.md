# DASHBOARD Aletheia Data

Este servicio tiene como tarea registrar una copia de toda información publica emitida por las autoridades y hacerlas “unstoppable” a trevés de la tecnología blockchain.

Nuestra misión es democratizar la información pública y facilitar el acceso a esta.

## Requirements

- [npm](https://www.npmjs.com/)

## Installation

1. Install project packages:
    ```bash
    npm install
    ```

## Quick Start

1. Set up project using `env.dist` template to setup enviroment variables

2. Then run:
    ```bash
    npm start
    ```

## Code Style Guide

### JavaScript

* Two spaces indentation.
* Double quotes are preferred over single.
* Write code in functional style with minimum side effects when possible.
* Don't use function statements. Instead, create anonymous functions and
assing them to constants for consistency with other constants.

    ```javascript
    // No
    function doThing(a, b) {return a * b;}

    // Yes
    const doThing = function(a, b) {return a * b;};
    ```

* Do not use quotes in object keys.

    ```javascript
    // No
    {'a': "testtest"}

    // Yes
    {a: "testtest"}
    ```

* Use `===` for comparing instead of `==`. JavaScript is weakly typed
language, so 5 == '5'. This ambiguity could lead to hard-to-find bugs.

    ```javascript
    if (a === 5) {
      ...
    }
    if ($(this).val() === "something") {
      ...
    }
    if (typeof a === "undefined") {
      ...
    }

    // Exception: this compares both to 'null' and 'undefined'.
    if (item == null) {

    }
    ```

* Cache list length into a variable. You could afford 2x loop performance
increase with this on some browsers.

    ```javascript
    for (const i = 0, length = someList.length; i < length; i++) {
      doSomething(someList[i]);
    }
    ```

## Contributing

Las pull request son bienvenidas. Para cambios importantes, abra primero un (issue)[https://github.com/Aletheia-Data/app.aletheiadata.org/issues/new] para discutir qué le gustaría cambiar.

Por favor asegúrese de hacer las pruebas correspondondientes.

## Gitpod

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/EnzoVezzaro/heptastadion.aletheiadata.org)

## License

MIT License

Copyright (c) 2020 Aletheia Data

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

[MIT](https://choosealicense.com/licenses/mit/)
