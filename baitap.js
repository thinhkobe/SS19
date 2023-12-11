const newUsers = [];

//Lấy element
let nameInput = document.querySelector("#name");
let genderInput = document.querySelector('input[type="radio"]');
let emailInput = document.querySelector("#email");
let birthDayInput = document.querySelector("#birth");
let passwordInput = document.querySelector("#password");
let classInput = document.querySelector("#class");
let addressInput = document.querySelector("#address");

let btnCancelSubmit = document.querySelector("#btnCancel");
let btnAddSubmit = document.querySelector("#btnAdd");
// hàm thêm user

// const addUser = ()

//Bắt sự kiện click nút hủy
btnAddSubmit.addEventListener("click", (e) => {
  //chặn sự kiện load lại trang của form
  e.preventDefault();
  console.log();
});
