# 🏕️ WanderLust - Basic

A simple **Airbnb-inspired** listings web app built with Node.js, Express, MongoDB, and EJS. Users can view, create, edit, and delete property listings.

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Runtime     | Node.js                              |
| Framework   | Express.js v5                        |
| Database    | MongoDB (via Mongoose)               |
| Templating  | EJS + ejs-mate (layouts)             |
| Styling     | Custom CSS                           |
| Other       | method-override (PUT/DELETE support) |

---

## 📁 Project Structure

```
wanderLust-basic/
├── app.js                  # Main server entry point
├── models/
│   └── listing.js          # Mongoose schema for listings
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs # Base layout template
│   ├── includes/
│   │   ├── navbar.ejs      # Navbar partial
│   │   └── footer.ejs      # Footer partial
│   └── listings/
│       ├── index.ejs       # All listings
│       ├── show.ejs        # Single listing detail
│       ├── new.ejs         # Create new listing form
│       └── edit.ejs        # Edit listing form
├── public/
│   └── css/
│       └── style.css       # Custom styles
├── init/
│   ├── data.js             # Sample seed data
│   └── index.js            # Database seeder script
├── package.json
└── .gitignore
```

---

## ✅ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port `27017`)
- [Git](https://git-scm.com/)

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/SupritamR/wanderLust-basic.git
cd wanderLust-basic
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure your local MongoDB service is running:

```bash
# On Linux/macOS
mongod

# On Windows (if installed as a service, it may already be running)
# Or start it manually:
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe"
```

### 4. (Optional) Seed sample data

To populate the database with sample listings:

```bash
node init/index.js
```

### 5. Start the server

```bash
node app.js
```

The server will start on **http://localhost:8080**

---

## 🌐 Routes

| Method   | Route                  | Description                  |
|----------|------------------------|------------------------------|
| `GET`    | `/`                    | Root — health check          |
| `GET`    | `/listings`            | View all listings             |
| `GET`    | `/listings/new`        | Form to create a new listing |
| `POST`   | `/listings`            | Submit a new listing         |
| `GET`    | `/listings/:id`        | View a single listing        |
| `GET`    | `/listings/:id/edit`   | Form to edit a listing       |
| `PUT`    | `/listings/:id`        | Update a listing             |
| `DELETE` | `/listings/:id`        | Delete a listing             |

---

## 🗄️ Database

The app connects to a local MongoDB instance:

```
mongodb://127.0.0.1:27017/wanderlust
```

No extra configuration is needed if MongoDB is running locally.

---

## 📦 Dependencies

```json
{
  "ejs": "^7.0.2",
  "ejs-mate": "^4.0.0",
  "express": "^5.3.0",
  "method-override": "^3.0.0",
  "mongoose": "^9.11.4"
}
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
