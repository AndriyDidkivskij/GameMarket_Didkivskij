// // Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

//Визначення масиву товарів
let itemsArray = [
    {
        email_1: "23b_bvo@liceum.ztu.edu.ua",
        class_1: "10-Б 1",
        name_1: "Башинська Вікторія",
        project_1: "Dudi 3",
        github_Phazer2stGame_1: "https://github.com/ViktoriaBashinska/Phaser2stGame",
        liveDemo_Phazer2stGame_1: "https://viktoriabashinska.github.io/Phaser2stGame/",
        googleDrive_Phazer2stGame_1: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        form_Phazer2stGame_1: "https://forms.gle/jHMQsybKdMdUHXKA7",
        github_GameMarket_1: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        liveDemo_GameMarket_1: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        marketPage_GameMarket_1: "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
        finalPage_GameMarket_1: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
      
        email_2: "23b_bdo@liceum.ztu.edu.ua",
        class_2: "10-Б 1",
        name_2: "Біденко Дмитро",
        project_2: "виживання проти зомбаря",
        github_Phazer2stGame_2: "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
        liveDemo_Phazer2stGame_2: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
        googleDrive_Phazer2stGame_2: "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
        form_Phazer2stGame_2: "https://forms.gle/RDawcnD98QcHnRZw7",
        github_GameMarket_2: "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
        liveDemo_GameMarket_2: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
        marketPage_GameMarket_2: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
        finalPage_GameMarket_2: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html",
      
        email_3: "23b_bmv@liceum.ztu.edu.ua",
        class_3: "10-Б 1",
        name_3: "Бовсуновського Максима",
        project_3: "дота 2",
        github_Phazer2stGame_3: "https://github.com/maksbovs/Phaser2ndGame",
        liveDemo_Phazer2stGame_3: "https://maksbovs.github.io/Phaser2ndGame/",
        googleDrive_Phazer2stGame_3: "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
        form_Phazer2stGame_3: "https://forms.gle/G2WLe25CYPCQjowTA",
        github_GameMarket_3: "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
        liveDemo_GameMarket_3: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
        marketPage_GameMarket_3: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
        finalPage_GameMarket_3: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html",
      
        email_4: "23b_vvi@liceum.ztu.edu.ua",
        class_4: "10-Б 1",
        name_4: "Волинець Владислав",
        project_4: "Пес Патрон на завданні",
        github_Phazer2stGame_4: "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
        liveDemo_Phazer2stGame_4: "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
        googleDrive_Phazer2stGame_4: "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
        form_Phazer2stGame_4: "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
        github_GameMarket_4: "https://github.com/volynets-vlad/GameMarket_Volynets",
        liveDemo_GameMarket_4: "https://volynets-vlad.github.io/GameMarket_Volynets/",
        marketPage_GameMarket_4: "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
        finalPage_GameMarket_4: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html",
      
        email_5: "23b_gas@liceum.ztu.edu.ua",
        class_5: "10-Б 1",
        name_5: "Галетко Артем",
        project_5: "",
        github_Phazer2stGame_5: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        liveDemo_Phazer2stGame_5: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        googleDrive_Phazer2stGame_5: "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
        form_Phazer2stGame_5: "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
        github_GameMarket_5: "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
        liveDemo_GameMarket_5: "https://artem4ikgaletko.github.io/GameMarket_Haletko/",
      
        email_6: "23b_gbs@liceum.ztu.edu.ua",
        class_6: "10-Б 1",
        name_6: "Гордійчук Богдан",
        project_6: "Zhytomur squad Snyok",
        github_Phazer2stGame_6: "https://github.com/malintovi/Phaser2ndGame?authuser=0",
        liveDemo_Phazer2stGame_6: "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
        googleDrive_Phazer2stGame_6: "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
        form_Phazer2stGame_6: "https://forms.gle/VaDXCem7gVuEvumQ9",
        github_GameMarket_6: "https://github.com/malintovi/GameMarket_Hordiichuk",
        liveDemo_GameMarket_6: "https://malintovi.github.io/GameMarket_Hordiichuk/",
        marketPage_GameMarket_6: "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
        finalPage_GameMarket_6: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0",
      
        email_7: "23b_gai@liceum.ztu.edu.ua",
        class_7: "10-Б 1",
        name_7: "Гоцман Артем",
        project_7: "Run_Dude",
        github_Phazer2stGame_7: "https://github.com/GOLDEN-ZTU/Phaser2ndGame",
        liveDemo_Phazer2stGame_7: "https://golden-ztu.github.io/Phaser2ndGame/",
        googleDrive_Phazer2stGame_7: "https://drive.google.com/drive/folders/17jcUqrZBQaD6g0UtpsljRbQN-EcUqnT2",
        form_Phazer2stGame_7: "https://forms.gle/NTmMk1yqBNhaoXzj9",
        github_GameMarket_7: "https://github.com/GOLDEN-ZTU/GameMarket_Hotsman.git",
        liveDemo_GameMarket_7: "https://golden-ztu.github.io/GameMarket_Hotsman/",
        marketPage_GameMarket_7: "https://golden-ztu.github.io/GameMarket_Hotsman/market.html",
        finalPage_GameMarket_7: "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html",
      
        email_8: "23b_god@liceum.ztu.edu.ua",
        class_8: "10-Б 1",
        name_8: "Гуменюк Олег",
        project_8: "",
        github_Phazer2stGame_8: "https://github.com/OlegGumenuk",
        liveDemo_Phazer2stGame_8: "https://oleggumenuk.github.io/Phaser2ndGame/",
        googleDrive_Phazer2stGame_8: "https://drive.google.com/drive/folders/10tRQ_WUvgqz0yGnm0J7WduMyziVFyoE5?usp=drive_link",
        form_Phazer2stGame_8: "https://forms.gle/iXKinscde4Cbqe6e7",
        github_GameMarket_8: "https://github.com/OlegGumenuk/GameMarket_Gumenuk",
        liveDemo_GameMarket_8: "https://oleggumenuk.github.io/GameMarket_Gumenuk/",
      
        email_9: "23b_dis@liceum.ztu.edu.ua",
        class_9: "10-Б 1",
        name_9: "Дєдух Ілля",
        project_9: "kozak_battleground",
        github_Phazer2stGame_9: "https://github.com/Dyeduh/Phaser2ndGame",
        liveDemo_Phazer2stGame_9: "https://dyeduh.github.io/Phaser2ndGame/",
        googleDrive_Phazer2stGame_9: "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
        form_Phazer2stGame_9: "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
        github_GameMarket_9: "https://github.com/Dyeduh/GameMarket_Dyeduh",
        liveDemo_GameMarket_9: "https://dyeduh.github.io/GameMarket_Dyeduh/",
        marketPage_GameMarket_9: "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
        finalPage_GameMarket_9: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0",
      
        email_10: "23b_dao@liceum.ztu.edu.ua",
        class_10: "10-Б 1",
        name_10: "Дідківській Андрій",
        project_10: "Баобаб",
        github_Phazer2stGame_10: "https://github.com/AndriyDidkivskij/Phaser2ndGame",
        liveDemo_Phazer2stGame_10: "https://andriydidkivskij.github.io/Phaser2ndGame/",
        googleDrive_Phazer2stGame_10: "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
        form_Phazer2stGame_10: "https://forms.gle/WNDGSsahKLzHH7LW7",
        github_GameMarket_10: "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
        liveDemo_GameMarket_10: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
        marketPage_GameMarket_10: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
        finalPage_GameMarket_10: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html",
      
        email_11: "23b_zbv@liceum.ztu.edu.ua",
        class_11: "10-Б 1",
        name_11: "Заєць Богдан",
        project_11: "",
        github_Phazer2stGame_11: "https://github.com/niccer5/Phaser1stGame",
        liveDemo_Phazer2stGame_11: "https://niccer5.github.io/Phaser1stGame/",
        googleDrive_Phazer2stGame_11: "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
        form_Phazer2stGame_11: "https://forms.gle/EcWrBsp6jhMA78Kd9",
        github_GameMarket_11: "https://github.com/niccer5/-GameMarket_Zayets",
        liveDemo_GameMarket_11: "https://niccer5.github.io/-GameMarket_Zayets/",
      
        email_12: "23b_kav@liceum.ztu.edu.ua",
        class_12: "10-Б 1",
        name_12: "Кравчук Андрій",
        project_12: "",
        github_Phazer2stGame_12: "https://github.com/yawty1",
        liveDemo_Phazer2stGame_12: "https://yawty1.github.io/Phaser2ndGame1/",
        googleDrive_Phazer2stGame_12: "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
        form_Phazer2stGame_12: "https://forms.gle/1n5FQ3NmUX6fWiiB6",
        github_GameMarket_12: "https://github.com/yawty1/GameMarket_Kravchuk",
        liveDemo_GameMarket_12: "https://yawty1.github.io/GameMarket_Kravchuk/",
      
        email_13: "23b_kmv@liceum.ztu.edu.ua",
        class_13: "10-Б 1",
        name_13: "Кучер Максим",
        project_13: "Jfr",
        github_Phazer2stGame_13: "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
        liveDemo_Phazer2stGame_13: "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
        googleDrive_Phazer2stGame_13: "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
        form_Phazer2stGame_13: "https://forms.gle/yaJ2EMs6hNbRpTTg9",
        github_GameMarket_13: "https://github.com/KucherMaks/GameMarket_Kucher",
        liveDemo_GameMarket_13: "https://kuchermaks.github.io/GameMarket_Kucher/",
        marketPage_GameMarket_13: "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
        finalPage_GameMarket_13: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html",
      
        email_14: "23b_lkm@liceum.ztu.edu.ua",
        class_14: "10-Б 1",
        name_14: "Лавренко Каріна",
        project_14: "Dudi 2",
        github_Phazer2stGame_14: "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
        liveDemo_Phazer2stGame_14: "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
        googleDrive_Phazer2stGame_14: "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
        form_Phazer2stGame_14: "https://forms.gle/XbBbwwGJ8kJ5tTya8?authuser=0",
        github_GameMarket_14: "https://github.com/KarinaLavrenko/GameMarket_Lavrenko?authuser=0",
        liveDemo_GameMarket_14: "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
        marketPage_GameMarket_14: "https://karinalavrenko.github.io/GameMarket_Lavrenko/market.html?authuser=0",
        finalPage_GameMarket_14: "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0"
      }
      
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