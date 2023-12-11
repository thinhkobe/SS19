document.write("hello");

// cách gán phần tử vào trong DOM

const heading = document.querySelector("#heading-1");

heading.innerHTML = "xin chao";

const users = [
  {
    userID: 1,
    userName: "Nguyen van lam",
    gender: 0,
    dateOfbirth: "22-22-2021",
    address: "ha noi",
  },
  {
    userID: 2,
    userName: "tran van hai",
    gender: 1,
    dateOfbirth: "22-22-2021",
    address: "ha noi",
  },
  {
    userID: 3,
    userName: "tran van minh",
    gender: 2,
    dateOfbirth: "22-22-2021",
    address: "ha noi",
  },
];
// listItem.innerHTML = `
//  <li> HTML </li>
//  <li> JAVA </li>
//  <li> CSS </li>
// `;
// lấy ra phần tử tbody

// const tbodyElement = document.querySelector("#tbody");

// // chuyển đổi mảng thành chuỗi
// // dung DOM
// let trHtmls = users.map((user, index) => {
//   return `
//       <tr>
//             <td>${index + 1}</td>
//             <td>${user.userName}</td>
//             <td>${
//               user.gender === 0 ? "Nam" : user.gender === 1 ? "Nu" : "khac"
//             }</td>
//             <td>${user.dateOfbirth}</td>
//             <td>${user.address}</td>
//             <td>
//               <button>Sửa</button>
//               <button>Xóa</button>
//             </td>
//       </tr>
//       `;
// });

// let trHtml = trHtmls.join("");

// // tbodyElement.innerHTML = trHtml;x`

// // dùng DOM để hiện thị profile của từng employees
// // employeeID,employeeName,gender,dateOfBirth,image,createdAt

// let today = new Date().toISOString().slice(0, 10);
// console.log(today);
// const employees = [
//   {
//     employeeID: 1,
//     employeeName: "tran van A",
//     gender: 0,
//     dateOfBirth: "20-12-2020",
//     image: "img",
//     createdAt: today,
//   },
//   {
//     employeeID: 2,
//     employeeName: "tran van B",
//     gender: 1,
//     dateOfBirth: "20-12-2020",
//     image: "img",
//     createdAt: today,
//   },
//   {
//     employeeID: 3,
//     employeeName: "tran van C",
//     gender: 2,
//     dateOfBirth: "20-12-2020",
//     image: "img",
//     createdAt: today,
//   },
// ];

// // lấy ra phần tử tbody-1

// const tbody1Element = document.querySelector("#tbody-1");

// // chuyen mang thanh chuoi

// let employee = employees.map((employees, index) => {
//   return `
//       <tr>
//       <td>${index + 1}</td>
//       <td>${employees.employeeName}</td>
//       <td>${
//         employees.gender === 0 ? "nam" : employees.gender === 1 ? "nu" : "khac"
//       }</td>
//       <td>${employees.dateOfBirth}</td>
//       <td><img src="" alt="ảnh "></td>
//       <td>${employees.createdAt}</td>
//     </tr>
//       `;
// // });

// let trHtml1 = employee.join("");
// tbody1Element.innerHTML = trHtml1;

let listItem = document.getElementById("listItem");
// Tạo một phần tử trong DOM
let liElement = document.createElement("li");
liElement.innerHTML = "HTML";

// gán phần tử con vào cha
// element cha.appendChild
listItem.appendChild(liElement);

const tbody1 = document.getElementById("tbody1");
console.log(tbody1);

// hiển thị danh sách user theo kiểu append

users.forEach((user, index) => {
  // tạo phần tử tr
  let trElement = document.createElement("tr");

  // tạo các phần tử td
  const idCell = document.createElement("td");
  idCell.innerHTML = index;
  //   append td vào trong tr của bảng
  trElement.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.innerHTML = user.userName;
  //   append td vào trong tr của bảng
  trElement.appendChild(nameCell);

  const genderCell = document.createElement("td");
  genderCell.innerHTML = user.gender;
  //   append td vào trong tr của bảng
  trElement.appendChild(genderCell);

  const dateOfBirthCell = document.createElement("td");
  dateOfBirthCell.innerHTML = user.dateOfbirth;
  //   append td vào trong tr của bảng
  trElement.appendChild(dateOfBirthCell);

  const addressCell = document.createElement("td");
  addressCell.innerHTML = user.address;
  //   append td vào trong tr của bảng
  trElement.appendChild(addressCell);

  const btnUpdateCell = document.createElement("td");
  btnUpdateCell.innerHTML = "<button>sửa</button>";
  //   append td vào trong tr của bảng
  trElement.appendChild(btnUpdateCell);

  const btndeletedateCell = document.createElement("td");
  btndeletedateCell.innerHTML = "<button>xóa</button>";
  //   append td vào trong tr của bảng
  trElement.appendChild(btndeletedateCell);

  //   Xóa tất cả dữ liệu có sẵn trong tbody của bãng
  // append tr vao trong tbody
  tbody1.appendChild(trElement);
});

let heading3 = document.getElementById("heading3");
// inner HTML đọc và chỉnh sửa văn bản trong html hiển thị tất cả các dữ liệu
// innerText: trả về nội dung mà người dùng nhìn thấy nó sẽ bắt các script bằng
// js,style trong CSS

// textConten Trả về nội dung có trong DOM nó sẽ bỏ qua các script

console.log(heading3.innerHTML);
console.log(heading3.innerText);
console.log(heading3.textContent);

let btnElement = document.querySelectorAll(".btn");
btnElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});
