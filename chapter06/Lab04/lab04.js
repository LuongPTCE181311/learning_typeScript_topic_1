const inputName = document.getElementById("inputName");
const inputPass = document.getElementById("inputPassword");
const mySubmit = document.getElementById("submit");

mySubmit.addEventListener("click", () => {
    if(inputName.value === "hoidanit@gmail.com" && inputPass.value === "123456"){
        alert("Đăng nhập thành công!");
        localStorage.setItem("name", inputName.value);
        window.location.href = "success.html"
    }else {
        alert("Tài khoản hoặc mật khẩu sai");
        inputName.style.borderColor = "red";
        inputPass.style.borderColor = "red";
    }
})

