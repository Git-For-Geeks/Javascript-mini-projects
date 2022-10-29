
var firstName = ["Deepanshu", "Piyush", "Dream", "Arjun", "Balvan",
				"Chandresh", "Devansh", "Gautam", "Gaurav", "Harsh", "Hardik",
				"Hitesh", "Ishaan", "Indrajit","Jagat","Jatin","Kabir",
				"Laksh","Madhav","Maanav","Naksh","Nitesh","Onveer","Pranit",
				"Rachit","Ranbir","Rushil","Veer"];


var lastName = ["manocha", "chandel", "singh", "Anand", "Chatterjee",
				"Chakraborty", "Bhavsar", "Chaudhary", "Chopra", "Dutt", "Gupta",
				"Goswami", "Ganesh", "Kapoor","pirosh","Maharaj","Malhotra",
				"Mathur","Mehta","Mukherjee","singhania","Raj","Saxena","gujrati",
				"Tiwari","Tripathi","Varma","Trivedi"];


function getName() {
	var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' '+ lastName[Math.floor(Math.random() * lastName.length)];
	return randomName;
}

function nameQty(){
	var userQty = document.querySelector('.qty').value;
	document.querySelector('.nameList').innerHTML = '';
	if (userQty > 10) {
		document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES CAN BE GENERATE';
	}
	else{
		for (var i = 0; i < userQty; i++) {
			document.querySelector('.nameList').innerHTML += getName() + '<br>';
		}
	}
}
