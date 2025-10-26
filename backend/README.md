# Shivani Gupta Portfolio Backend

This is the Python FastAPI backend for Shivani Gupta's portfolio website.

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the development server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /` - Root endpoint
- `GET /api/expertise` - Get expertise and skills data
- `GET /api/blog` - Get all blog posts (optional category filter)
- `GET /api/blog/{post_id}` - Get specific blog post
- `POST /api/contact` - Send contact message
- `GET /api/health` - Health check

## API Documentation

Once the server is running, visit `http://localhost:8000/docs` for interactive API documentation.
