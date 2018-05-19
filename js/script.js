var audio = [                           
    {                                   //
        Title: 'Dylan',
        Author: 'Bob Dylan',
        Genre: 'rock',
        Minutes: 34,
        Publisher: 'Columbia Records',
        Description: 'Dylan is the 13th studio album by American singer-songwriter Bob Dylan, released on November 19, 1973 by Columbia Records. Compiled and issued by the label with no input from Dylan himself, it contains no original Dylan songs, the material consisting of two outtakes from Self Portrait and another seven from New Morning. It followed the artists departure from Columbia for Asylum Records, and the announcement of his first major tour since 1966. ',
        img: "img/Bob_Dylan.jpg",
        Rating: 4
    },
    {
        Title: 'Diamond Life',
        Author: 'Sade',
        Genre: 'smooth soul',
        Minutes: 45,
        Publisher: 'Epic',
        Description: 'Diamond Life is the debut studio album by English band Sade.It was first released in the United Kingdom on 16 July 1984 by Epic Records and in the United States on 27 February 1985 by Portrait Records.Diamond Life went on to sell over six million copies worldwide, becoming one of the top - selling debut recordings of the 80s and the best-selling debut by a British female vocalist',
        img: "img/sade-diamond-life.jpg",
        Rating: 2
    },
    {
        Title: 'Unforgettable',
        Author: 'Robin Schulz & Marc Scibilia',
        Genre: 'Dance & Electronic',
        Minutes: 3.46,
        Publisher: 'Warner Music Group',
        img: "img/Unforgettable.jpg",
        Description: "'Unforgettable' is one of my favorite tracks on my third album Uncovered because of the way it builds up,' Schulz tells Billboard.",
        Rating: 5
    }

];

var movies = [

    {
        Title: 'City lights',
        Author: 'Charlie Chaplin',
        Genre: 'romantic comedy',
        Minutes: 87,
        Publisher: 'United Artists',
        Description: 'City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplins Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionair(Harry Myers).',
        img: "img/citylights.jpg",
        Rating: 3
    },
    {
        Title: 'Lawrence of Arabia',
        Author: 'T.E.Lawrence',
        Genre: 'historical drama',
        Minutes: 222,
        Publisher: 'Columbia Pictures',
        Description: 'Lawrence of Arabia is a 1962 epic historical drama film based on the life of T. E. Lawrence. It was directed by David Lean and produced by Sam Spiegel through his British company Horizon Pictures, with the screenplay by Robert Bolt and Michael Wilson. The film stars Peter OToole in the title role.It is widely considered one of the greatest and most influential films in the history of cinema.',
        img: "img/Lawrence.jpg",
        Rating: 4
    },
    {
        Title: 'Minority Report',
        Author: 'Philip K. Dick',
        Genre: 'action',
        Minutes: 146,
        Publisher: 'Twentieth Century Fox',
        Description: 'In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder.',
        img: "img/Minority.jpg",
        Rating: 5
    }

];

var books = [

    {
        Title: 'Woodwalkers',
        Author: 'Katja Brandis',
        Genre: 'belletristik',
        Publisher: 'Bild',
        Weight: '1 kg',
        Description: 'Auf den ersten Blick sieht Carag aus wie ein normaler Junge. Doch hinter seinen leuchtenden Augen verbirgt sich ein Geheimnis: Carag ist ein Gestaltwandler. Aufgewachsen als Berglöwe in den Wäldern lebt er erst seit Kurzem in der Menschenwelt. Das neue Leben ist für ihn so fremd wie faszinierend.',
        img: "img/woodwalkers.jpg",
        Rating: 2
    },
    {
        Title: 'The Great Gatsby',
        Author: ' F. Scott Fitzgerald',
        Genre: 'fantasy drama',
        Publisher: 'Scribner',
        Weight: '1.2 kg',
        Description: 'Here is a novel, glamorous, ironical, compassionate – a marvelous fusion into unity of the curious incongruities of the life of the period – which reveals a hero like no other – one who could live at no other time and in no other place. But he will live as a character, we surmise, as long as the memory of any reader lasts.',
        img: "img/Great-Gatsby.jpg",
        Rating: 3
    },
    {
        Title: 'The Sandman',
        Author: 'Neil Gaiman',
        Genre: 'fantasy',
        Publisher: 'Vertigo',
        Weight: '0.6 kg',
        Description: 'The Sandman is a book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaimans trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe.',
        img: "img/Sandman.jpg",
        Rating: 4

    }
];



//
document.write("<div class = \"container\">" + "<div class=\"row\">" + "<div id=\"headline\" class=\"col-md-12\">" + "<h1 class=\"text-center\">MBM Mediathek<h1>" + "<br>" + "</div>" + "</div>" + "<h2>Movies</h2>" + "<hr>" + "<div id=\"film\" class=\"row\">");       // 





for (var i = 0; i < movies.length; i++) {

//$(document.body).append('<h2>Movies</h2><hr>"<div id="film" class= row""><div class="col-lg-4 col-md-6 col-sm-5"><div class="co"><img src= '+ movies[i].img + '><br><b> ' + ' Title: ' + ' </b> ' + movies[i].Title + ' <br>');

document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">" + "<div class=\"co\">" + '<img src="' + movies[i].img + '">' + '<br>' + "<b>" + "Title: " + "</b>" + movies[i].Title + "<br>" + "Rating: ");



for (l = 0; l < movies[i].Rating; l++) {
document.write("<span id=\"stars\">" + '&starf;' + "</span>");

};


document.write("<div class=\"popup\">");
document.write("</div>" + "</div>" + "</div>");


};

document.write("</div>");

document.write("<h2>Books</h2>" + "<hr>" + '<div id=\"book\" class=\"row\">');




for (var i = 0; i < books.length; i++) {
document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">" + "<div class=\"co\">" + '<img src="' + books[i].img + '">' + '<br>' + "<b>" + "Title: " + "</b>" + books[i].Title + "<br>" + "Rating: "); // '<div class=\"popup\" onclick="myFunction()"> + "Click, for more information!" + <span class=\"popuptext" id=\"myPopup">'write content here'</span>'</div\">'



for (l = 0; l < books[i].Rating; l++) {
document.write("<span id=\"stars\">" + '&starf;' + "</span>");
};

document.write("</div>" + "</div>");

};

document.write("</div>");

document.write("<h2>Music</h2>" + "<hr>" + "<div id=\"mus\" class=\"row\">");




for (var i = 0; i < audio.length; i++) {
document.write("<div class=\"col-lg-4 col-md-6 col-sm-5\">" + "<div class=\"co\">" + '<img src="' + audio[i].img + '">' + '<br>' + "<b>" + "Title: " + "</b>" + audio[i].Title + "<br>" + "Rating: ");


for (l = 0; l < audio[i].Rating; l++) {
    document.write("<span id=\"stars\">" + '&starf;' + "</span>");
};


document.write("<br>");
document.write("<div class=\"popup\">");
document.write("</div>");
document.write("</div>");
document.write("</div>");
};

document.write("</div>" + "</div>");