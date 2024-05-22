// // Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

//Визначення масиву товарів
let itemsArray = [
    {
        title:"Мотокоса 43",
        image:'img/1.webp',
        mono: 4,
        pb: 8,
        prise_standart: 5499,
        prise_discount:4497,
        prise_coupon:4395,
    },
    {
        title:"Електричний тример 110",
        image:'img/2.webp',
        mono: 5,
        pb: 10,
        prise_standart:4497,
        prise_discount:3498,
        prise_coupon:3396,
    },
    {
        title:"Електрична газонокосарка 32",
        image:'img/3.webp',
        mono: 8,
        pb: 11,
        prise_standart:4497,
        prise_discount:3297,
        prise_coupon:3185,
    },
    {
        title:"Акумуляторний оприскувач 12 N",
        image:'img/4.webp',
        mono: 6,
        pb: 12,
        prise_standart:2190,
        prise_discount:1698,
        prise_coupon:1596,
    },
//     {
//         firstname: "Віталій",
//         lastname: "Шатківській",
//         age: 43,
//         subject: "CS",
//         photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//         url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//     },
//     {
//         firstname: "Віталій",
//         lastname: "Шатківській",
//         age: 43,
//         subject: "CS",
//         photo:"",
//         url:"",
//     }
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

// Перевірка існування знайденого блоку
if (itemsDiv) {
    // Вивід знайденого елементу
    // console.log(itemsDiv)

    // // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // // Додавання тексту в блок
    // itemsDiv.innerText = 'Перший Програмно доданий текст'
    // // itemsDiv.innerText = 'Другий Програмно доданий текст' 
    // itemsDiv.innerText += 'Другий Програмно доданий текст'

    // Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML = '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'

    // for (let i = 0; i < 100; i++) {
    //     itemsDiv.innerHTML += '<div class = item></div>'
    // }
    let itemsDiv = document.getElementById("items")
    if (itemsDiv){
     //creating blocks by quantity of elements
     itemsArray
     //sorting by lastnames
     //.sort((a,b) => a.lastName.localeCompare(b.lastName))
     //
         .forEach((item,index) => (
             //виводимо 
             itemsDiv.innerHTML +=
             `
             <div class="item">
                 <div class="item-title">${item.title}</div>
                 <div class="item-image">
                     <img src="${item.image}" alt="${item.name}">
                 </div>
                 <div class="parts-pay">
                     <div><img src="img/monolapka.png" alt="">${item.mono}</div>
                     <div><img src="img/pb.jpg" alt="">${item.pb}</div>
                 </div>
                 <div class="price">
                     <div><span>${item.prise_standart}</span><sup>грн</sup></div>
                     <div><span>${item.prise_discount}</span><sup>грн</sup></div>
                 </div>
                 <div class="price bonus">
                     <div>Ціна за купоном</div>
                     <div><span>${item.prise_coupon}</span><sup>грн</sup></div>
                 </div>
             </div>
 
             `
         ))

    }
    
} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}


// //Виведення елементів масиву
// itemsArray.forEach((item) => {
//     console.log(item)
// })

// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item) => {
//     console.log(index + '-й елемент', item)
// })

// //Виведення в консоль масиву
// console.log(itemsArray)

// //Виведення в консоль елементів масиву
// for (let i=0; i<itemsArray.length; i++) {
//     console.log(itemsArray[i])
// }

// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
// for (let i=0; i<itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i])
// }