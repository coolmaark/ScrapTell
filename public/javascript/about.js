const about = document.querySelector(".ptn");
function aboutItems(){
    abouts.forEach((aboutPtn) => {
        about.innerHTML += `
            <li>
                <h3>${aboutPtn.name}</h3>
                <p>${aboutPtn.matter} </p>
            </li>
        `
    });
}

aboutItems();
