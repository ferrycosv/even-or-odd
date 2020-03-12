function resetHandler() {
  // reset state
  strings.displayed = 'evens';
  strings.evens = [];
  strings.odds = [];
  strings.NaNy = [];

  // re-render UI from state
  const currentDisplayed = strings.displayed;
  const currentArray = strings[currentDisplayed];

  const currentListComponent = renderList(currentArray, currentDisplayed);

  const listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  listContainer.appendChild(currentListComponent);
  document.getElementById("input").value = '';

  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    strings: JSON.parse(JSON.stringify(strings))
  });
};
