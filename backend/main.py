from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(title="Shivani Gupta Portfolio API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    type: str  # "tech" or "wellness"

class ExpertiseItem(BaseModel):
    title: str
    icon: str
    tags: List[str]

class BlogPost(BaseModel):
    id: int
    title: str
    excerpt: str
    content: str
    category: str  # "engineering" or "wellness"
    published_date: str
    read_time: int  # in minutes

# Sample data
expertise_data = [
    {
        "title": "Frontend Development",
        "icon": "⚙️",
        "tags": ["Angular 16", "React", "TypeScript", "Redux", "WCAG"]
    },
    {
        "title": "Backend & APIs",
        "icon": "🔧",
        "tags": ["Ruby on Rails", "Node.js", "Spring Boot", "GraphQL"]
    },
    {
        "title": "Yoga Practice",
        "icon": "🧘‍♀️",
        "tags": ["Asana", "Pranayama", "Meditation", "Mindfulness"]
    },
    {
        "title": "Ayurveda & Herbalism",
        "icon": "🌱",
        "tags": ["Dosha Balance", "Herbal Medicine", "Plant Wisdom", "Wellness Consulting"]
    },
    {
        "title": "Testing & Quality",
        "icon": "🧪",
        "tags": ["Cypress", "Jest", "Karma/Jasmine", "E2E Testing"]
    },
    {
        "title": "Astrology",
        "icon": "✨",
        "tags": ["Birth Charts", "Planetary Transits", "Cosmic Guidance", "Timing"]
    }
]

blog_posts = [
    {
        "id": 1,
        "title": "Building Accessible React Components",
        "excerpt": "Learn how to create React components that work for everyone, following WCAG guidelines.",
        "content": "Full blog post content here...",
        "category": "engineering",
        "published_date": "2024-01-15",
        "read_time": 8
    },
    {
        "id": 2,
        "title": "The Science of Ayurvedic Doshas",
        "excerpt": "Understanding the three doshas and how they influence our daily lives and wellness practices.",
        "content": "Full blog post content here...",
        "category": "wellness",
        "published_date": "2024-01-10",
        "read_time": 12
    }
]

# API Routes
@app.get("/")
async def root():
    return {"message": "Welcome to Shivani Gupta's Portfolio API"}

@app.get("/api/expertise", response_model=List[ExpertiseItem])
async def get_expertise():
    return expertise_data

@app.get("/api/blog", response_model=List[BlogPost])
async def get_blog_posts(category: Optional[str] = None):
    if category:
        return [post for post in blog_posts if post["category"] == category]
    return blog_posts

@app.get("/api/blog/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: int):
    post = next((post for post in blog_posts if post["id"] == post_id), None)
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

@app.post("/api/contact")
async def send_contact_message(message: ContactMessage):
    # In a real application, you would save this to a database
    # and send an email notification
    print(f"New contact message from {message.name} ({message.email})")
    print(f"Type: {message.type}")
    print(f"Subject: {message.subject}")
    print(f"Message: {message.message}")
    
    return {
        "message": "Thank you for your message! I'll get back to you soon.",
        "status": "success"
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
