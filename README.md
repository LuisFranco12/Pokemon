# pokedex
A digital encyclopedia of the first 151 pokemon.
![image](https://user-images.githubusercontent.com/108766758/223137078-71e2854b-54ad-44ed-b84a-1d7a1021ac1b.png)


## Description
A Pokedex built with React that allows users to search for and view information about the first generation(151) Pokemon. This Pokedex uses data from the [PokeAPI](https://pokeapi.co/) and displays it in a user-friendly interface.

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
My biggest challenge was working with the PokéAPI. The API has a lot of nested data structures, which made it difficult to retrieve the information I  needed. 

To overcome the challenge of working with the PokéAPI, I implemented a solution that involved mapping through the results array on the "https://pokeapi.co/api/v2/pokemon/" endpoint. For each Pokémon in the array, I made a separate fetch request to the corresponding url to retrieve the necessary information. Specifically, I fetched the URLs of all first-generation Pokémon that I wanted to display and saved the returned array in a variable. 

## Unsolved Problem
A improvement that could be made is implementing a way to hide pagination numbers when there is a large amount of pokemon being fetched from the PokeAPI. This would make the website look cleaner.

## Technologies used  
+ React.js
+ styled-components 
+ [PokeAPI](https://pokeapi.co/).

## Site
[Site](https://pokelibrary.netlify.app/)
