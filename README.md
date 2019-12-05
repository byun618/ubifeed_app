# Ubifeed Mobile Application

## About the Application

The Ubifeed App is a mobile application developed with Ionic. Its purpose is to allow visitors of sports venues to order food and drinks via their smartphone. The food will then be delivered to a specific pickup point, depending on the users seat within the venue.


## Installation procedure

To get the App running just follow the instructions below.

### Software installation

In order to use Ionic, you have to install NodeJS and the npm package manager. For a more detailed description of the installation process, please use the manuals from the provider. It would also be good to install the Ionic CLI with npm. Use the below command to install the Ionic CLI globally on your machine.

```
npm install -g ionic
```


### 2 - Clone Repository / Unzip the directory

If you have access to the gitlab repository, just clone the repository onto your local machine with the following command:

```
git clone https://github.com/MarcoWilhelm/ubifeed_app.git
```

If you received the project as a zip file, you probably already unzipped it in order to read this file.

### 3 - Install dependencies

The first time using the project, you have to install all dependencies (Node Modules). In your Terminal, navigate to the repository (..../ubifeed_app/ubifeed) and run the following command:

```
npm install
```

This will install all dependencies for you.

#### 4 - Run the app

After installing the dependencies, you are ready to run the app.
Using the Ionic CLI, navigate to the repository (..../ubifeed_app/ubifeed) and run

```
ionic serve
```

After compiling, the App will start in your default browser.

### 5 - Further information

In order to get the data within the app, you need to have the Java Backend and the MySQL Database setup.

Repository for the Backend: https://github.com/MarcoWilhelm/Ubifeed.git

If you are getting an Error in the JavaScript Console about CORS Issues, you might need a browser plugin to allow CORS for testing within the browser.