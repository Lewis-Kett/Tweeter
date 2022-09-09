# Tweeter

A fun side-project inspired by Sonny Sangha's twitter clone.

Scaffolded from the Next-js & Tailwind CSS boilerplate project, I've used MongoDb and Mongoose for the back-end to create a REST API for both Tweets and Comments with CRUD functionality. 

For the front-end I've used React & Tailwind CSS with the addition of Storybook to develop and test front-end components in isolation.

A TDD methodology was used during front-end component creation with unit tests for all major functionality.

## How to use

Clone the project and `yarn install` to install the dependencies.

To get the DB running locally I used docker to create a local mongoDB. You can replicate my setup with:
` docker run --name <db name here> -dit -p 27017:27017 --rm mongo:latest`

Latest version at time of writing is 6.0

Create a `.env.local` file in the project root and add an environment variable `MONGO_URI="mongodb://localhost:27017/<your db name here>"`

Start the NextJs dev server with `yarn start`

Start storybook with `yarn storybook`

Run the test suite with `yarn test`

## Future improvements
- Change out all <img /> tags to use Next's <Image> component
- Expose update and delete functionality for tweets and comments on the front-end (API exsits)
- Deploy via Vercel and MongoDB Atlas
- Add some more plugins to Storybook
- Add server / API tests
- Add Cypress E2E tests

## Other Comments
I decided aginst using Sanity CMS like Sonny, nothing wrong with Sanity just wanted to work with Mongo on this project. I also decided against implementing Auth, as I didn't want to put any more steps between someone getting the project working locally and using the functionality of the app. When I deploy the project, I will implement Auth to stop bot's or people filling up the free tier of Atlas too quickly.