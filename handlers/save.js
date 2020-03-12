function saveHandler() {
  debugger;
  // write me!
  // read new item from user input
  const newInput = document.getElementById("input").value.trim();
  if (newInput === "") {
    alert("Please enter the input text");
    return;
  }
  // var to validate if is a string
  const checkNumber = Number(newInput);
  // check if is number or string
  if (isNaN(checkNumber)) {
    strings.NaNy.push(newInput);
    if (hasDuplicates(strings.NaNy)) {
      strings.NaNy.pop();
      alert("Value already saved");
    }
  } else {
    // check if is even or odd
    if (checkNumber % 2 === 0) {
      strings.evens.push(checkNumber);
      if (hasDuplicates(strings.evens)) {
        strings.evens.pop();
        alert("Value already saved");
      }
    } else {
      strings.odds.push(checkNumber);
      if (hasDuplicates(strings.odds)) {
        strings.odds.pop();
        alert("Value already saved");
      }
    }
  }
  document.getElementById("input").value = '';
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save",
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  });
}
