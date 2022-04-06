const keysOption = document.querySelector(".keys");
const valueOptin = document.querySelector(".values");

const obj = {
  a: "apple",
  b: "banana",
  c: "clementine",
  d: "dragonfruit",
  e: "elderberry",
  f: "fig",
};

for (let key in obj) {
  //   keysOption.innerHTML += `<option value= ${key}> ${key} </option>`;
  //   valueOptin.innerHTML += `<option value= ${obj[key]}> ${obj[key]} </option>`;

  const createOption = document.createElement("option");
  createOption.value = key;
  createOption.textContent = key;
  keysOption.append(createOption);
  //console.log(keysOption.outerHTML);

  const createOption2 = document.createElement("option");

  createOption2.value = obj[key];
  createOption2.textContent = obj[key];
  valueOptin.append(createOption2);
  console.log(valueOptin.outerHTML);
}

keysOption.addEventListener("change", (e) => {
  console.log(e.target.value);

  for (let key in obj) {
    if (key === e.target.value) {
      //valueOptin.innerHTML = `<option value= ${obj[key]}> ${obj[key]} </option>`; // didn't work
      // console.log(document.querySelector(`option[value= ${obj[key]}]`));

      //   document.querySelectorAll(".values > option").forEach((val) => {
      //     if (val.value === obj[key]) {
      //       val.value = obj;
      //     }
      //   });

      //document.querySelectorAll(".values > option")[3].value = obj[key];

      valueOptin.value = obj[key];
    }
  }
});

valueOptin.addEventListener("change", (e) => {
  console.log(e.target.value);

  for (let key in obj) {
    if (obj[key] === e.target.value) {
      keysOption.value = key;
    }
  }
});
