# DiveVR

### University Name: [San Jose State University](http://www.sjsu.edu/)
### Course: [Enterprise Software](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE172.html)
### Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)

### Students:
#### [Abraham Tesfay]()
#### [Dominic Pham](https://www.linkedin.com/in/dominic-pham-849638153/)
#### [Cheng Chin Lim](https://www.linkedin.com/in/cheng-chin-lim/)
#### [Dung Anh Nguyen](https://www.linkedin.com/in/daniel-nguyen-417162156/)

## Table of Contents

* [Project Introduction](#project-introduction)
* [Demo Screenshots](#demo-screenshots)
* [Pre-requisites Set Up](#pre-requisites-set-up)
* [How to set up and run project locally](#how-to-set-up-and-run-project-locally)


## Project Introduction
The main goal of our project is to develop Dive VR platform - a web browser-based, cross platform VR space on the web and make it available mainstream. The project has two main components, the first one is a full functional web app platform to manage all the contents of the VR.  This part of the product will have a full dashboard functionality where users can sign-up for new Dive VR account, upload VR contents and manage their account accordingly. This Dive VR dashboard should also provide some statistical data to the user based on VR category views and demography.  

The second component of our product is to design Oculus app that runs on the Oculus standalone VR headset. The goal is to inject the web app we developed in the first component of the project.  The whole purpose is to run the VR contents on browser inside the Oculus app that way a user can have impressive experience. We also hope to implement compatibility with different types of VR headsets.
 
At the end of our project we are hoping to provide a dynamic Virtual Reality platform packed with variety of VR content and experience. Since VR/AR industry is bound to grow exponentially for the next five years, we also hope to tap into this billion-dollar industry and be early adopters. 

## Demo Screenshots


## Pre-requisites Set Up


## How to set up and run project locally?

### Setting Up Project on Mac

1. Open a terminal and cd into the root directory (`DiveVR`, not `react`)
2. Run `npm install`

The following environment variables need to be set in the backend (root directory):
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AWS_REGION
* S3_BUCKET_NAME
* DYNAMO_TABLE_NAME

3. Run `npm start` in the root directory to start up the backend
4. Cd into the `react` folder, then run `npm install`

The following environment variables need to be set in the frontend (react directory)
* REACT_APP_FIREBASE_API_KEY
* REACT_APP_FIREBASE_AUTH_DOMAIN
* REACT_APP_FIREBASE_DATABASE_URL
* REACT_APP_FIREBASE_PROJECT_ID
* REACT_APP_FIREBASE_STORAGE_BUCKET
* REACT_APP_FIREBASE_MESSAGING_SENDER_ID
* REACT_APP_FIREBASE_APP_ID
* REACT_APP_EXPRESS_BACKEND

5. Run `npm start` in the `react` folder. The localhost page should open up in the browser.
