# Anole
A chrome extension for transforming selected text
![](doc/img/anole-in-action.png)

## Supported transofrmations...
- copyToCamelCase
- copy-to-kebab-case
- copy to lower case
- copy_to_snake_case
- Copy To Start Case
- COPY TO UPPER CASE
 
## Build
1. This repo includes the unpacked extension.  You should not need to build 
   unless you want to debug or change something.  If that's the case...
1. You'll need the dev dependencies so run `npm install`.
1. Use `npm run build` to transpile and minify changes in [src/anole.js](src/anole.js)
   to [ext/anole.min.js](ext/anole.min.js).  To transpile a more human readable 
   script for debugging you can use `npm run build-debug` instead.

## Installation — unpacked in developer mode
1. The the [/ext](ext/) folder contains the unpacked extension. Save the 
   contents of this folder locally to a place they will remain while in use.
1. From Chrome's menu select **More tools** > **Extensions** or browse to:
   `chrome://extensions`.
1. Enable **Developer mode** via the switch at upper-right.
1. Click on **Load unpacked**.
1. Select the local folder containing anole and click **OK**.
1. In Chrome select some text on a web page, right click and you should see the
   Anole context menu that offers the sub-menu actions as picture above.

## Installation — Chrome Web Store [**COMING SOON**]