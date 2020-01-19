# Personal Website V2

Version 2 of my personal website, built using React.

The website is can be found [here](http://www.john-wu.me).

# Running React App

To run the application, ensure node and npm are installed. Then run the following commands:

```
npm install
npm start
```
The webapp can then be found at localhost:5000.

# Deployment

The application is currently hosted on an Azure Blob Storage. To deploy, run the following commands:

```
npm run install
az storage blob upload-batch -d <BLOB CONTAINER> --account-name <ACCOUNT NAME> -s .
```