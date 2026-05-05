# LankaProperty Backend

Backend API for the LankaProperty real estate web application using Node.js, Express, and MySQL.

## Prerequisites

- Node.js (v16+)
- MySQL Server running locally or remotely

## Setup

1. **Install dependencies:**
   ```bash
   cd Backend
   npm install
   ```

2. **Create MySQL Database:**
   
   ```sql
   CREATE DATABASE lankproperty;
   ```

3. **Configure environment variables:**
   
   Update `.env` file with your MySQL credentials:
   ```
   PORT=5000
   NODE_ENV=development
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=lankproperty
   DB_PORT=3306
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   The backend will start on `http://localhost:5000`

## Available Endpoints

### Properties

- `GET /api/properties` — Get all properties
- `GET /api/properties/:id` — Get property by ID
- `GET /api/properties/type/:type` — Get properties by type (house, apartment, villa, land, commercial)
- `POST /api/properties` — Create new property
- `PUT /api/properties/:id` — Update property
- `DELETE /api/properties/:id` — Delete property
- `GET /api/health` — Health check

## Project Structure

```
Backend/
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
├── .env               # Environment variables
├── config/
│   └── database.js    # Sequelize database configuration
├── models/
│   └── Property.js    # Property data model
└── routes/
    └── properties.js  # Property API routes
```

## Scripts

- `npm run dev` — Start development server with auto-reload
- `npm start` — Start production server

## Database Schema

**properties** table:
- `id` (INT, PK, Auto-increment)
- `title` (VARCHAR 255, required)
- `description` (TEXT, optional)
- `location` (VARCHAR 255, required)
- `price` (INT, required)
- `type` (ENUM: house, apartment, villa, land, commercial, required)
- `bedrooms` (INT, optional)
- `bathrooms` (INT, optional)
- `area` (INT, optional - square meters)
- `image_url` (VARCHAR 500, optional)
- `createdAt` (DATETIME)
- `updatedAt` (DATETIME)

## Technologies

- **Express.js** — Web framework
- **Sequelize** — ORM for MySQL
- **MySQL2** — MySQL client
- **CORS** — Cross-Origin Resource Sharing
- **Dotenv** — Environment variable management

## Sample API Request

```bash
# Get all properties
curl http://localhost:5000/api/properties

# Create new property
curl -X POST http://localhost:5000/api/properties \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Modern Family House",
    "location": "Colombo 05",
    "price": 45000000,
    "type": "house",
    "bedrooms": 4,
    "bathrooms": 3,
    "area": 2500
  }'
```
