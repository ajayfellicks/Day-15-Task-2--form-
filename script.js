//!DOM
const divHeading = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
//form
const formE = document.createElement("form");
//first and last name div
const divUsername = document.createElement("div");
//fist name
const labelFirstName = document.createElement("label");
const divFnInputBox = document.createElement("div");
const firstNameE = document.createElement("input");
const fnSmall = document.createElement("small");
//last name
const labelLastName = document.createElement("label");
const divLnInputBox = document.createElement("div");
const lastNameE = document.createElement("input");
const lnSmall = document.createElement("small");
//address
const divAddress = document.createElement("div");
const labelAddress = document.createElement("label");
const divAdInputBox = document.createElement("div");
const addressE = document.createElement("textarea");
const adSmall = document.createElement("small");
//gender
const divGender = document.createElement("div");
const divGenLabelBox = document.createElement("div");
const labelGender = document.createElement("label");
const divGenInputMainBox = document.createElement("div");
const divGenInputBox1 = document.createElement("div");
const radio1 = document.createElement("input");
const labelMale = document.createElement("label");
const divGenInputBox2 = document.createElement("div");
const radio2 = document.createElement("input");
const labelFemale = document.createElement("label");
const divGenInputBox3 = document.createElement("div");
const radio3 = document.createElement("input");
const labelOther = document.createElement("label");
const genSmall = document.createElement("small");
//choice of food
const divFood = document.createElement("div");
const divFoodLabelBox = document.createElement("div");
const labelFood = document.createElement("label");
const divFoodInputMainBox = document.createElement("div");
const divFoodInputBox1 = document.createElement("div");
const checkInline1 = document.createElement("input");
const labelIdli = document.createElement("label");
const divFoodInputBox2 = document.createElement("div");
const checkInline2 = document.createElement("input");
const labelDosai = document.createElement("label");
const divFoodInputBox3 = document.createElement("div");
const checkInline3 = document.createElement("input");
const labelPongal = document.createElement("label");
const divFoodInputBox4 = document.createElement("div");
const checkInline4 = document.createElement("input");
const labelPoori = document.createElement("label");
const divFoodInputBox5 = document.createElement("div");
const checkInline5 = document.createElement("input");
const labelAppam = document.createElement("label");
const foodSmall = document.createElement("small");
//country,state,pincode
const divCSP = document.createElement("div");
const divCouLabelBox = document.createElement("div");
const labelCou = document.createElement("label");
const divCountry = document.createElement("div");
const countryNameE = document.createElement("select");
const ctSmall = document.createElement("small");
const divStLabelBox = document.createElement("div");
const labelSt = document.createElement("label");
const divState = document.createElement("div");
const stateNameE = document.createElement("select");
const stSmall = document.createElement("small");
const divPincode = document.createElement("div");
const labelPincode = document.createElement("label");
const divPcInputBox = document.createElement("div");
const pincodeE = document.createElement("input");
const pcSmall = document.createElement("small");
//submit
const divSubInputBox = document.createElement("div");
const submit = document.createElement("input");
//table
const tableE = document.createElement("table");
const tableHead = document.createElement("thead");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const th5 = document.createElement("th");
const th6 = document.createElement("th");
const th7 = document.createElement("th");
const tableBodyE = document.createElement("tbody");
//innerHTML
h1.innerHTML = "DOM Manipulation With Form";
p.innerHTML = "Created Form Using DOM Method In JavaScript";
labelFirstName.innerHTML = "First Name :";
fnSmall.innerHTML = "error msg";
labelLastName.innerHTML = "First Name :";
lnSmall.innerHTML = "error msg";
labelLastName.innerHTML = "First Name :";
lnSmall.innerHTML = "error msg";
labelAddress.innerHTML = "Address Line :";
adSmall.innerHTML = "error msg";
labelGender.innerHTML = "Gender :";
labelMale.innerHTML = "Male";
labelFemale.innerHTML = "Female";
labelOther.innerHTML = "Other";
genSmall.innerHTML = "error msg";
labelFood.innerHTML = "Choice Of Food :";
labelIdli.innerHTML = "Idli";
labelDosai.innerHTML = "Dosai";
labelPongal.innerHTML = "Pongal";
labelPoori.innerHTML = "Poori";
labelAppam.innerHTML = "Appam";
foodSmall.innerHTML = "error msg";
labelCou.innerHTML = "Country :";
ctSmall.innerHTML = "error msg";
labelSt.innerHTML = "State :";
stSmall.innerHTML = "error msg";
labelPincode.innerHTML = "Pincode :";
pcSmall.innerHTML = "error msg";
th1.innerHTML = "Name";
th2.innerHTML = "Address";
th3.innerHTML = "Gender";
th4.innerHTML = "favorite Food";
th5.innerHTML = "Country";
th6.innerHTML = "State";
th7.innerHTML = "Pincode";
//id
h1.id = "title";
p.id = "description";
formE.id = "form";
firstNameE.id = "first-name";
lastNameE.id = "last-name";
addressE.id = "address";
radio1.id = "radio1";
radio2.id = "radio2";
radio3.id = "radio3";
checkInline1.id = "checkInline1";
checkInline2.id = "checkInline2";
checkInline3.id = "checkInline3";
checkInline4.id = "checkInline4";
checkInline5.id = "checkInline5";
countryNameE.id = "countryId";
stateNameE.id = "stateId";
pincodeE.id = "pincode";
submit.id = "submit";
tableE.id = "table";
tableBodyE.id = "tableBody";
//class
divHeading.classList = "container-fluid text-center header-box shadow";
formE.classList = "container mt-1 form-box";
divUsername.classList = "row col";
labelFirstName.classList = "col-form-label col-auto";
divFnInputBox.classList = "col ps-0";
firstNameE.classList = "form-control";
labelLastName.classList = "col-form-label col-auto";
divLnInputBox.classList = "col ps-0";
lastNameE.classList = "form-control";
divAddress.classList = "row col mt-4";
labelAddress.classList = "col-form-label col-auto pb-0";
divAdInputBox.classList = "col ps-0 pb-0";
addressE.classList = "form-control";
divGender.classList = "row mt-4";
divGenLabelBox.classList = "col-auto";
labelGender.classList = "col-form-label";
divGenInputMainBox.classList = "col ps-0 d-flex pt-2";
divGenInputBox1.classList = "form-check form-check-inline pe-2";
radio1.classList = "form-check-input";
labelMale.classList = "form-check-label";
divGenInputBox2.classList = "form-check form-check-inline pe-2";
radio2.classList = "form-check-input";
labelFemale.classList = "form-check-label";
divGenInputBox3.classList = "form-check form-check-inline";
radio3.classList = "form-check-input";
labelOther.classList = "form-check-label";
divFood.classList = "row mt-4";
divFoodLabelBox.classList = "col-auto";
labelFood.classList = "col-form-label";
divFoodInputMainBox.classList = "col ps-0 d-flex pt-2";
divFoodInputBox1.classList = "form-check form-check-inline";
checkInline1.classList = "form-check-input";
labelIdli.classList = "form-check-label me-3";
divFoodInputBox2.classList = "form-check form-check-inline";
checkInline2.classList = "form-check-input";
labelDosai.classList = "form-check-label me-3";
divFoodInputBox3.classList = "form-check form-check-inline";
checkInline3.classList = "form-check-input";
labelPongal.classList = "form-check-label me-3";
divFoodInputBox4.classList = "form-check form-check-inline";
checkInline4.classList = "form-check-input";
labelPoori.classList = "form-check-label me-3";
divFoodInputBox5.classList = "form-check form-check-inline";
checkInline5.classList = "form-check-input";
labelAppam.classList = "form-check-label me-1";
divCSP.classList = "row mt-4";
divCouLabelBox.classList = "row col";
labelCou.classList = "col-form-label col-auto";
divCountry.classList = "col ps-0";
countryNameE.classList = "form-select form-select-md col";
divStLabelBox.classList = "row col";
labelSt.classList = "col-form-label col-auto";
divState.classList = "col ps-0";
stateNameE.classList = "form-select form-select-md col";
divPincode.classList = "row col";
labelPincode.classList = "col-form-label col-auto";
divPcInputBox.classList = "col ps-0";
pincodeE.classList = "form-control";
divSubInputBox.classList = "d-flex justify-content-end mt-4";
submit.classList = "btn btn-lg btn-primary ms-3";
tableE.classList = "table table-bordered border-primary container mt-5";
//attribute
labelFirstName.setAttribute("for", "first-name");
firstNameE.setAttribute("type", "text");
firstNameE.setAttribute("placeholder", "Enter Your First Name");
firstNameE.setAttribute("aria-describedby", "inputTextInlineHelp");
labelLastName.setAttribute("for", "last-name");
lastNameE.setAttribute("type", "text");
lastNameE.setAttribute("placeholder", "Enter Your Last Name");
lastNameE.setAttribute("aria-describedby", "inputTextInlineHelp");
labelAddress.setAttribute("for", "address");
addressE.setAttribute("type", "text");
addressE.setAttribute("placeholder", "Enter Your Address");
labelGender.setAttribute("for", "genderLabel");
radio1.setAttribute("type", "radio");
radio1.setAttribute("name", "radio");
labelMale.setAttribute("for", "radio1");
radio2.setAttribute("type", "radio");
radio2.setAttribute("name", "radio");
labelFemale.setAttribute("for", "radio2");
radio3.setAttribute("type", "radio");
radio3.setAttribute("name", "radio");
labelOther.setAttribute("for", "radio3");
labelFood.setAttribute("for", "foodLabel");
checkInline1.setAttribute("type", "checkbox");
checkInline1.setAttribute("value", "Idli");
labelIdli.setAttribute("for", "checkInline1");
checkInline2.setAttribute("type", "checkbox");
checkInline2.setAttribute("value", "Dosai");
labelDosai.setAttribute("for", "checkInline2");
checkInline3.setAttribute("type", "checkbox");
checkInline3.setAttribute("value", "Pongal");
labelPongal.setAttribute("for", "checkInline3");
checkInline4.setAttribute("type", "checkbox");
checkInline4.setAttribute("value", "Poori");
labelPoori.setAttribute("for", "checkInline4");
checkInline5.setAttribute("type", "checkbox");
checkInline5.setAttribute("value", "Appam");
labelAppam.setAttribute("for", "checkInline5");
labelCou.setAttribute("for", "countryId");
countryNameE.setAttribute("name", "country");
countryNameE.setAttribute("aria-label", "Small select");
labelSt.setAttribute("for", "stateId");
stateNameE.setAttribute("name", "state");
stateNameE.setAttribute("aria-label", "Small select");
labelPincode.setAttribute("for", "pincode");
pincodeE.setAttribute("type", "text");
pincodeE.setAttribute("placeholder", "Enter Your Pincode");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "submit");

//!append
//!heading
divHeading.append(h1, p);
//!form
//divUsername
divFnInputBox.append(firstNameE, fnSmall);
divLnInputBox.append(lastNameE, lnSmall);
divUsername.append(labelFirstName, divFnInputBox, labelLastName, divLnInputBox);
//divAddress
divAdInputBox.append(addressE, adSmall);
divAddress.append(labelAddress, divAdInputBox);
//divGender
divGenLabelBox.append(labelGender);
divGenInputBox1.append(radio1, labelMale);
divGenInputBox2.append(radio2, labelFemale);
divGenInputBox3.append(radio3, labelOther);
divGenInputMainBox.append(
  divGenInputBox1,
  divGenInputBox2,
  divGenInputBox3,
  genSmall
);
divGender.append(divGenLabelBox, divGenInputMainBox);
//divFood
divFoodLabelBox.append(labelFood);
divFoodInputBox1.append(checkInline1, labelIdli);
divFoodInputBox2.append(checkInline2, labelDosai);
divFoodInputBox3.append(checkInline3, labelPongal);
divFoodInputBox4.append(checkInline4, labelPoori);
divFoodInputBox5.append(checkInline5, labelAppam);
divFoodInputMainBox.append(
  divFoodInputBox1,
  divFoodInputBox2,
  divFoodInputBox3,
  divFoodInputBox4,
  divFoodInputBox5,
  foodSmall
);
divFood.append(divFoodLabelBox, divFoodInputMainBox);
//divCSP
divCountry.append(countryNameE, ctSmall);
divCouLabelBox.append(labelCou, divCountry);

divState.append(stateNameE, stSmall);
divStLabelBox.append(labelSt, divState);

divPcInputBox.append(pincodeE, pcSmall);
divPincode.append(labelPincode, divPcInputBox);

divCSP.append(divCouLabelBox, divStLabelBox, divPincode);
//divSubInputBox
divSubInputBox.append(submit);
//form
formE.append(
  divUsername,
  divAddress,
  divGender,
  divFood,
  divCSP,
  divSubInputBox
);
//!table
tr.append(th1, th2, th3, th4, th5, th6, th7);
tableHead.append(tr);
tableE.append(tableHead, tableBodyE);
//!body
document.body.append(divHeading, formE, tableE);

//!functions

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const radio = document.getElementById("radio1");
const check = document.getElementById("checkInline1");
const table = document.getElementById("table");
const tableBody = document.getElementById("tableBody");
const countryName = document.getElementById("countryId");
const stateName = document.getElementById("stateId");

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((country) => {
        output = output + `${country.name.common}!`;
      });
      let countryArray = output.split("!").sort();
      countryArray.shift();
      countryArray.pop();
      let countryOutput = "";
      countryArray.forEach((ele) => {
        countryOutput += `<option>${ele}</option>`;
      });
      const countrySelect = `<option id="countrySelect" selected>--Select Country--</option>`;
      countryName.innerHTML = countrySelect + countryOutput;
    })
    .catch((err) => {
      console.log(err);
    });

  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Madhya Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Tripura",
    "Telangana",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  stateOutput = "";
  states.forEach((ele) => {
    stateOutput = stateOutput + `<option>${ele}</option>`;
  });
  const stateSelect = `<option selected>--Select State--</option>`;
  stateName.innerHTML = stateSelect + stateOutput;
});

//functions required

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "col ps-0 form-div error";
  const small = formControl.querySelector("small");
  small.innerHTML = `${msg}`;
}

function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "col ps-0 form-div success";
}
//functions check

function showErrorCheck(input, msg) {
  let formControl = input.parentElement;
  let formControlMain = formControl.parentElement;
  formControlMain.className = "col ps-0 d-flex pt-2 form-div error";
  const small = formControlMain.querySelector("small");
  small.innerHTML = `${msg}`;
}

function showSuccessCheck(input) {
  formControl = input.parentElement;
  let formControlMain = formControl.parentElement;
  formControlMain.className = "col ps-0 d-flex pt-2 form-div success";
}
//functions radio

function showErrorRadio(input, msg) {
  let formControl = input.parentElement;
  let formControlMain = formControl.parentElement;
  formControlMain.className = "col ps-0 d-flex pt-2 form-div error";
  const small = formControlMain.querySelector("small");
  small.innerHTML = `${msg}`;
}

function showSuccessRadio(input) {
  formControl = input.parentElement;
  let formControlMain = formControl.parentElement;
  formControlMain.className = "col ps-0 d-flex pt-2 form-div success";
}

//function country
function showErrorSelectBox(input, msg) {
  formControl = input.parentElement;
  let formControlMain = formControl.parentElement;
  formControlMain.className = "row col form-div error";
  const small = formControlMain.querySelector("small");
  small.innerHTML = `${msg}`;
}

function showSuccessSelectBox(input) {
  formControl = input.parentElement;
  let formControlMain = formControl.parentElement;
  formControlMain.className = "row col form-div success";
}

//function username valid
function isValidName(val) {
  const re = /[0-9]/;
  return re.test(val);
}

//eventlistener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "") {
    showError(firstName, "First Name is Required*");
  } else if (isValidName(firstName.value)) {
    showError(firstName, "Not a Valid First Name*");
  } else {
    showSuccess(firstName);
  }

  if (lastName.value === "") {
    showError(lastName, "Last Name is Required*");
  } else if (isValidName(lastName.value)) {
    showError(lastName, "Not a Valid Last Name*");
  } else {
    showSuccess(lastName);
  }

  if (address.value === "") {
    showError(address, "Address Required*");
  } else {
    showSuccess(address);
  }

  if (pincode.value === "") {
    showError(pincode, "Pincode Required*");
  } else if (isNaN(pincode.value)) {
    showError(pincode, "(Not a Valid Pincode)");
  } else if (pincode.value.length > 6 || pincode.value.length < 6) {
    showError(pincode, "(Pincode Contains 6 Digits)");
  } else {
    showSuccess(pincode);
  }

  let food = [];
  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      food.push(item.value);
    }
  });

  if (food.length === 0) {
    showErrorRadio(check, "Check Your Choice of Food*");
  } else if (food.length < 2) {
    showErrorRadio(check, "(Check at Least 2 Choice of Food)");
  } else {
    showSuccessRadio(check);
  }

  let gender = [];
  document.querySelectorAll('[type="radio"]').forEach((item) => {
    if (item.checked === true) {
      gender.push(item.value);
    }
  });

  if (gender.length < 1) {
    showErrorCheck(radio, "Select Your Gender*");
  } else {
    showSuccessCheck(radio);
  }

  if (countryName.value === "--Select Country--") {
    showErrorSelectBox(countryName, "Select Your Country*");
  } else {
    showSuccessSelectBox(countryName);
  }

  if (stateName.value === "--Select State--") {
    showErrorSelectBox(stateName, "Select Your State*");
  } else {
    showSuccessSelectBox(stateName);
  }
});
