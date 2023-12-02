# M-16 - I implemented multer and firebase - Nicolas Barrera

- First we must have the multer and firebase-admin dependencies installed in order to use their tools in my code.
Multer gives me the possibility of being able to store the data of the file that I send from the front or client, in this case an image, in the internal memory of the application to later pass that information to the next middleware, to the firebase, which receives that data, in this case an object and processes that information to be able to load the image file in the storage of the google database.


# M-19 - Reactions in my app - Nicolas Barrera

- I added the possibility of reacting to comics through likes and dislikes, I made three controllers where one sends a post request when reacting, another brings me the reactions by type of user, and another that brings me the reactions of likes and dislikes to render in my components of their corresponding reaction.
The particular thing about the case is the functionality of the post request, since it must create, delete and edit the database according to the object that is sent from my client, this is achieved because I have a middleware that handles the information that comes from the front, if this information that is received already exists, I delete it, if it does not exist I let the controller create the reaction for me, if there is already a reaction to that manga from the same user, it updates it by changing the "name" property, if before there was a reaction, it is changed to an inverse reaction, which already existed previously.
Then there are two get controllers that get the reactions from the database to render the favorites page and the reactions given by the app user.