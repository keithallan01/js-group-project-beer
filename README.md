# Slainte

A beer tracking app to allow the user to keep tabs on the beers sampled from around the world! This is a full stack Javascript app using MongoDb, created by a group of beer enthusiasts in the course of a week.  

Follow the steps below to launch the app on your own system.

### Installing


1. Install dependencies

```
npm install
```

2. Run database in new terminal tab (keep running)

```
mongod
```

3. Set up bundle file in new terminal tab (keep running)

```
npm run build
```

4. In new terminal tab run the server (keep running)

```
npm run server:dev
```

5. Seed database

```
mongo < server/db/seeds.js
```

## Built With

* [Javascript](https://www.javascript.com/)
* [MongoDb](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
