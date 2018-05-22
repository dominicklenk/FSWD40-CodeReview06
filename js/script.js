var Audio = [                           
    {                                   // arrays of Audio, Movies and Books objects below
        Title: 'Dylan',
        Type: "CD",
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
        Type: "CD",
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
        Type: "CD",
        Author: 'Robin Schulz & Marc Scibilia',
        Genre: 'Dance & Electronic',
        Minutes: 3.46,
        Publisher: 'Warner Music Group',
        img: "img/Unforgettable.jpg",
        Description: "'Unforgettable' is one of my favorite tracks on my third album Uncovered because of the way it builds up,' Schulz tells Billboard.",
        Rating: 5
    }

];

var Movies = [
    {
        Title: 'City lights',
        Type: "DVD",
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
        Type: "DVD",
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
        Type: "DVD",
        Author: 'Philip K. Dick',
        Genre: 'action',
        Minutes: 146,
        Publisher: 'Twentieth Century Fox',
        Description: 'In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder.',
        img: "img/Minority.jpg",
        Rating: 5
    }

];

var Books = [
    {
        Title: 'Woodwalkers',
        Type: "Book",
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
        Type: "Book",
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
        Type: "Book",
        Author: 'Neil Gaiman',
        Genre: 'fantasy',
        Publisher: 'Vertigo',
        Weight: '0.6 kg',
        Description: 'The Sandman is a book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaimans trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe.',
        img: "img/Sandman.jpg",
        Rating: 4
    }
];




for (var i = 0; i < Movies.length; i++) {

document.getElementById("film").innerHTML += `                       
        <div class="col-lg-4 col-md-6 col-sm-5">
            <a href="#" data-toggle="modal" data-target="#ModalMovie${i}"><img src="${Movies[i].img}"></a>
            <br>
            <strong>Title: </strong>${Movies[i].Title}
            <br>
            <strong>Type: </strong>${Movies[i].Type}
            <br>
            <strong>Rating: </strong>${Movies[i].Rating}<span id="stars"> &starf; </span>


<div class="modal fade" id="ModalMovie${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="text-center"><p>${Movies[i].Title}</p></h3>
      </div>
      <div class="modal-body">
    
    <p>Author: ${Movies[i].Author}</p>
    <p>Genre: ${Movies[i].Genre}</p>
    <p>Minutes: ${Movies[i].Minutes}</p>
    <p>Publisher: ${Movies[i].Publisher}</p>
    <p>Description: ${Movies[i].Description}</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </div>

`
};
/*
for (l = 0; l < Movies[i].Rating; l++) {
document.getElementById("stars").innerHTML += "<span id=\"stars\">" + '&starf;' + "</span>";

};
*/

for (var b = 0; b < Books.length; b++) {
document.getElementById("book").innerHTML += `                       
        <div class="col-lg-4 col-md-6 col-sm-5">
            <a href="#" data-toggle="modal" data-target="#ModalBook${b}"><img src="${Books[b].img}"></a>
            <br>
            <strong class="">Title: </strong>${Books[b].Title}
            <br>
            <strong>Type: </strong>${Books[b].Type}
            <br>
            <strong>Rating: </strong> ${Books[b].Rating}<span id="stars"> &starf; </span>


<div class="modal fade" id="ModalBook${b}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="text-center"><p>${Books[b].Title}</p></h3>
      </div>
      <div class="modal-body">
    
    <p>Author: ${Books[b].Author}</p>
    <p>Genre: ${Books[b].Genre}</p>
    <p>Minutes: ${Books[b].Minutes}</p>
    <p>Publisher: ${Books[b].Publisher}</p>
    <p>Description: ${Books[b].Description}</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </div>
`
};



/*
for (l = 0; l < Books[i].Rating; l++) {
document.write("<span id=\"stars\">" + '&starf;' + "</span>");
};
*/


for (var a = 0; a < Audio.length; a++) {
document.getElementById("mus").innerHTML += `                       
        <div class="col-lg-4 col-md-6 col-sm-5">
            <a href="#" data-toggle="modal" data-target="#ModalAudio${a}"><img src="${Audio[a].img}"></a>
            <br>
            <strong>Title: </strong>${Audio[a].Title}
            <br>
            <strong>Type: </strong>${Audio[a].Type}
            <br>
            <strong>Rating:</strong> ${Audio[a].Rating}<span id="stars"> &starf; </span>


<div class="modal fade" id="ModalAudio${a}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="text-center"><p>${Audio[a].Title}</p></h3>
      </div>
      <div class="modal-body">
    
    <p>Author: ${Audio[a].Author}</p>
    <p>Genre: ${Audio[a].Genre}</p>
    <p>Minutes: ${Audio[a].Minutes}</p>
    <p>Publisher: ${Audio[a].Publisher}</p>
    <p>Description: ${Audio[a].Description}</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </div>
`
};


/*
for (l = 0; l < Audio[i].Rating; l++) {
    document.write("<span id=\"stars\">" + '&starf;' + "</span>");
};
*/