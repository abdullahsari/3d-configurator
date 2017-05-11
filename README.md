3D Configurator
===============
3D configurator is a web application that is powered by the [WebGL API](https://www.khronos.org/webgl/). [BabylonJS](http://www.babylonjs.com/) is the abstraction layer on top of this low level API. This is purely a proof of concept that can be extended to a fully fetched project. The application in its current state only allows the configuration of basic structures with some additional features.
## Setup
### Initial steps
Install these in order:
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)

Check if the PATH environment variable is setup. One should be able to run the following command from anywhere (= Command Prompt, Powershell ...):
```shell
yarn
```
### Installation of dependencies
Navigate to the project root and run the following command:
(This process may take a couple of minutes, depening on the internet connection)
```shell
yarn install
```
One should now be able to run the NPM scripts declared in package.json.
### Launching the development server
Navigate to the project root and run the following command:
```shell
yarn dev    
```
This command will commence webpack-dev-server and host the files in the memory from http://localhost:8080.
e.g.:
* http://localhost:8080/js/bundle.js
* http://localhost:8080/css/styles.css

*Please note that these files are served from memory and are not located anywhere in the project folder itself.*
## Credits

## License
[MIT](https://opensource.org/licenses/MIT)