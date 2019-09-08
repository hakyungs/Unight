1. If JIMP isn't installed, install JIMP with this command :

    npm install --save jimp

2. Run this code :
    node main.js

3. localhost:3000 will host original photo
localhost:3000/?user=0
localhost:3000/?user=1
...

Each of these will have corresponding parts of original photo


NOTE : Currently hard-coded for 2x2 (for demo purposes)
This can easily be modified by going into main.js and changing the vars at the
top. image-split works as a module; you can just import the module and use the
splitImage function inside.

