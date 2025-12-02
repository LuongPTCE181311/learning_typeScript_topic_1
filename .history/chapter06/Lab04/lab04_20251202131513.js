const inputName = document.getElementById("inputName");
const inputPass = document.getElementById("inputPassword");
const mySubmit = document.getElementById("submit");
const success = document.getElementById("success");

mySubmit.addEventListener("click", () => {
    if(inputName.value === "hoidanit@gmail.com" && inputPass.value === "123456"){
        alert("Đăng nhập thành công!");
        localStorage.
        window.location.href = "success.html"
    }else {
        alert("Tài khoản hoặc mật khẩu sai");
        inputName.style.borderColor = "red";
        inputPass.style.borderColor = "red";
    }
})