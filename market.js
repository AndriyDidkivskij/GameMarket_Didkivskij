
//перевірка підключеного файлу скриптів
console.log('перевірка підключеного файлу скриптів')

//отримання елементу з ідентифікатаром Items
let itemsDiv = document.getElementById("items")

if (itemsDiv){
    //Вивід знайденого елементу
console.log(itemsDiv)

//Додвання відформатованого HTML коду в блок
//itemsDiv.innerHTML += '<div class = item></div>'
//itemsDiv.innerHTML += '<div class = item></div>'
//itemsDiv.innerHTML += '<div class = item></div>'
//itemsDiv.innerHTML += '<div class = item></div>'
    for (let i=0; i<100; i++){
        itemsDiv.innerHTML += '<div class = "item"></div'
    }
} else {
//вивід повідомлення про не знайдений блок
console.log('Блок товарів не знайдено')
}

