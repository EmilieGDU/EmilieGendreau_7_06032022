# GROUPOMANIA - BACKEND #

## Installation ##

Here are the dependancies you need to install:
- NodeJS 16.14.0
- Nodemon 2.0.15

On Windows, these installations require to use PowerShell in administrator mode.

Then, clone this repo, and run `npm install` from the console of the backend directory.

## Environment variables ##

Rename the *.env-deploy* file to *.env*.

Then :
- open the *.env* file,
- enter your MySQL connection credentials,
- set an encryption key for the token,
- save and close the file.

## Usage ##

Run `nodemon server`. 

This should run the server and automatically restart the node application when file changes in the directory are detected.