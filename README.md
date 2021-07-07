# Game to subscribe to the newsletter




## Project Structure

Any project created with this boilerplate will follow the structure below:

```
Project
│   README.md
│   package.json
|   package-lock.json
└───src
│   │   index.html
│   └───styles
|   └───scss
|   |   └───main.scss
│   └───scripts
│   |   └───index.js
|   └───images
|   └───fonts
└───dist
```

### `README.md`

The README should contain a brief description of your project, feel free to delete this guide or rename it to add your own description.

### `package.json` & `package-lock.json`

These files contain various information about you, your project and the project dependencies, as well as useful scripts to help you with the development process. Please do not edit these files for the time being, except where you're asked to. In the future, you will learn more about project dependencies.

### `src` & `index.html`

The `src` folder contains any file you would want to add to your website before any processing is done to it. **This is the main folder you will be working in**.

`index.html` is the main page for your website which you will be working on. Feel free to add any new `html` pages you create directly in the `src` folder.

### `scripts` & `index.js`

The `scripts` folder will contain any `js` files you will add to your website. `index.js` is the _**main**_ script file of your project. Feel free to use this file to add any JavaScript that you want to experiment with. You will learn more about JavaScript in the browser in the future.

### `scss` & `main.scss`

The `scss` folder will contain any `scss` or `css` files (depending on your preference). In order to include additional styles in your project, you must import them to `main.scss`.

`main.scss` is your style _**entry point**_. Any other `scss` or `css` imported to this file can be used, and any styles written directly to this file will be applied.

### `images` and `fonts`

For the sake of organization and good project structure practices, please use these folders in order to keep your images and fonts respectively.

### `dist`

The `dist` folder will be automatically generated whenever your run the build script:

```bash
npm run build
```

This folder will contain your built project, ready to be deployed online. It is excluded from `git` tracking since it is not customary to include compiled code in a development project.

## Credits

Boilerplate created by Itamar Givon ([@itamargiv](https://github.com/itamargiv))

Edited by Fran Borg ([@FranBte](https://github.com/FranBte))
