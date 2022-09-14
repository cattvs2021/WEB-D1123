let drink ="Energy Drink";
let lyrics ="";
let cans =99;
let paragraph = document.getElementById("one");
while (cans > 0) {
    lyrics = lyrics + cans + " cans of "
    + drink + " on the wall <br>"
    lyrics = lyrics + cans + " cans of "
    + drink + "";
    lyrics = lyrics + "take one down, pass it around, <br>";
    if(cans > 1) {
        lyrics = lyrics + (cans - 1) + "cans of" + drink + " on the wall ,";
    }
    else {
        lyrics = lyrics + "no more cans of" + drink + " on the wall"
    }
    cans = cans - 1;
}
paragraph.innerHTML = lyrics;
console.log(lyrics);