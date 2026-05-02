# Wisebrandy Backend

A Node.js/Express backend for the Wisebrandy login and registration application.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Update the `.env` file with your configuration:

```
PORT=5000
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

3. Start the server:

```bash
npm start     # Production
npm run dev   # Development (with auto-reload)
```

The server will run on `http://localhost:5000`

## API Endpoints

### Register User

- **POST** `/api/auth/register`
- **Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

- **Response:**

```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login User

- **POST** `/api/auth/login`
- **Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

- **Response:**

```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Health Check

- **GET** `/api/health`

## Next Steps

1. Connect to MongoDB or another database
2. Add JWT middleware for protected routes
3. Add input validation and sanitization
4. Deploy to a hosting service (Heroku, AWS, etc.)
