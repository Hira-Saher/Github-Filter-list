const filtreValue = document.querySelector("#filterValue");
const result = document.querySelector("#result");

const filterCards = data => {
	data.forEach(item => {
		const div = document.createElement('div');
		div.classList = "user card mb-2"
		let output = `
		<div>
			<h1 class="card-title">${item.login}</h1>
		</div>
		<div>
			<img class="img-fluid rounded-circle" src="${item.avatar_url}" alt="User Image" width="150px">
		</div>
			`

		div.innerHTML = output;
		result.appendChild(div);
	});
};

const filterList = e => {
	// console.log(e.target.value);
	let filterTargetValue = e.target.value.toUpperCase();
	let users = document.querySelectorAll(".user");
	users.forEach(user => {
		user.textContent.toUpperCase().includes(filterTargetValue)
		? (user.style.display = "")
		: (user.style.display = "none");

	});
};
	
	
fetch ("https://api.github.com/users")
	.then(res => res.json())
	.then(data =>{
		console.log(data);
		filterCards(data);
	})

filterValue.addEventListener("input", filterList);
