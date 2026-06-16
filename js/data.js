// ================= HAMBURGER MENU =================
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
const menuUl = document.querySelector('.menu ul');
const menuLinks = Array.from(document.querySelectorAll('.menu a'));

if (navToggle && menu && search && searchInput && menuUl && menuLinks.length > 0) {

  const originalMenuItems = Array.from(menuUl.children);

  navToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    search.classList.toggle('active');

    navToggle.textContent = menu.classList.contains('active') ? '✕' : '☰';

    if (!menu.classList.contains('active')) {
      searchInput.value = '';
      resetMenu();
    }
  });

  function resetMenu() {
    menuUl.innerHTML = '';
    originalMenuItems.forEach(item => menuUl.appendChild(item));
  }

  // ==========================SEARCH=====================
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      let keyword = searchInput.value.toLowerCase().trim();

      if (keyword === "giới thiệu" || keyword === "gioi thieu") {
        window.location.href = "gioithieu.html";
      } 
      else if (keyword === "thực đơn" || keyword === "thuc don") {
        window.location.href = "thucdon2.html";
      } 
      else if (keyword === "đặt bàn" || keyword === "dat ban") {
        window.location.href = "datban.html";
      } 
      else if (keyword === "ưu đãi" || keyword === "uu dai") {
        window.location.href = "uudai.html";
      }
      else if (keyword === "liên hệ" || keyword === "lien he") {
        window.location.href = "lienhe.html";
      } 
      else {
        alert("Không tìm thấy trang cho từ khóa: " + keyword);
      }
    }
  });
}


// ================= LOGIN =================
const btnLogin = document.querySelector(".btn-login");
const formLogin = document.getElementById("form-login");
const loginBox = document.querySelector(".login");
const form = document.querySelector("#form-login form");

// thêm logout box
const logoutBox = document.getElementById("logout-box");
const btnLogout = document.getElementById("btn-logout");


// =================  ẨN LOGOUT BAN ĐẦU =================
if (logoutBox) {
    logoutBox.style.display = "none";
}


// load lại user khi vào trang
const savedUser = localStorage.getItem("username");
if (savedUser && btnLogin) {
    btnLogin.innerHTML = `<i class="fa-regular fa-user"></i> ${savedUser}`;
    btnLogin.classList.add("logged-in");
}


// mở / đóng form
if (btnLogin && formLogin) {
    btnLogin.addEventListener("click", (e) => {
        e.stopPropagation();//ngăn không cho sự kiện click lan ra ngoài

        const isLoggedIn = localStorage.getItem("username");

        // nếu đã login → hiện logout box
        if (isLoggedIn) {
            if (logoutBox.style.display === "block") {
                logoutBox.style.display = "none";
            } else {
                logoutBox.style.display = "block";
            }
            formLogin.style.display = "none";
        } 
        // chưa login → hiện form login
        else {
            if (formLogin.style.display === "block") {
                formLogin.style.display = "none";
            } else {
                formLogin.style.display = "block";
            }
            logoutBox.style.display = "none";
        }
    });
}


// click ra ngoài để đóng
document.addEventListener("click", (e) => {
    if (loginBox && !loginBox.contains(e.target)) {
        if (formLogin) formLogin.style.display = "none";
        if (logoutBox) logoutBox.style.display = "none";
    }
});


// =================== Login thành công ===============
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username !== "" && password !== "") {

            alert(`Chào mừng ${username} đến với quán ăn 3 ANH EM !`);

            localStorage.setItem("username", username);

            btnLogin.innerHTML = `<i class="fa-regular fa-user"></i> ${username}`;
            btnLogin.classList.add("logged-in");

            formLogin.style.display = "none";

        } else {
            alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
        }
    });
}


// ================= logout ========================
if (btnLogout) {
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("username");

        btnLogin.textContent = "Đăng nhập";
        btnLogin.classList.remove("logged-in");

        logoutBox.style.display = "none";
    });
}


// ================= GHIM MENU =================
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-content");

    if (!header) return;

    if (window.scrollY > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});