# angularMusicPlayer
A basic music player using Electron, Bootstrap and AngularJS

## Usage

### install dependencies

``` bash
npm install
cd app/
bower install
```

### run the application

in the root folder run the app using this command

``` bash
npm start
```

### create binaries for your app

i recommend using [electron packager :] (https://github.com/electron-userland/electron-packager)

here is an example : 

``` bash
npm install electron-packager -g
```

then run the command : 

``` bash
electron-packager {folder} {app name} --all
```

example:

``` bash
electron-packager musicPlayer/ angMusic --all
```

this will generate a binary version for each possible platform ( linux, mac and windows).