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

## Features TODO

- [] High Score
- [x] The problem is that if I click, there are no reseting on the pickedColorsByUser array, so the 2 arrays have the same length all the time
- [x] The above problem has to be double checked
- [x] Another problem is that in the checkPicks, to lose the game
- [x] Last color doesn't flash (problem in repeatAndPick)
- [x] Make work the timing for flashing
- [] Maybe the checkPick can be enough with checking the 2 arrays with checkArrays(pickedColorsByUser, pickedColorsByApp)


