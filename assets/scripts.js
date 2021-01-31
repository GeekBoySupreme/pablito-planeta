async function showZodiac(sign) {

    var index = await getIndex(sign);
    //console.log(sign);
    var article = await getArticle(sign);


    var html =
      '<div id="zodiac_content">\
                    <div class="col-lg-12">\
                        <button class="back_button button_1" onclick="goBack()"><h4><i class="fas fa-arrow-circle-left"></i><h4></button>\
                        <a target=_blank href="https://twitter.com/share?text=I am '+ article +' '+ sign +'. Check out your Zodiac story 🛩️🔭&url=https://pablitoplaneta.space&hashtags=#myzodiac&via=@shuvam360&related=@shuvam360"><button class="back_button button_1"><h4><i class="fab fa-twitter"></i><h4></button><a/>\
                        <a href="#" id="download-zodiac"><button class="back_button" onclick="download_creative()"><h4><i class="fas fa-arrow-circle-down"></i> Download</h4></button></a>\
                        <div class="card-zodiac-op ' +
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
                                    <h3 class="other_content">Your Google Font is <br/><span class="color_tag font_tag_too"  style="' +
      database[index].font_link +
      '">' +
      database[index].font +
      '</span></h3>\
                                    </div >\
\
                                <div class="col-lg-6">\
                                    <h3 class="other_content">Amulet : <img class="amulet_img" src="assets/img/' +
      database[index].amulet_link +
      '.svg"/> <span class="element_tag">' +
      database[index].amulet +
      '</span></h3>\
                                    <br />\
                                    <h3 class="other_content"><span>Strengths :  </span><span>' +
      database[index].strength +
      '</span></h3>\
                                    <br />\
                                    <h3 class="other_content"><span>Weaknesses : </span><span>' +
      database[index].opportunities +
      '</span></h3>\
                                    <br/>\
                                    <a target="blank" href="' +
      database[index].video +
      '"><h3 class="other_content"><span class="element_tag"><i class="fab fa-instagram"></i><i class="fas fa-long-arrow-alt-right"></i></span></h3></a>\
                                    <br/><br/><img class="on_card_img" src="assets/img/Halfface.svg"/>\
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
    name: "capricorn",
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
    font_link: "font-family: '" + "Chivo" + "', sans-serif;",

    theme: "warm",
  },
  {
    name: "aquarius",
    sign: "🌊 Aquarius",
    nickname: "Water bearer",
    description:
      "Aquarius, bebé, fly with me.\
    This year, you're going to be a star because you are someone who sets the trends and innovates with your creativity.Pero, cariño, you have to listen to your team too, I know you're always leading a revolución, but you might learn a thing or two if you bring others.",
    element: "Air",
    amulet: "Glossy 3D Illustrations",
    amulet_link: "glossy_3d_illustration",
    color: "Jorts Blue",
    strength: "Sets trends. Innovative.",
    opportunities: "Unpredictable. Detached. Rebel.",
    video: "https://www.instagram.com/p/CJoL8NIg3hk",
    font: "The playful but profound, Karla",
    font_link: "font-family: '" + "Karla" + "', sans-serif;",

    theme: "aqua",
  },
  {
    name: "pisces",
    sign: "🐠 Pisces",
    nickname: "the Fish",
    description:
      "Pisces, my little fish, let's swim.\
In 2021 the planets align, so your imagination can run wild, and with your kindness, you will design with compassion.\
Pero, bebé, you have to keep focus, not be in the clouds as much, and say yes to everyone. So, concentrate, but keep being a dreamer.",
    element: "Water",
    amulet: "Parallax Scroll Animations",
    amulet_link: "parallax_scroll_animation",
    color: "Poolside Turquoise",
    strength: "Selfless. Imaginative. Passionate.",
    opportunities: "Escapist. Lives on the clouds. Weak-willed.",
    video: "https://www.instagram.com/p/CJq4EJ-gR0E/",
    font: "The energetic and curvy, Rubik",
    font_link: "font-family: '" + "Rubik" + "', sans-serif;",

    theme: "aqua",
  },
  {
    name: "aries",
    sign: "🐑 Aries",
    nickname: "the Ram",
    description:
      "Aries, my little lamb, let’s do this.\
This year has so many adventures for you—with your energy, you'll be creating like crazy, starting so many new things.\
Pero, cariño, slow down a bit, I know you just want to launch your design, but you first have to talk to your user.",
    element: "Fire",
    amulet: "Acrylic Markers",
    amulet_link: "acrylic_markers",
    color: "Tiger Fire",
    strength: "Brave. Independent. Assertive.",
    opportunities: "Selfish. Impulsive. Impatient.",
    video: "https://www.instagram.com/p/CJojWpBgGoU/",
    font: "The Classic Playfair Display",
    font_link: "font-family: '" + "Playfair Display" + "', serif;",

    theme: "twilight",
  },
  {
    name: "taurus",
    sign: "🐃 Taurus",
    nickname: "the Bull",
    description:
      "Taurus, torito, let's gallop. Expect a year full of beautiful shades and compositions because you have an exquisite taste—you'll persist until you have everything looking sharp. But oh! Your patience will be tested in design reviews because changes are coming your way.",
    element: "Fire",
    amulet: "Blurred Backgrounds",
    amulet_link: "blurred_bg",
    color: "Banana Gold",
    strength: "Good taste. Patient, reliable. Persistent.",
    opportunities: "Possesive/Jealous. Inflexible.",
    video: "https://www.instagram.com/p/CJ6TMfCA8l-/",
    font: "The quirky & sexy, Work Sans",
    font_link: "font-family: '" + "Work Sans" + "', sans-serif;",

    theme: "warm",
  },
  {
    name: "gemini",
    sign: "👫 Gemini",
    nickname: "the Twins",
    description:
      "Gemini, my little twins. In 2021 you'll use your many talents to design and create. With your youthful spirit, you'll turn the wireframe of your life into high fidelity. But, cariño. Why are you so nervous? What are you afraid of? We have to work on your confidence. Remember, you're witty and a little manipulative, and you can use that for good.",
    element: "Air",
    amulet: "Powerful Data visualizations",
    amulet_link: "data_viz",
    color: "Berry Fushia",
    strength: "Dynamic. Many talents. Likes games. Youthful. Lively",
    opportunities:
      "Nervous. Tense. Devious. Scheming. Manipulative. Mischievous. Two-faced.",
    video: "https://www.instagram.com/p/CJ_12oZAxeb/",
    font: "The joyful & fancy, Montserrat",
    font_link: "font-family: '" + "Montserrat" + "', sans-serif;",

    theme: "pink",
  },
  {
    name: "cancer",
    sign: "🦀 Cancer",
    nickname: "the Crab",
    description:
      "Mi cangrejito, let's go under the sea.\
I see tremendous opportunities for you this year, and you'll be cautious and a/b test to choose the ones that are best for you.\
\
But, Tesoro, we gotta talk about your mood. You can't be overly emotional about your designs and cling to every little pixel. ",
    element: "Water",
    amulet: "Minimal Desk Organizer",
    amulet_link: "desk_org",
    color: "Sandy Bronze",
    strength:
      "Sensitive. Practical. Cautious. Imaginative. Intuitive. Emotional.",
    opportunities: "Clingy, touchy and moody. Overemotional. Unable to let go.",
    video: "https://www.instagram.com/p/CJtR3Hmgnf5/",
    font: "The pragmatic and flawless, Inter",
    font_link: "font-family: '" + "Inter" + "', sans-serif;",

    theme: "warm",
  },
  {
    name: "leo",
    sign: "🦁 Leo",
    nickname: "the Lion",
    description:
      "Leo, you animal, let's hunt! This year, you aren't letting anything stand in the way of your success metrics. And you'll find new opportunities that will just click your primary buttons.\
      So, as the fabulous queen that you are, stay strong... and generous.",
    element: "Fire",
    amulet: "Gradient Jigsaw Puzzle",
    amulet_link: "jigsaw_puzzle",
    color: "Tangerine Orange",
    strength: "Creative. Popular. Faithful. Broad-minded. Generous.",
    opportunities: "Egocentric. Too proud. Bossy. Dogmatic. Intolerant.",
    video: "https://www.instagram.com/p/CKRZJ81gXiP/",
    font: "The friendly Roboto Slab",
    font_link: "font-family: '" + "Roboto Slab" + "', sans-serif;",

    theme: "twilight",
  },
  {
    name: "virgo",
    sign: "👧 Virgo",
    nickname: "the Virgin",
    description:
      "To trust someone to deliver their KPIs, it's you, Virgo. You're a reliable maker!\
      But, mi Cielo, sometimes you can be over-judgemental. I mean, not because it's called a design critique; you have to be so critical. But I know it's because you have high standards and I respect that!",
    element: "Earth",
    amulet: "Instant Film Camera",
    amulet_link: "instant_camera",
    color: "Naked Peach",
    strength: "Successful. Creative. Likes to please.",
    opportunities: "Obsessive, overcritical and perfectionist",
    video: "https://www.instagram.com/p/CKT5nhrgKLr/",
    font: "The geometric & pure, Poppins",
    font_link: "font-family: '" + "Poppins" + "', sans-serif;",

    theme: "pink",
  },
  {
    name: "libra",
    sign: "⚖️ Libra",
    nickname: "the Scales",
    description:
      "Libra, bebé, let's balance.\
      This year, you'll see clarity and order in your designs. And you'll be diplomatic and fair with every stakeholder.\
      But, corazón, you can be a bit indecisive—you gotta stop switching your fonts every minute!",
    element: "Air",
    amulet: "Enamel Pin",
    amulet_link: "enamel_pin",
    color: "Peacock Blue",
    strength: "Adventurous. Lavish. Irresistible.",
    opportunities: "Indecisive. Self-Pitying. Non-Confrontational.",
    video: "https://www.instagram.com/p/CKWcArrgN8N/",
    font: "The bold, beautiful, Space Mono",
    font_link: "font-family: '" + "Space Mono" + "', monospace;",

    theme: "pink",
  },
  {
    name: "scorpio",
    sign: "🦂 Scorpio",
    nickname: "Scorpion",
    description:
      "Scorpio, you stinger, come over here.\
      This year you won't hold back. With your determination, you'll make all your inventions a reality. And your energy will make others follow because you're a natural leader.\
      But, mi Amor, try not to be so stubborn. You're so intense—me encanta!",
    element: "Water",
    amulet: "A book on Accessibility",
    amulet_link: "access_book",
    color: "Cherry Pop",
    strength: "Determined. Self-reliant. Powerful. Wise. Magnetic",
    opportunities: "Compulsive. Secretive. Jealous/resentful",
    video: "https://www.instagram.com/p/CJ9CKIMA8H3/",
    font: "The calligraphic and elegant, Eczar",
    font_link: "font-family: '" + "Eczar" + "', serif;",

    theme: "aqua",
  },
  {
    name: "saggitarius",
    sign: "🏹 Saggitarius",
    nickname: "the Archer",
    description:
      "Sagittarius, cariño, ride with me!\
      I love that you don't just see the pixels and the vectors; you perceive ideas with clarity because you're inteligente.\
      But, ay Dios mío, you get bored so quickly, jumping from one project to the other, not being able to commit.",
    element: "Fire",
    amulet: "Big Wireless Headphones",
    amulet_link: "headphones",
    color: "Spicy Mustard",
    strength: "Open-minded. Achiever. Loving.",
    opportunities: "Insensitive. Cold. Too optimistic.",
    video: "https://www.instagram.com/p/CKOzu8HAjOn/",
    font: "The humanist & traditional, Proza Libre",
    font_link: "font-family: '" + "Proza Libre" + "', sans-serif;",

    theme: "warm",
  },
];


async function getIndex(string) {
    var flag = 0;
    for (var i = 0; i < database.length; i++) {
        if (string == database[i].name) {
            flag = i;
        }
            
    }

    return flag;
}


function goBack() {

    setTimeout(function () {
        document.getElementById("intro_panel").style.display = "flex";
        document.getElementById("result_container").style.display = "none";
    }, 300);
    
}


function download_creative() {

    console.log("hello");
    alert("Sorry, this feature is not working now :(");
    // $(document).ready(function () {
    //   var element = $("#card-zodiac-op"); // global variable
    //   var getCanvas; // global variable

    //   html2canvas(element, {
    //     onrendered: function (canvas) {
    //       $("#previewImage").append(canvas);
    //       getCanvas = canvas;
    //     },
    //   });

    //   $("#download-zodiac").on("click", function () {
    //     var imgageData = getCanvas.toDataURL("image/png");
    //     // Now browser starts downloading it instead of just showing it
    //     var newData = imgageData.replace(
    //       /^data:image\/png/,
    //       "data:application/octet-stream"
    //     );
    //     $("#download_zodiac")
    //       .attr("download", "yourzodiac.png")
    //       .attr("href", newData);
    //   });
    // });
}


function getArticle(value) {
  var ret='a';
  if(value == 'aquarius' || value == 'aries')
    ret = 'an';

  return ret;
}