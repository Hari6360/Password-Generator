let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let uppercase = document.getElementById("uppercase");
let lowecase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let gntbtn = document.getElementById("gntbtn");
let copyicon = document.getElementById("copyicon");

// Showing input slider value
slidervalue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
	slidervalue.textContent = inputslider.value;
});

gntbtn.addEventListener("click", () => {
	passbox.value = generatePassword();
});

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar = "abcdefghijklmnopqrstuvwxyz";
let allnumber = "0123456789";
let allsymbol = "`!@#$%^&*-=+_/?";
// Creating generatePassword Function
function generatePassword() {
	let generatePassword = "";
	let allchars = "";

	allchars += lowercase.checked ? lowerchar : "";
	allchars += uppercase.checked ? upperchars : "";
	allchars += number.checked ? allnumber : "";
	allchars += symbol.checked ? allsymbol : "";

	let i = 1;
	while (i < inputslider.value) {
		generatePassword += allchars.charAt(
			Math.floor(Math.random() * allchars.length)
		);
		i++;
	}
	return generatePassword;
}

copyicon.addEventListener("click", () => {
	if (passbox.value != "" || passbox.value.length >= 1) {
		navigator.clipboard.writeText(passbox.value);
		copyicon.innerText = "check";
		copyicon.title = "Password Copied";

		setTimeout(() => {
			copyicon.innerHTML = "content_copy";
			copyicon.title = "";
		}, 3000);
	}
});
