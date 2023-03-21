# Restaurant Search UI
This is a restaurant search front end that utilizes a laravel backend to leverages the Yelp api

## Installation
After cloning this repository, open your terminal and move to the root directory of the repository

```ssh
cd ./restaurantfe-v2
```
After which, you then install all dependencies using this command
```ssh
npm install
```
After dependencies have been installed, you can choose to first run all the unit tests
to make sure everything is running fine
```ssh
npm run test
```

After everything seems okay with the tests, you can then proceed to build the application
```ssh
npm run build
```
After running the command above, a new directory ``./build`` will be available in your root directory
that you can deploy on a server of your choice. but in the event you don't have one
installed, you can easily set up one in node by installing one using the following command
```ssh
npm install -g serve
```

then assuming you are still running the application within the same repository,
you can then run this command to run the application
```ssh
serve -s build
```
the ``build`` in the command refers to the directory you are serving.

## Prerequisites
 - **Running backend** : You should have a running backend that this UI can access using Restful services.
Depending on where the backend has been set up, you should adjust the ``baseUrl`` in file ``./src/config/clientHandler.ts`` to point to it.
The backend repo can be found on this github repo: https://github.com/sewalups/restaurant-search
 - **Node and Npm**: Make sure your platform has the latest version of node installed

>Note: Make sure the prerequisites have been set up before building your application. possibly after cloning the application


#### Author
Sewalu Mukasa Steven