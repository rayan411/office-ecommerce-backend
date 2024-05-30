# E-commerce Website Backend

## Introduction
This project represents the backend for an e-commerce web application. The application is designed to be used in company offices for customer service. Each office has a screen displaying products, and office managers can add selected products to a basket for their clients. Each manager has a unique login associated with their office number. The backend is built with Node.js and uses PostgreSQL for database management, while the frontend is developed using Angular.

## Purpose
The purpose of this project is to provide a backend server that manages product information, user authentication, and basket operations for an e-commerce website. Node.js is chosen for its efficient, non-blocking, event-driven architecture, making it ideal for handling multiple simultaneous requests.

## Technologies
- **Frontend**: Angular
- **Backend**: Node.js
- **Database**: PostgreSQL

## Entity-Relationship Diagram (ERD)
![ERD](./path_to_image.png)

### 1. **Users**
- **Attributes**:
    - userID (Primary Key)
    - userName
    - userEmail
    - userPassword

### 2. **Products**
- **Attributes**:
    - productID (Primary Key)
    - productName
    - productDescription
    - productImageURL

### 3. **Prices**
- **Attributes**:
    - priceID (Primary Key)
    - productID (Foreign Key)
    - priceDescription
    - priceValue

### 4. **Basket**
- **Attributes**:
    - basketID (Primary Key)
    - userID (Foreign Key)
    - createdDate

### 5. **BasketItems**
- **Attributes**:
    - basketItemID (Primary Key)
    - basketID (Foreign Key)
    - productID (Foreign Key)
    - priceID (Foreign Key)
    - quantity

### Relationships
- **Users** have many **Baskets**, and **Baskets** belong to **Users**.
- **Products** have many **Prices**, and **Prices** belong to **Products**.
- **Baskets** have many **BasketItems**, and **BasketItems** belong to **Baskets**.
- **Products** have many **BasketItems**, and **BasketItems** belong to **Products**.

## Requirements
- Node.js
- PostgreSQL
- npm (or yarn)

## Installation
Install all necessary packages by running:
```bash
npm install
