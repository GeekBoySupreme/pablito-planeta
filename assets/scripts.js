function showZodiac(sign) {

    var index = getIndex(sign);
    console.log(sign);
    var html; 

}

var database = [
    {
        'sign': 'capricorn',
        'nickname': 'the Goat',
        'element': 'Earth',
        'amulet': 'Notebook',
        'color': 'Sauce Red',
        'typeface': 'nunito',
        'strength': 'happy',
        'opportunities': 'job',
        'video': 'insert link',

        'background-color': 'red',
        'color': 'white',
        'theme': 'warm'
    }
]


function getIndex(string) {
    var flag = 0;
    for (var i = 0; i < database.length; i++) {
        if (string == database[i].sign)
            flag = i;
    }

    return flag;
}