let customer = [
  {
    fname: "Jahongir",
    lname: "Abduazimov",
    phones: "+998939249489",
    region: "Jizzax",
    budget: "10000",
  },
  {
    fname: "Sardor",
    lname: "Nuriddinov",
    phones: "+998939923898",
    region: "Samarqand",
    budget: "1000",
  },
  {
    fname: "Javohir",
    lname: "Mexrojov",
    phones: "+9989/8945654",
    region: "Toshkent",
    budget: "30000",
  },
  {
    fname: "Behzod",
    lname: "Saborov",
    phones: "+9989491988",
    region: "Qashqadaryo",
    budget: "30000",
  },
];

const form = document.querySelector(".form");
const inputfname = document.querySelector("#fname");
const inputlname = document.querySelector("#lname");
const inputphones = document.querySelector("#phones");
const inputregion = document.querySelector("#region");
const inputbudget = document.querySelector("#budget");

const fname = document.querySelector("#sorting__fname");
const lname = document.querySelector("#sorting__lname");
const budget = document.querySelector("#sorting__budget");

function sortingString(value, type) {
  if (value === "descending") {
    customer.sort((a, b) => {
      let first = a[type].toLowerCase();
      let second = b[type].toLowerCase();
      if (second > first) return 1;
      if (second < first) return -1;
      return 0;
    });
  } else if (value === "ascending") {
    customer.sort((a, b) => {
      let first = a[type].toLowerCase();
      let second = b[type].toLowerCase();
      if (second > first) return -1;
      if (second < first) return 1;
      return 0;
    });
  }
  createCustomer(customer);
}

fname.addEventListener("change", (e) => {
  sortingString(e.target.value, "fname");
});

lname.addEventListener("change", (e) => {
  sortingString(e.target.value, "lname");
});

budget.addEventListener("change", (e) => {
  sortingString(e.target.value, "budget");
});

const tbody = document.querySelector(".tbody");
function createCustomer(data) {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((custom, index) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${custom.fname}</td>
            <td>${custom.lname}</td>
            <td>${custom.phones}</td>
            <td>${custom.region}</td>
            <td>${custom.budget} $ </td>
        `;
    tbody.appendChild(tableRow);
  });
}
createCustomer(customer);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newCustom = {
    id: "5",
    fname: inputfname.value,
    lname: inputlname.value,
    phones: inputphones.value,
    region: inputregion.value,
    budget: inputbudget.value,
  };
  customer.push(newCustom);
  createCustomer(customer);
  inputfname.value = "";
  inputlname.value = "";
  inputphones.value = "";
  inputregion.value = "";
  inputbudget.value = "";
});
