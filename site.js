/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/




const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created() {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
            return {
                  title: "IMDB + Disha's Top 8 Movies",
                  owner: "Disha",
                  github: "https://github.com/KyleRabkin61",
                  // This holds your movies.json data.
                  movies: [],
                  /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */

            }
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText(dateArray) {

                  let year = dateArray[0];
                  let day = dateArray[2];
                  switch (dateArray[1]) {
                        case 1:
                              month = "January";
                              break;
                        case 2:
                              month = "February";
                              break;
                        case 3:
                              month = "March";
                              break;
                        case 4:
                              month = "April";
                              break;
                        case 5:
                              month = "May";
                              break;
                        case 6:
                              month = "June";
                              break;
                        case 7:
                              month = "July";
                              break;
                        case 8:
                              month = "August";
                              break;
                        case 9:
                              month = "September";
                              break;
                        case 10:
                              month = "October";
                              break;
                        case 11:
                              month = "November";
                              break;
                        case 12:
                              month = "December";
                              break;
                  }
                  return `${month} ${day}, ${year}`
                  
            },
            posterClick(index) {

                  if(this.movies[index].posterindex > this.movies[index].posters.length - 2) {
                        this.movies[index].posterindex = 0;
                  }else{
                        this.movies[index].posterindex++
                  }

            },
            timeText(minutes) {

                  let hrs = Math.floor(minutes / 60);
                  let mins = minutes % 60;
                  return `${hrs}h ${mins}m`
            }
      }
})

vue_app.mount("#vue_app")