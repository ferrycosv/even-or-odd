function nanyHandler() {
  debugger;
  // write me!
  strings.displayed = "NaNy";
  const currentListComponent = renderList(strings.NaNy, "NaNy");

  const listContainer = document.getElementById("selected");
  listContainer.innerHTML = "";
  listContainer.appendChild(currentListComponent);
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "NaNy",
    strings: JSON.parse(JSON.stringify(strings))
  });
}
