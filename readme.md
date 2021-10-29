
# Reactable Looker Custom Visualization

**WIP: Do not use**

## Install

Add the GitHub raw url for dist/reactable.js as the main address for the Looker visualization.

Under Advanced Options -> Dependencies, add: 

https://unpkg.com/react@17/umd/react.development.js  

https://unpkg.com/react-dom@17/umd/react-dom.development.js  

https://unpkg.com/reactable@1.1.0/bower_components/jquery/src/sizzle/dist/sizzle.min.js×

## Dev Hints

Because this extension imports other modules and requires react, we need to use webpack to build it into valid JS for Looker to import. Run:

```
yarn install # setup all dependencies
yarn build # to update the result in dist
```

For local testing it is helpful to point Looker at an https address instead of the GitHub dist raw URL, I recommend using ngrok with these steps:

```
# in a first terminal session
#cd reactable-cv 
python -m http.server 8080 
# in a second terminal session
./ngrok http 8080
```

This will create a public https address that can add to looker, e.g: 

```
# ngrok output
Forwarding                    https://ea7c-34-123-74-161.ngrok.io -> http://localhost:8080  
```

In Looker,

Main: https://ea7c-34-123-74-161.ngrok.io/dist/reactable.js