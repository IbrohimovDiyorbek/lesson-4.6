let don = prompt('Raqamlardan birontasini tanlang:' + '\n' + '0) qog`oz' + '\n' + '1) qaychi' + '\n' + '2) quduq')
let random1 = Math.floor(Math.random() * 3)

if (random1 == 0) {
    alert('Kompyuter qaychini tanladi')
}

if (random1 == 1) {
    alert('Kompyuter quduqni tanladi')
}

if (random1 == 2) {
    alert('Kompyuter qog`ozni tanladi')
}

if (don == 0) {
    if (random1 == 0) {
        alert('Kompyuter g`alaba qozondi')
    }else {
        alert('Siz g`alaba qozondingiz')
    }
}

if (don == 1) {
    if (random1 == 1) {
        alert('Kompyuter g`alaba qozondi')
    }else {
        alert('Siz g`alaba qozondingiz')
    }
}

if (don == 2) {
    if (random1 == 2) {
        alert('Kompyuter g`alaba qozondi')
    }else {
        alert('Siz g`alaba qozondingiz')
    }
}