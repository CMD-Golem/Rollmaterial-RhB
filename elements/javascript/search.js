// Source: https://www.youtube.com/watch?v=1iysNUrI3lw and https://stackoverflow.com/a/64197394/14225364


const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const explore = document.getElementById('explore');


// Search search.json and filter it
const searchData = async searchText => {
    const res = await fetch('https://raw.githubusercontent.com/CMD-Golem/rollmaterial-rhb/master/elements/search.json');
    const resJson = await res.json();
    const regex = new RegExp(`^${searchText}`, 'gi');
    // Recursion.
    const found = data => (Array.isArray(data) ? data.find(found) : data.match(regex));
    let matches = resJson.filter(data => (found(data.type) || found(data.searchdata)));

	if(searchText.length === 0) {
		matches = [];
		matchList.innerHTML = '';
		explore.style.display = 'flex';
	}

	if(matches.length === 0) {
		matchList.innerHTML = '';
		explore.style.display = 'flex';
	}

	else {
		explore.style.display = 'none';
	}

	outputHtml(matches);
};

// Show results in Html

const outputHtml = matches => {
	if (matches.length > 0) {
		const html = matches.map(match => `
			<div class="search_output">
				<a class="disable_link" href="${match.link}">
					<h2>${match.type}&#8199;${match.number}</h2>
					<p>${match.description}<p>
				</a>
			</div>

			`).join('');

		matchList.innerHTML = html;
	}
};


search.addEventListener('input', () => searchData(search.value));