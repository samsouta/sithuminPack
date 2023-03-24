export function showLoader(){
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader");
    loaderDiv.innerHTML = `<div class="vh-100 loader d-flex justify-content-center align-items-center fixed-top" >
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>`;
    document.body.append(loaderDiv);
}


export function removeLoader(){
    const loaderDiv = document.querySelector(".loader");
    loaderDiv.remove();
}
// end 

export function showProgess(){
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("top-progess");
    loaderDiv.innerHTML = `<div class="progress top-fixed" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>`
    document.body.append(loaderDiv);
}

export function removeProgess(){
    const loaderDiv = document.querySelector(".top-progess");
    loaderDiv.remove();
}