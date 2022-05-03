let userList = document.querySelector('.user-list')
let filter = document.querySelector('.filter')
let endPoint = 'https://randomuser.me/api?results=50'
let list = []


fetch(endPoint)
        .then(response => {
                return response.json()
        })
        .then(jsonData => {
                for (let i = 0; i < 50; i++){
                        let user = document.createElement('li')
                        user.classList.add('user')

                        user.innerHTML = 
                                `
                                        <img src="${jsonData.results[i].picture.medium}" alt="" class="user-photo">
                                        <div class="user-name">${jsonData.results[i].name.first} ${jsonData.results[i].name.last}</div>
                                        <div class="user-location">${jsonData.results[i].location.city}, ${jsonData.results[i].location.country}</div>
                                `
                        list.push(user)
                        userList.appendChild(user)
                }
        })

filter.addEventListener('input', (e) => {
        getUser(e.target.value)

        
})

function getUser(search) {
        list.forEach(user => {
                if (user.innerText.toLowerCase().includes(search.toLowerCase())) {
                        user.classList.remove('hide')
                } else {
                        user.classList.add('hide')
                }
        })
}