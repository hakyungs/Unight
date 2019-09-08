1. If JIMP isn't installed, install JIMP with this command :

    npm install --save jimp

2. How to run :
    node main.js [image_name] [number_of_rows] [number_of_cols]

    Ex) node main.js "Example1.jpeg" 2 2

3. localhost:3000 will host original photo
localhost:3000/?userRow=0&userCol=0
localhost:3000/?userRow=1&userCol=1
...

Each of these will have corresponding parts of original photo
