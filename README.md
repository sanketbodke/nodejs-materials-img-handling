# NodeJs Materials Img Handling

## Features

- Create a New Material: Add a new material to the database with details including name, technology, colors, price per gram, and an image uploaded to Cloudinary.
- Get All Materials: Retrieve a list of all materials stored in the database.
- Get Specific Material by ID: Fetch details of a specific material using its unique identifier.
- Update a Material: Modify the details of an existing material, including updating its image on Cloudinary.
- Delete a Material: Remove a material from the database.
- Image Upload Using Cloudinary: Handle image uploads and storage via the Cloudinary service for efficient image management.

## Live Demo

The application is deployed on Render and can be accessed [here](https://nodejs-materials-img-handling.onrender.com).

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation

1. Clone the repository:
   ```bash
   https://github.com/sanketbodke/nodejs-materials-img-handling.git

2. Install dependencies:

   ```bash
   npm install

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
The server will start on http://localhost:3001

### API Endpoints
**Base URL**

   ```bash
   http://localhost:3001/api/v1/materials
   ```

**Endpoints**
Get All Materials
* URL: /
* Method: GET
* Description: Retrieves all materials.
* Response

   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "All materials fetched successfully"
   }
   ```

Get Material By ID
* URL: /:id
* Method: GET
* Description: Retrieves materials by ID.
* Response

   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "Material fetched successfully"
   }
   ```

Create Materials
* URL: /
* Method: POST
* Description: Creates a new material.
* Body:
   ![post data](https://i.postimg.cc/j5m2kJPb/Screenshot_2024-06-24_at_7.13.51_PM.png)
* Response:
   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "Material created successfully"
   }
   ```
Update Materials
* URL: /:id
* Method: PUT
* Description: Updates a materials by ID.
* Body
   ```bash
    {
      "name": "silicon",
    }
   ```
* Response:
   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "Material updated successfully"
   }
   ```
Delete Materials
* URL: /:id
* Method: DELETE
* Description: Deletes a materials by ID.
* Response:
   ```bash
   {
    "status": 204,
    "message": "Material deleted successfully"
   }
   ```

### Project Structure
    nodeJs-materials-img-handling/
        ├── controllers/
        │   └── material.controller.js
        ├── db/
        │   └── index.js
        ├── middlewares/
        │   └── multer.middleware.js
        ├── models/
        │   └── material.model.js
        ├── routes/
        │   └── material.routes.js
        ├── utils/
        │   ├── ApiError.js
        │   ├── ApiResponse.js
        │   ├── asyncHandler.js
        │   └── cloudinary.js
        ├── .env
        ├── app.js
        ├── constants.js
        ├── index.js
        ├── package.json
        ├── package-lock.json
        └── README.md
