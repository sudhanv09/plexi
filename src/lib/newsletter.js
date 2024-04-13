const card = document.getElementById("card");
const modal = document.getElementById("modal")

const card_btn = document.querySelector("div.card button");
const card_input = document.querySelector("#useremail");
const input_val = card_input.value
const input_error = document.querySelector(".error_msg");

card_btn.addEventListener('click', ()=> {
    card.style.display = "none";
    modal.style.display = "block";
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
