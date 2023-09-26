# E-commerce MAAP

## Project Overview

E-commerce MAAP is a simplified e-commerce website inspired by the MAAP brand (https://maap.cc/), specializing in cycling apparel and accessories. This project was created as the final project for the React course offered by CoderHouse (https://coderhouse.com/) in the 47140 class. As my first experience with React, the project showcases my understanding of React fundamentals and practices learned during the course.

While the project offers a simplified version of the original website, it incorporates core features and functionality to provide an enriching learning experience. It's important to note that this project also marks my first use of Tailwind CSS for styling.

The primary focus of this project is to apply fundamental React concepts, and the emphasis is placed on functionality rather than extensive design or content.

## Getting Started

To run this project locally, follow these steps:

1.  Clone this repository to your local machine (https://github.com/EricRiviere/PreEntrega2Riviere-React)

2.  Install dependencies using npm or yarn:

    ```bash
    npm install
    # or
    yarn install

    ```

3.  Create a Firebase project and configure it.

4.  Create a Firebase project at https://console.firebase.google.com/.
    Obtain the Firebase configuration and replace it in firebaseConfig.js in the db folder.
    Import sample data into Firebase Firestore:

5.  Use the provided seedData.json and migrations.js to import sample product data into Firestore. Instructions can be found in the migrations folder.
    Start the development server:

        npm start
        # or
        yarn start

6.  Open your browser and navigate to http://localhost:3000 to view the E-commerce website.

# Deployment

There is also a link on the Github repository with the deployment on vercel.com (pre-entrega2-riviere-react.vercel.app/)

Components
The project is organized into several components:

Item: A component that displays information about a single product, including name, image, price, and stock. Users can click on this component to view more details.

ItemList: This component displays a list of products in a grid layout. It is used to showcase multiple products on various pages of the website.

ItemCount: A component that allows users to adjust the quantity of a product and add it to their cart.

ItemDetail: This component provides detailed information about a product, including its category and description.

Cart: The shopping cart page, where users can view and manage items in their cart. Users can also proceed to checkout from here.

CartItem: A component that displays individual items in the shopping cart. Users can remove items or change their quantities.

CartContext: A React context that manages the state of the shopping cart across the application.

CartWidget: A component that displays the number of items in the cart and allows users to navigate to their cart.

CheckoutForm: A form component for users to provide their name, phone, and email information during the checkout process.

Checkout: The checkout page, where users can review their order and submit it.

firebaseConfig: Contains Firebase configuration settings.

db: Provides access to the Firebase Firestore database.

Usage:

E-commerce MAAP serves as a template that can be customized and extended for specific business needs. You can add more products, categories, or features to make it suitable for your use case.

Feel free to explore and modify the code to adapt it to your requirements.

Acknowledgments:

Special thanks to my CoderHouse professor Horacio Alfredo Gutierrez Estevez and my tutor Javier Gimenez for their knowledge and patience.
