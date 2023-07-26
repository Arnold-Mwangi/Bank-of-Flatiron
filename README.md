## bank of flatiron
Is a web application that fetches bank transactions from a Bank transactions API and allows a user to perform CRUD operations on the transactions
It implements the use of fetch API, React state, Components, props, react lists, react forms, and the passing of data from child components to Parent components

 Project deployment link: []((https://chimerical-rugelach-605b02.netlify.app/)).
# Getting Started with Bank of Flatiron React App
  Clone the project to your machine
 Then run the following commands in the project root directory:
 ### `npm install`
The command installs all the dependencies and packages required by the app according to the package.json file.
  
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## The project should look like this on opening
![Screenshot from 2023-07-26 12-14-32](https://github.com/Arnold-Mwangi/Bank-of-Flatiron/assets/78974739/f99f91ba-cd17-489f-b309-8c8b5dde77f0)

## A user can search for a transaction by description, category amount or data.
This is accomplished by selecting the filter to use. For instance, clicking on the Category radio button will allow the user to perform a search based on the category
![Screenshot from 2023-07-26 12-19-04](https://github.com/Arnold-Mwangi/Bank-of-Flatiron/assets/78974739/bcb907fa-73a4-446d-8b6a-4e4fd805fb55)


## Transaction Deleting
To delete a transaction all you have to do is click on the delete icon on the table rows.
This action removes the transaction from the DOM based on the transaction ID

