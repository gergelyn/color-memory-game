# DOCUMENTATION

## Folder Structure
```
css/
 |
 ` - style.css
 ` - style.css.map
js/
 | 
 ` - app.js
scss/
 |
 | - components/
 |    | - _buttons.scss
 |
 | - layout/
 |    | - _footer.scss
 |    | - _header.scss
 |    | - _main.scss
 |
 | - utilities/
 |    | - _variables.scss
 |
 ` - style.scss
index.html
```
### scss/

**Components:** holds all of the styles for buttons, the boxes...etc.

**Layout:** contains all styles involved with the layout of this project, such as styles for header, footer and main sections.

**Utilities:** holds helper files, variables, functions, mixins and other config files.

## Features

## Features & TODOs
- [] High Score
- [] Give sounds to clicks
- [x] Favicon generating has to be done with 512x512 
- [x] Timing: Repeating has to be faster
- [x] Maybe the checkPick can be enough with checking the 2 arrays with checkArrays(pickedColorsByUser, pickedColorsByApp)
- [x] Create a function that generates random numbers (from 0 to 4)
- [x] Create an empty array for the colors
- [x] Create an empty array for the users input
- [x] Create a switch statement to pick and push a color by the generated random number to the array
- [x] Create a function that checks if the 2 array is right (check by clicks, index by index).
- [x] If the user clicks on each box, run the array comparisor, count the clicks, because that's will be the index, what should be the base
- [x] The problem is that if I click, there are no reseting on the pickedColorsByUser array, so the 2 arrays have the same length all the time
- [x] The above problem has to be double checked
- [x] Another problem is that in the checkPicks, to lose the game
- [x] Last color doesn't flash (problem in repeatAndPick)
- [x] Make work the timing for flashing



