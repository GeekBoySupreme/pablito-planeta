function showZodiac(sign) {

    var index = getIndex(sign);
    console.log(sign);


    var html =
      '<div id="zodiac_content">\
                    <div class="col-lg-12">\
                        <button class="back_button button_1" onclick="goBack()"><h4><i class="fas fa-arrow-circle-left"></i><h4></button>\
                        <button class="back_button" onclick="download_creative()"><h4><i class="fas fa-arrow-circle-down"></i> Download</h4></button>\
                        <div class="card_zodiac_op ' +
      database[index].theme +
      '">\
                            <div class="row">\
                                <div class="col-lg-6">\
                                    <h3 class="big_text_card">' +
      database[index].sign +
      '</h3>\
                                    <h3 class="nickname_text">(nickname : ' +
      database[index].nickname +
      ')</h3>\
                                    <br />\
                                    <h3 class="description_content">' +
      (database[index].description || " ") +
      '\
                                    </h3>\
                                    <br/>\
                                    <h3 class="other_content"><span>Your Element is </span><span class="element_tag">' +
      database[index].element +
      '</span></h3>\
                                    <br />\
                                    <h3 class="other_content"><span>Your Color is </span><span class="color_tag ' +
      database[index].color +
      '">' +
      database[index].color +
      '</span></h3>\
                                    <br />\
                                    <h3 class="other_content"><span class="color_tag"  style="font-family : ' +
      database[index].font_link +
      ', sans-serif;">' +
      database[index].font +
      '</span></h3>\
                                    </div >\
\
                                <div class="col-lg-6">\
                                    <h3 class="other_content"><img class="amulet_img" src="assets/img/' +
      database[index].amulet_link +
      '.svg"/> Amulet : <span>' +
      database[index].amulet +
      '</span></h3>\
                                    <br />\
                                    <h3 class="other_content"><span>Your strengths :  </span><span>' +
      database[index].strength +
      '</span></h3>\
                                    <br />\
                                    <h3 class="other_content"><span>Opportunities : </span><span>' +
      database[index].opportunities +
      '</span></h3>\
                                    <br/>\
                                    <a target="blank" href="' +
      database[index].video +
      '"><h3 class="other_content"><span class="element_tag"><i class="fab fa-instagram"></i><i class="fas fa-long-arrow-alt-right"></i></span></h3></a>\
                                    <img class="on_card_img" src="assets/img/Halfface.svg"/>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>'; 
    
    document.getElementById("result_container").innerHTML = html;

    setTimeout(function () {
        document.getElementById("intro_panel").style.display = "none";
        document.getElementById("result_container").style.display = "block";
    }, 300);
    

}

var database = [
  {
    sign: "🐐 Capricorn",
    nickname: "the Goat",
    description:
      "Capricorn, chivito, 2021 will be so easy for you because you are a hard worker—you like to push the pixels. \
                        Pero, mi amor, I know you are a perfectionist, but you have to let go un poquito and embrace the magic of shapes that are a bit off.",
    element: "Earth",
    amulet: "Dot Grid Notebook",
    amulet_link: "dot_grid_notebook",
    color: "Hot Sauce Red",
    strength: "Hardworking. Straightforward. Loyal",
    opportunities: "Stubborn. Perfectionist.",
    video: "https://www.instagram.com/p/CJpHNCOA8o_/",
    font: "The jolly grotesque, Chivo",
    font_link: "'" + "Chivo" + "'",

    theme: "warm",
  },
  {
    sign: "🌊 Aquarius",
    nickname: "Water bearer",
    description:
      "Aquarius, bebé, fly with me.\
    This year, you're going to be a star because you are someone who sets the trends and innovates with your creativity.",
    element: "Air",
    amulet: "Glossy 3D Illustrations",
    amulet_link: "glossy_3d_illustration",
    color: "Jorts Blue",
    strength: "Sets trends. Innovative.",
    opportunities: "Unpredictable. Detached. Rebel.",
    video: "https://www.instagram.com/p/CJoL8NIg3hk",
    font: "The playful but profound, Karla",
    font_link: "'" + "Karla" + "'",

    theme: "aqua",
  },
];


function getIndex(string) {
    var flag = 0;
    for (var i = 0; i < database.length; i++) {
        if (string == database[i].sign)
            flag = i;
    }

    return flag;
}


function goBack() {

    setTimeout(function () {
        document.getElementById("intro_panel").style.display = "flex";
        document.getElementById("result_container").style.display = "none";
    }, 300);
    
}