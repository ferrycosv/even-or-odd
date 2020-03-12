# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

- `index.html` and folder structure with empty files

## 1. Data & Log

- `data/strings.js` & `log.js`

## 2. Init (not finished!)

- The code in `init.js` that renders the current list for users is complete.
- `renderList` DOM Component function to render the list on the screen
- `index.html` is complete, just waiting for the code behind it

## 3. User Story: `reset` (completed for you)

- A user can reset stat & see a cleared User Interface
- I wrote the code in `listeners/reset.js` & `handlers/reset.js`
- The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`. in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: `save`

- A user can save the value typed in the input field.
- I wrote the code in `listeners/save.js` & `handlers/save.js`
- The handler function stores in the `strings` object the values inside the input text field, and performs the logic to separate the input in even, odds and not a number values and save them in the corresponding data array, the handler is connected to the UI with a `click` event.

## 5. User Story: `evens`

- A user can display on screen the values saved in the evens data array.
- I wrote the code in `listeners/display-evens.js` & `handlers/display-evens.js`
- The handler function displays the `strings` object evens array values to the screen using a list and changes the `displayed` attribute to 'evens', the handler is connected to the UI with a `click` event.

## 6. User Story: `odds`

- A user can display on screen the values saved in the odds data array.
- I wrote the code in `listeners/display-odds.js` & `handlers/display-odds.js`
- The handler function displays the `strings` object odds array values to the screen using a list and changes the `displayed` attribute to 'odds', the handler is connected to the UI with a `click` event.

## 7. User Story: `NaNy`

- A user can display on screen the values saved in the evens data array.
- I wrote the code in `listeners/display-nany.js` & `handlers/display-nany.js`
- The handler function displays the `strings` object NaNy array values to the screen using a list and changes the `displayed` attribute to 'NaNy', the handler is connected to the UI with a `click` event.
