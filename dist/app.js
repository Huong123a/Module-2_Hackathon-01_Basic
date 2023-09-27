"use strict";
const form = document.querySelector("#form");
const input = document.querySelector("#search");
const result = document.querySelector("#result");
//cơ sở dữ liệu
const data = {
    student: "học sinh",
    class: "lớp",
    teacher: "giáo viên",
    board: "bảng",
};
localStorage.setItem("dictionary", JSON.stringify(data));
// Lấy dữ liệu từ LocalStorage
const getData = localStorage.getItem("dictionary");
const dictionary = getData ? JSON.parse(getData) : {};
console.log(dictionary);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valueInput = input.value.toLowerCase().trim();
    console.log(valueInput);
    for (const key in dictionary) {
        if (valueInput == "") {
            result.innerHTML = " Nhập từ khoá";
            return;
        }
        if (valueInput == key) {
            result.innerHTML = dictionary[key];
            break;
        }
        else {
            result.innerHTML = "Chưa có bản dịch";
        }
    }
});
//xoá từ
