/*
fetch('https://fakestoreapi.com/products')
.then((data)=>{
    // console.log(data);
    return data.json()
})
.then((compleatData)=>{
    // console.log(compleatData);

    let data1 = '';
    compleatData.map((values)=>{
        data1 += ` <div class="cards">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image}
            alt="img" class="images">

        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>


    </div>`
    })
    document.getElementById("card").innerHTML = data1
})
.catch((err)=>{
    console.log(err);
})
*/

async function featchData(){
    try{
        let responce = await fetch('https://fakestoreapi.com/products');
        let data = await responce.json();
        let data1
         data.map((values)=>{
            data1 += ` <div class="cards">
            <h1 class="title">${values.title}</h1>
            <img src=${values.image}
                alt="img" class="images">
    
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
    
    
        </div>`
        })
        document.getElementById("card").innerHTML = data1
    }catch(error){
        document.write(error)
    }
}

featchData()