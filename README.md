# Mi first npm package made using Vite
This is a testing package with two objectives:
- I want to learn how to publish a package to npm
- I want to use other packages to make my own package so I think it'll be better to use a bundler like Vite

I've followed [this tutorial](https://onderonur.netlify.app/blog/creating-a-typescript-library-with-vite/) called "Creating a typescript library with vite"

## Library functionality
Basic geometry calculations:
- Perimeters
- Areas

##How to Use

```javascript
import {circleArea, circlePerimeter} from "@arenamovediza/my-ts-lib";

console.log(circleArea(3));
console.log(circlePerimeter(3));
```