async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const data = await result.json();
    console.log(data)
    data.forEach(element => {
        if(element.id <= 3){
            const card = document.createRange().createContextualFragment(`
                 <div class="card">
                    <p>Producto: ${element.title}</p>
                    <img src="${element.image}" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque molestias cum tenetur iusto atque magni consequuntur culpa quidem sint mollitia tempore officiis, sapiente numquam, vitae pariatur itaque dolores animi.</p>
                </div>
                
                `)
                const services_row = document.querySelector('.services-row')
                services_row.append(card)
        }
    });
}

getData()