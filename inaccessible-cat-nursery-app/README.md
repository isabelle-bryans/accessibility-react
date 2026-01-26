# Cat Nursery App
This is a small React app that is **intentionally built without accessibility best practices** for education purposes. The accessible version of the app in in the `accessible-cat-nursery-app` folder. 

Users can feed cats in a virtual cat nursery to earn points and unlock more cats. This version demonstrates how accessibility issues can appear in typical React components.

## Prerequisites
To run the app, please have installed: 
1. Node.js v24
2. npm (comes automatically with Node.js)
3. VS Code or another code editor

## Running the App
To run the app in dev mode: 
1. Open the command prompt in the folder.
2. Run `npm install` (only required to run once per app)
3. Run `npm run dev`
4. Open the local URL shown in the terminal

## Files to Explore
The following files intentionally contain poor accessibility implementations:
- src\App.jsx
- src\components\Dialog.jsx
- src\components\Nursery.jsx
- src\components\CatCard.jsx