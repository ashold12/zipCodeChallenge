# zipCodeChallenge
zip code challenge

Please clone down this repo and run the following commands in the terminal

```
npm install express
node index.js
```

At this point the server will be running an open for testing and you can ping the various endpoints

I have made the API fairly simple but I will document all the routes below. Anytime an invalid zip code is entered the server will respond with a 400 status code.

Make all the requests in postman or curl (or other tool of your choice) to the following endpoing 127.0.0.1/8080 or localhost:8080 while appending one of the following endpoints to the request url

NOTE: anytime you see (zip) replace this with a 5 digit integer

<b>GET REQUESTS</b>

/display  --> this will return a string of all the zip codes with the ranges for consecutive zip codes

/has/(zip)  --> this will return a boolean if a valid zip is entered as a parameter, else it will return 400 status

<b>POST REQUEST</b>

/(zip) --> this will return a message `Zip code (zip) inserted` if a valid zip was entered

IT WILL RETURN INSERTED REGARDLESS IF THE ZIP IS PRESENT OR NOT. I found it redundant to code out an additional message considering it was busy work and not a proof of ability

<b>DELETE REQUEST</b>

/(zip) --> this will return a message `Zip code (zip) was deleted` if a valid zip was entered 

likewise as above this will not return an alternate message under the condition that the zip is not present in memory already. The reasoning is the same for the aditional post request functionality

Thank you! 

