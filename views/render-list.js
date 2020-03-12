debugger;

const renderList = (array, category) => {
  const node_div = document.createElement("div");
  node_div.id = category;
  const node_h4 = document.createElement("h4");
  const node_h4_text = document.createTextNode(category);
  node_h4.appendChild(node_h4_text);
  node_div.appendChild(node_h4);
  const node_ul = document.createElement("ul");
  for (let c of array) {
    const node_li = document.createElement("li");
    const node_li_text = document.createTextNode(c);
    node_li.appendChild(node_li_text);
    node_ul.appendChild(node_li);
  }
  node_div.appendChild(node_ul);
  return node_div;
};

console.log("-- testing renderList component --\n");

const testRenderList = (component, array, category) => {
  console.assert(component.nodeName === "DIV", "it should be a DIV");
  console.assert(component.id === category, "it's id should be " + category);
  console.assert(
    component.childElementCount === 2,
    "it should have 2 children"
  );

  console.assert(
    component.children[0].nodeName === "H4",
    "first child should be an H4"
  );
  console.assert(
    component.children[0].innerHTML === category,
    ".children[0].innerHTML should be " + category
  );

  console.assert(
    component.children[1].childElementCount === array.length,
    ".children[1] should have" + array.length + " children"
  );
  for (let i = 0; i < array.length; i++) {
    console.assert(
      component.children[1].children[i].innerHTML === array[i],
      "li " + i + " should display " + array[i]
    );
  }
};

console.log("-- Test 1:\n");

const array1 = ["0", "2", "4"];
const category1 = "evens";
const component1 = renderList(array1, category1);
testRenderList(component1, array1, category1);

console.log("-- Test 2:\n");

const array2 = ["e", "i"];
const category2 = "nany";
const component2 = renderList(array2, category2);
testRenderList(component2, array2, category2);

console.log("-- Test 3:\n");

const array3 = ["3", "5", "7", "11"];
const category3 = "odds";
const component3 = renderList(array3, category3);
testRenderList(component3, array3, category3);

console.log("-- Test 4:\n");

const array4 = [];
const category4 = "empty list!";
const component4 = renderList(array4, category4);
testRenderList(component4, array4, category4);

console.log("-- Test 5:\n");

const array5 = [
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "..."
];
const category5 = "loooong list";
const component5 = renderList(array5, category5);
testRenderList(component5, array5, category5);
