Create a form using JADE templating engine such that when I got to the route http://localhost:3000/book/add 
it will render a webpage with 3 input boxes containing book id, book name, author name and a Submit button.
 When I click on the submit button it should send the form data to the backend and print it to console.



 post --- we use the req.body to get the posted data from the body of the form.....

 get -- we will be using the req.params , it will  help us to get the parameter from the URL when it is called....

 when the submit button is pressed it will redirect to the mentioned action --- route and it must be of post method
 and it will get the arguments from the form that is been posted...

 