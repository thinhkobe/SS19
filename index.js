// Lấy theo ID
let headingElement = document.getElementById("heading");

//lấy theo class

let headingElements = document.getElementsByClassName("heading");

// lấy theo querySelector

let itemElement = document.querySelector("#heading");

// let itemElement = document.querySelectorAll(".item");
console.log(itemElement);

let inputtextElement = document.querySelector('input[type="text"]');

console.log(inputtextElement);

const getItem1 = () => {
  console.log("goi ham");
};

const getItem2 = () => {
  console.log("goi ham2");
};

// Lấy ra phần tử botton submit

// let btnSubmit = document.querySelector("#btnSubmit");

// btnSubmit.addEventListener("click", (event) => {
//   console.log("Submit", event);
// });

// lấy ra phần tử input

// let emailInput = document.querySelector("#emailInput");

// emailInput.addEventListener("input", (e) => {
//   console.log("even", e.target.value);
// });

// tạo một mảng rỗng và lưu trữ các tên
// tạo nut buton và input để lấy dữ liệu khi click vào thì push tên lấy
// từ trong mảng vào mảng

const userName = [];
const hobbies = [];
// hàm addname
const addName = (value, arr) => {
  arr.push(value);
};

// // lấy element
let nameInput = document.querySelector("#nameInput");
let btnSubmit = document.querySelector("#btnEnter");
//Lấy giá trị từ radio
const radioElement = document.querySelectorAll('input[type="radio"]');
let genderValue = "Nam";
let optionElement = document.querySelector("#select");

const checkBoxElement = document.querySelectorAll('input[type="checkbox"]');

// // load data

const loadData = () => {
  console.log(userName);
  console.log(genderValue);
  console.log(optionElement.value);
  console.log(hobbies);
};

// // bat su kien
btnSubmit.addEventListener("click", (event) => {
  const inputValue = nameInput.value.trim();
  addName(inputValue, userName);
  radioElement.forEach((element) => {
    // kiểm tra radio nào được check thì lấy giá trị của nó
    if (element.checked) {
      genderValue = element.value;
      console.log(element.value);
    }
  });
  //   // sau khi submit thi focus vao input
  nameInput.focus();
  nameInput.value = "";
  loadData();
});
// lấy giá trị trong checkbox
checkBoxElement.forEach((element) => {
  // console.log(element.checked);
  element.addEventListener("change", (event) => {
    if (event.target.checked) {
      hobbies.push(event.target.value);
    } else {
      // tìm kiếm phần tử trong mảng
      let index = hobbies.indexOf(event.target.value);
      if (index !== -1) {
        hobbies.splice(index, 1);
      }
    }
  });
});
// Lắng nghe sự kiện thay đổi trong select option

optionElement.addEventListener("change", (e) => {
  console.log(e.target.value);
});
