function addData() {
  //fetching data from input boxes
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  let row = `
    <tr>
        <th>${name}</th>
        <th>${age}</th>
    </tr>`;
  //fetching data from table body
  var ele = document.getElementById("data");

  //inserting in the body
  ele.innerHTML += row;

  //changing the data in input box to blank
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
