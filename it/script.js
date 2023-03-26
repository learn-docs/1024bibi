// 移动端下拉菜单
var dropdownBtn = document.getElementById("services-dropdown-btn");
var dropdownMenu = document.getElementById("services-dropdown");

dropdownBtn.addEventListener("click", function() {
	if (dropdownMenu.style.display === "block") {
		dropdownMenu.style.display = "none";
	} else {
		dropdownMenu.style.display = "block";
	}
});

// 滚动时固定头部
var header = document.querySelector("header");

window.addEventListener("scroll", function() {
	if (window.pageYOffset > header.offsetTop) {
		header.classList.add("fixed-header");
	} else {
		header.classList.remove("fixed-header");
	}
});
