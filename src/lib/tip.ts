var tip: number = 0;
const tipSelect = document.querySelectorAll(".tip_grp button");
const bill = document.getElementById("amount") as HTMLInputElement;
const custom = document.getElementById("custom") as HTMLInputElement;
const people = document.getElementById("num_ppl") as HTMLInputElement;

var tipPP = document.getElementById("tip") as HTMLElement;
var totalPP = document.getElementById("total") as HTMLElement;

const errorMsg = document.getElementById("error") as HTMLElement;

people.addEventListener("input", () => {
  if (people.value === "0") {
    errorMsg.style.visibility = "visible";
    reset.setAttribute("disabled", "true");
  } else {
    reset.removeAttribute("disabled");

    if (custom.value !== "") {
      tip = +custom.value;
    }
    tipPP.textContent =
      "$" + tipAmountPP(tip, parseInt(people.value)).toString();
    totalPP.textContent =
      "$" + totalAmountPP(tip, parseInt(people.value)).toString();
  }
});

const reset = document.querySelector(".card__disp button") as HTMLButtonElement;
reset.addEventListener("click", (e) => {
  if (!e.target) return;
  bill.value = "";
  tipPP.textContent = "$0.00";
  totalPP.textContent = "$0.00";
  people.value = "";
  custom.value = "";

  reset.setAttribute("disabled", "true");
});

tipSelect.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const target = e.target as HTMLButtonElement;
    if (!target) return;
    tip = parseInt(target.value);
  })
);

const tipAmountPP = (tip: number, people: number) => {
  return ((tip / 100) * parseInt(bill.value)) / people;
};
const totalAmountPP = (tip: number, people: number) => {
  console.log(tip);
  return (parseInt(bill.value) + tipAmountPP(tip, people)) / people;
};
