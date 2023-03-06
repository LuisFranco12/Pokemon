# pokedex
A digital encyclopedia for the first 151 pokemon.
![image](https://user-images.githubusercontent.com/108766758/222988739-b80ea013-6939-441e-b3ad-aa9af435ecb5.png)

## Description
A Pokedex built with React that allows users to search for and view information about the first generation(151) Pokemon. this Pokedex uses data from the [PokeAPI](https://pokeapi.co/) and displays it in a user-friendly interface.

## Installation
##### To install, first clone the repository to your computer
1. click on the green "clone" button
2. Copy the HTTPS or SSH link
3. open the terminal and navigate to where you would like to clone the project
4. run the command bellow(make sure to use your username)
```
git clone https://github.com/username/Pokemon.git
```    
##### Then, navigate to the project directory and install the dependencies
```
cd Pokemon
```
```
npm install
```

##### Finally, run the project by typing the command below
    npm start
    
## Challenge
My biggest challenge working with the PokéAPI. The API has a lot of nested data structures, which made it difficult to retrieve the information I  needed. 

I overcame the API challenge by mapping through the results array on the "https://pokeapi.co/api/v2/pokemon/" url and then making another fetch request for every pokemon url that I want to display and saving the returned array in a new variable.

## Unsolved Problem
One unsolved problem is implementing a way to hide pagination numbers when there are alot of pokemon being fetched from the PokeAPI. This would make the website look cleaner

## Technologies used  
+ React.js
+ styled-components 
+ [PokeAPI](https://pokeapi.co/).

## Site
[Site](https://pokelibrary.netlify.app/)
