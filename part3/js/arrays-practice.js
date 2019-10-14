/*eslint-env browser */

//STEP 1
var moviesArr = ["Titanic", "The Matrix", "Speed", "Takken", "The Notebook"];
window.console.log(moviesArr[1]);
window.console.log("\n");


//STEP 2
var movies = new Array(5);
movies[0] = "Rocky";
movies[1] = "Kill Bill";
movies[2] = "Avatar";
movies[3] = "Die Hard 5";
movies[4] = "Rush Hour";
window.console.log(movies[0]);
window.console.log("\n");

//STEP 3
movies.splice(2, 0, "Joker");
window.console.log(movies.length);
window.console.log("\n");

//STEP 4
var movieList = [];
movieList[0] = "Rocky";
movieList[1] = "Kill Bill";
movieList[2] = "Avatar";
movieList[3] = "Die Hard 5";
movieList[4] = "Rush Hour";
delete movieList[0];
window.console.log(movieList);

//STEP 5
var movieList1 = [];
movieList1[0] = "Rocky";
movieList1[1] = "Kill Bill";
movieList1[2] = "Avatar";
movieList1[3] = "Die Hard 5";
movieList1[4] = "Rush Hour";
movieList1[5] = "Joker";
movieList1[6] = "Alladin";

var i;
for (i = 0; i < movieList1.length; i += 1) {
    window.console.log(movieList1[i]);
}
window.console.log("\n");

//STEP 6
var movieList2 = [];
movieList2[0] = "Rocky";
movieList2[1] = "Kill Bill";
movieList2[2] = "Avatar";
movieList2[3] = "Die Hard 5";
movieList2[4] = "Rush Hour";
movieList2[5] = "Joker";
movieList2[6] = "Alladin";

var index;
for (index in movieList2) {
    window.console.log(movieList2[index]);
}
window.console.log("\n");

//STEP 7
var movieList3 = [];
movieList3[0] = "Rocky";
movieList3[1] = "Kill Bill";
movieList3[2] = "Avatar";
movieList3[3] = "Die Hard 5";
movieList3[4] = "Rush Hour";
movieList3[5] = "Joker";
movieList3[6] = "Alladin";

var x;
for (x in movieList3.sort()) {
    window.console.log(movieList3[x]);
}
window.console.log("\n");

//STEP 8
var movieList4 = [];
movieList4[0] = "Rocky";
movieList4[1] = "Kill Bill";
movieList4[2] = "Avatar";
movieList4[3] = "Die Hard 5";
movieList4[4] = "Rush Hour";
movieList4[5] = "Joker";
movieList4[6] = "Alladin";

var leastFavMovies = ["The Tourist", "Ad Astra", "Momento"];

window.console.log("Movies I like:");
window.console.log("\n");
var y;
for (y = 0; y < movieList4.length; y += 1) {
    window.console.log(movieList4[y]);
}
window.console.log("\n");
window.console.log("Movies I regret watching:");
window.console.log("\n");
var i1;
for (i1 = 0; i1 < leastFavMovies.length; i1 += 1) {
    window.console.log(leastFavMovies[i1]);
}
window.console.log("\n");

//STEP 9
movieList4 = [];
movieList4[0] = "Rocky";
movieList4[1] = "Kill Bill";
movieList4[2] = "Avatar";
movieList4[3] = "Die Hard 5";
movieList4[4] = "Rush Hour";
movieList4[5] = "Joker";
movieList4[6] = "Alladin";

leastFavMovies = ["The Tourist", "Ad Astra", "Momento"];

movies = movieList4.concat(leastFavMovies);
movies = movies.reverse();
for (var x1 in movies){
    window.console.log(movies[x1]);
}
window.console.log("\n");


//STEP 10
movieList4 = [];
movieList4[0] = "Rocky";
movieList4[1] = "Kill Bill";
movieList4[2] = "Avatar";
movieList4[3] = "Die Hard 5";
movieList4[4] = "Rush Hour";
movieList4[5] = "Joker";
movieList4[6] = "Alladin";

leastFavMovies = ["The Tourist", "Ad Astra", "Momento"];

movies = movieList4.concat(leastFavMovies);
movies = movies.reverse();

var lastItem = movies.slice((movies.length)-1);
window.console.log(lastItem);
window.console.log("\n");
