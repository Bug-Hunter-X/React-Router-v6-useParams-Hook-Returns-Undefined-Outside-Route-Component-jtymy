# React Router v6 useParams Hook Issue

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The `useParams` hook is designed to be used within a component rendered by a `<Route>` or `<Routes>` component.  Accessing it from a parent component results in `undefined` being returned, leading to runtime errors or unexpected behavior.

## Problem
The `bug.js` file contains code that incorrectly attempts to use the `useParams` hook outside of a route component. This results in the `params` object being undefined. 

## Solution
The `bugSolution.js` file demonstrates the correct usage of the `useParams` hook by placing it inside a component rendered by a Route.

## How to run
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm start`