function showZodiac(sign) {

    var index = getIndex(sign);
    console.log(sign);


    var html =
      '<div id="zodiac_content">\
                    <div class="col-lg-12">\
                        <div class="card_zodiac_op">\
                            <div class="row">\
                                <div class="col-lg-6">\
                                    <h3 class="big_text_card">🐐Capricorn</h3>\
                                    <h3 class="nickname_text">(nickname : Hello)</h3>\
                                    <br />\
                                    <h3 class="description_content">Mi cangrejito, lets go under the sea.\
                                    I see tremendous opportunities for you this year, and you will be cautious and a/b test to choose the ones that are best\
                                    for you.\
                                    </h3>\
                                    <br/>\
                                    <h3 class="other_content"> Your Element is <span class="element_tag">Earth</span></h3>\
                                    <br />\
                                    <h3 class="other_content"> Your Color is <span class="color_tag">Earth</span></h3>\
                                </div>\
\
                                <div class="col-lg-6">\
                                    <h3 class="other_content"><img class="amulet_img" src="assets/img/Ball.svg"/> Amulet : <span class="element_tag">Blah Balh</span></h3>\
                                    <br />\
                                    <h3 class="other_content"> Your strengths :  <span class="element_tag">Earth</span></h3>\
                                    <br />\
                                    <h3 class="other_content"> Opportunities : <span class="element_tag">Earth</span></h3>\
                                    <br/>\
                                    <h3 class="other_content"><span class="element_tag"><i class="fab fa-instagram"></i><i class="fas fa-long-arrow-alt-right"></i></span></h3>\
                                    <img class="on_card_img" src="assets/img/Halfface.svg"/>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>'; 
    
    document.getElementById("result_container").innerHTML = html;
    document.getElementById("intro_panel").style.display = "none";
    document.getElementById("result_container").style.display = "block";

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