function evensHandler() {
  debugger;
  // write me!
  strings.displayed = 'evens';
  const currentListComponent = renderList(strings.evens, 'evens');

  const listContainer = document.getElementById("selected");
  listContainer.innerHTML = "";
  listContainer.appendChild(currentListComponent);  
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'evens',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
