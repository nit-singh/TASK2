const getTodos = async () => {
    const response = await fetch('data.json');
    if(response.status !== 200){
        throw new Error('cannot fetch data');
    }
    
    const data = await response.json();

    return data;
};

getTodos()
 .then(data =>{

     for(let i=0;i<4;i++){
        const markup2 = `<img src="${data[i+4].image}" class="img${i+1}">`;
        const markup3 = `<ul class="user${i+1}">
        <li>
            <span class="type${i+1}">${data[i+4].type}</span>
            <div class="author${i+1}">${data[i+4].author}(AUTHOR)</div>
            <div class="head${i+1}">${data[i+4].headline}</div>
            <div class="date${i+1}">${data[i+4].date}</div>

        </li>
    </ul>`
        
        
        document.querySelector('.container').insertAdjacentHTML('beforeend',markup2);
        document.querySelector('.container').insertAdjacentHTML('beforeend',markup3);
        

     }

    data.forEach(user => {
        const markup = `<li>  <img src="${user.image}" alt="Image 1">
        <div class="item-text">${user.headline}</div>
          <div class="date">${user.date}</div>
    </li>`;
    document.querySelector('.item-list').insertAdjacentHTML('beforeend',markup);

    
})
console.log('resolved:',data)
 }
)
 .catch(err => console.log('rejected:',err.message))

