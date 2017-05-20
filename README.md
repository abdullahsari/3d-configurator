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
## Browser support
![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![IE](https://github.com/alrra/browser-logos/blob/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) | ![Edge](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true)
--- | --- | --- | --- | --- | --- |
8+ ✔ | 4+ ✔ | 11 ✔ | 12.1+ ✔ | 5.1+ ✔ | 12+ ✔ |
## Credits
* [Joey Yakimowich-Payne](https://www.iconfinder.com/jyapayne) (Sun icon)
* [Romualdas Jurgaitis](https://www.iconfinder.com/Sakagami) (Cam icon)
* [Designmodo](https://www.iconfinder.com/designmodo) (Plus icon)
* [Stephen Hutchings](http://typicons.com/) (Edit icon)
* [Tango](http://tango.freedesktop.org/) (Error icon)
* [Paomedia](https://www.iconfinder.com/paomedia) (Cog icon)
* [Sound Jay](https://www.soundjay.com/) (Sounds)
## License
[MIT](https://opensource.org/licenses/MIT)