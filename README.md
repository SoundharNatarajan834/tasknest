<h1 align="center"> TaskNest API</h1>
<h3 align="center">API for a small team-based productivity application</h3>

- 🔭 A secure and scalable **Task Management REST API** built with **Node.js**, designed for small team-based productivity apps.  
It includes user authentication, personal task CRUD operations, and a rate-limited motivational quotes feature using an external API.

## 🚀 Features

- 🔐 User registration and login (with JWT auth)
- 📝 CRUD operations for personal tasks
- 🔒 Each user can access only their own tasks
- 💡 Rate-limited endpoint for motivational quotes (via [Quotable API](https://api.quotable.io/random))
- 🛡️ Input validation and sanitization
- 🔄 Modular and scalable project structure

- ## 🛠️ Tech Stack

- Node.js
- Express.js
- Microsoft SQL Server
- JWT for authentication
- Bcrypt for password hashing
- Express-rate-limit for API throttling
- Express-validator for validation

- ## 📦 Installation

-bash
**git clone https://github.com/SoundharNatarajan834/tasknest.git
cd tasknest
npm install**
This project uses a `.env` file to store sensitive config variables.


## 📬 API Endpoints

| Method | Endpoint     | Description                | Auth Required     |
|--------|--------------|----------------------------|-------------------|
| POST   | /register    | Register a new user        | ❌                |
| POST   | /login       | Login and receive JWT      | ❌                |
| GET    | /tasks       | Get tasks for logged user  | ✅                |
| POST   | /tasks       | Create a new task          | ✅                |
| PUT    | /tasks/:id   | Update a task              | ✅                |
| DELETE | /tasks/:id   | Delete a task              | ✅                |
| GET    | /quote       | Get motivational quote     | ✅ (Rate-limited) |




📮 Postman Collection
You can find the Postman collection here :

(https://api.postman.com/collections/27246216-a3ded2ab-bedf-43aa-abfd-bc799c6ef7e7?access_key=PMAT-01K1MQXQNZ9Y99MCSSNZX98HER)

## 📄 Assumptions

- Each user can only manage their own tasks.  
- Quotes endpoint is globally rate-limited per IP.  
- App is used by small teams but written to scale.  

---

## 📈 Scaling to 100k Users

To scale this system:

- Use a load balancer (e.g., NGINX)  
- Implement horizontal scaling with multiple Node.js instances  
- Switch to Redis for session/token caching  
- Use MongoDB Atlas or a scalable managed DB  
- Implement background task queues for long-running jobs  

---

## 🛡️ Production Readiness

For production:

- Enable HTTPS  
- Store secrets in a secure vault (e.g., AWS Secrets Manager)  
- Use Helmet, CORS, and input sanitizers  
- Apply logging and monitoring (Winston + Prometheus)  
- Enable request validation on all routes  
- Add rate-limiting and brute-force protection on auth routes  

---

## 👨‍💻 Author

**Soundhar Natarajam**  
📧 soundhar1996@gmail.com  



