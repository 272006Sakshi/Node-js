### Server: communicates with clients
 - Analogy --> server = waiter
 - Analogy --> chef = database

- A server is a **computer program** that is responsible for preparing and delivering data to other computers

- web pages, images, videos, or any additional information

## JSON: JavaScript Object Notation
- Imagine you're sending a message to your friend, and you want to include information like your name, age, and a list of your favorite hobbies.
- we can't send message as it is, 
- we need to organise the information in a way that we both understand.

- JSON is a bit like this organized format for exchanging data between computers.

- JSON is lightweight.
- Structured and organized data because in most context, JSON is represented as a string.

{
    "name": "Sakshi",
    "age": 19, 
    "hobbies": ["reading", "yoga", "Writing"]
}

## What are API and Endpoints?
- Imagine a menu card in a restaurant
- lots of options are there, each option will give a different order
- Collection of that list = Menu card = API's
- Option in that list = Endpoint
- Waiter only understood whatever things are written on the menu card

## create a Server

- creating a server in NodeJs via express package
- Express.js is a popular framework for building Web applications and APIs using Node.js.

- when we create an Express.js application, we're setting up the **foundation for handling incoming requests** and defining how our application respond them.

- Now we are going to create server.
- the waiter has his own home?
 -- in simple terms, **localhost** refers to our **own computer**. After creating a server in NodeJs, we can access our environment in 'localhost'.

 - Port Number?
   -- suppose in a building - 100 rooms are there, for someone to reach we must know the room number.
