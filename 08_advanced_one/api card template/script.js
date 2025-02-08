const insert = document.querySelector('.insert')
const requestUrl = "https://api.github.com/users/VedantNighot";
const apiReq = new XMLHttpRequest();
apiReq.open('GET',requestUrl);
apiReq.onreadystatechange = function(){
    // console.log(apiReq.readyState);
    if (apiReq.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.followers)
    // Card
    document.getElementById("button").addEventListener('click',()=>{
        insert.innerHTML= `
        <div class="card">
        <img src="${"https://avatars.githubusercontent.com/u/177414726?v=4"}" alt="Profile Image" class="profile-img">
        <div class="name">${data.name}</div>
        <div class="bio">${data.bio}</div>
        <div class="followers">Followers: ${data.followers}</div>
        <button class=github> Go on Page </button>
        </div>`
        document.querySelector('.github').addEventListener('click',()=>{
            window.location.href = "https://github.com/VedantNighot";
        })
    })
}
}
apiReq.send();
