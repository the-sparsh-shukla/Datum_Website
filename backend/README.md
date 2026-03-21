# Datum Website — Django Backend

REST API backend for the Datum data science club website, built with **Django** + **Django REST Framework**.

---

## 📁 Project Structure

```
datum_backend/
├── manage.py
├── requirements.txt
├── datum_backend/          # Project config
│   ├── settings.py
│   └── urls.py
└── apps/
    ├── accounts/           # Auth & users
    ├── events/             # Events management
    ├── gallery/            # Gallery images
    └── team/               # Team members & achievements
```

---

## ⚙️ Setup

### 1. Install dependencies
```bash
pip install -r requirements.txt
```

### 2. Run migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Seed initial data (optional)
Populates admin user, team members, events, gallery, and achievements:
```bash
python manage.py seed_data
```

### 4. Start the server
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/`

Django admin panel: `http://localhost:8000/admin/`

---

## 🔐 Authentication

All **read** endpoints are **public**. Write/delete endpoints require a **Bearer JWT token**.

### Login
```
POST /api/auth/login/
Body: { "email": "admin@datum.org", "password": "admin123" }

Response:
{
  "access": "<jwt_token>",
  "refresh": "<refresh_token>",
  "user": { "id", "email", "name", "role", "permissions" }
}
```

### Using the token
```
Authorization: Bearer <access_token>
```

### Refresh token
```
POST /api/auth/token/refresh/
Body: { "refresh": "<refresh_token>" }
```

### Logout
```
POST /api/auth/logout/
Body: { "refresh": "<refresh_token>" }
```

### Get current user
```
GET /api/auth/me/
```

---

## 📅 Events API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/events/` | Public | List all events |
| POST | `/api/events/` | Admin | Create event |
| GET | `/api/events/<id>/` | Public | Get event detail |
| PATCH | `/api/events/<id>/` | Admin | Update event |
| DELETE | `/api/events/<id>/` | Admin | Delete event |
| GET | `/api/events/categories/` | Public | List categories with counts |
| GET | `/api/events/stats/` | Admin | Dashboard stats |

**Query params for listing:**
- `?category=Workshop` — filter by category
- `?search=machine+learning` — search title/description
- `?ordering=-date` — sort by field

**Event categories:** `Workshop`, `Project`, `Networking`, `Competition`

---

## 🖼️ Gallery API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/gallery/` | Public | List all images |
| POST | `/api/gallery/` | Admin | Upload image |
| GET | `/api/gallery/<id>/` | Public | Get image detail |
| PATCH | `/api/gallery/<id>/` | Admin | Update image |
| DELETE | `/api/gallery/<id>/` | Admin | Delete image |
| GET | `/api/gallery/categories/` | Public | List categories with counts |
| GET | `/api/gallery/stats/` | Admin | Dashboard stats |

**Query params:**
- `?category=Events` — filter by category
- `?featured=true` — only featured images
- `?search=datathon` — search title/tags

Supports both **file upload** (`image` field) and **external URL** (`url` field).

---

## 👥 Team API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/team/members/` | Public | List active members |
| POST | `/api/team/members/` | Admin | Add member |
| GET | `/api/team/members/<id>/` | Public | Get member detail |
| PATCH | `/api/team/members/<id>/` | Admin | Update member |
| DELETE | `/api/team/members/<id>/` | Admin | Remove member |
| GET | `/api/team/achievements/` | Public | List achievements |
| POST | `/api/team/achievements/` | Admin | Add achievement |
| GET | `/api/team/achievements/<id>/` | Public | Get achievement |
| PATCH | `/api/team/achievements/<id>/` | Admin | Update achievement |
| DELETE | `/api/team/achievements/<id>/` | Admin | Delete achievement |

---

## 👤 User Management API (Superadmin only)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/users/` | List all admin users |
| POST | `/api/auth/users/` | Create admin user |
| GET | `/api/auth/users/<id>/` | Get user detail |
| PATCH | `/api/auth/users/<id>/` | Update user |
| DELETE | `/api/auth/users/<id>/` | Delete user |

---

## 🔑 Roles & Permissions

| Role | Permissions |
|------|-------------|
| `superadmin` | Full access: events, gallery, users, team |
| `admin` | Events, gallery, view users, team |
| `gallery_lead` | Events, gallery, view users |
| `event_manager` | Events only |
| `viewer` | No write access |

---

## 🔌 Connecting the React Frontend

In your frontend services, replace mock data calls with real API calls:

```typescript
// services/eventService.ts — example real API call
const BASE_URL = 'http://localhost:8000/api';

export const eventService = {
  getAllEvents: async (): Promise<Event[]> => {
    const res = await fetch(`${BASE_URL}/events/`);
    const data = await res.json();
    return data.results; // paginated response
  },

  createEvent: async (eventData: Omit<Event, 'id'>): Promise<Event> => {
    const token = localStorage.getItem('access_token');
    const res = await fetch(`${BASE_URL}/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });
    return res.json();
  },
};
```

---

## 🛠️ Development Notes

- **Database:** SQLite by default — switch to PostgreSQL for production
- **Media files:** Uploaded to `media/` directory
- **CORS:** Configured for `localhost:5173` (Vite) and `localhost:3000`
- **Django Admin:** Full CRUD via `http://localhost:8000/admin/`

### Switch to PostgreSQL
```python
# In settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'datum_db',
        'USER': 'postgres',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```
