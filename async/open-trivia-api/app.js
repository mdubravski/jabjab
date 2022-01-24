/**
 * 
 *  Most asynchronous operations are network related ie making requests
 *  
 *  Server and Client
 *      - HTTP REQUEST = when a client talks to  the server
 *      - HTTP RESPONSE = when a server talks to  the client
 * 
 *  Types of requests you can make
 *      - Create = POST
 *      - Read = GET
 *      - Update = UPDATE
 *      - Delete = DELETE
 * 
 *  HTTP status codes
 *      100 - informational
 *      200 - success
 *      300 - redirection
 *      400 - client error
 *      500 - server error
 * 
 *  Data Formats
 *      - HTML, XML, JSON
 * 
 */

// fetch
// fetch('url')
//     .then(res => {
//         console.log(res);
//     })

const $body = document.querySelector('body');
const url = 'https://opentdb.com/api.php?amount=10&category=12';
let categoryEndPoint = 'https://opentdb.com/api_category.php';

fetch(categoryEndPoint)
    .then(res => res.json())
    .then(data => {
        console.log(data.trivia_categories);
        let categories = data.trivia_categories;
        return  categories.map(elem => {
            return elem.id;
        });
    })
    .then(data => console.log(data))

// fetch()
//   .then(res =>  {
//       return res.json();
//   })
//   .then(data => {
//       console.log(data.results);
//       let markup = ``;
//       data.results.forEach(element => {
//           markup += element.question + '<br>';
//       });
//       $body.innerHTML = markup;
//   });



