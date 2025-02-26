const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");

for (const ele of dropdown) {
  for (const code in countryList) {
   let option = document.createElement("opt");
   option.innerText = code;
   option.value= code;
   ele.append(option);

  }
}