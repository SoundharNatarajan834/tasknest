<h1 align="center">Hi 👋, I'm Soundhar Natarajan</h1>
<h3 align="center">A passionate Backend Node.js/SQL developer</h3>

- 🔭 I’m currently working on **a team based productivity application**

-  TaskNest API
A secure and scalable **Task Management REST API** built with **Node.js**, designed for small team-based productivity apps.  
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
- MongoDB / PostgreSQL (depending on your use case)
- JWT for authentication
- Bcrypt for password hashing
- Express-rate-limit for API throttling
- Express-validator for validation

- ## 📦 Installation

-bash
**git clone https://github.com/SoundharNatarajan834/tasknest.git
cd tasknest
npm install**


Create a .env file and add:

PORT=3000
JWT_SECRET='Secret key'
DB_USER=taskusers
DB_PASSWORD=Omega@123
DB_SERVER=LAPTOP-FGMOF7ON
DB_INSTANCE=MSSQLSERVER01
DB_NAME=tasknest
SESSION_SECRET=myUltraSecretKey123!

📬 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/register	Register a new user	❌
POST	/login	Login and receive JWT	❌
GET	/tasks	Get all tasks of logged user	✅
POST	/tasks	Create a new task	✅
PUT	/tasks/:id	Update a task	✅
DELETE	/tasks/:id	Delete a task	✅
GET	/quote	Get a motivational quote	✅ (Rate-limited)



📮 Postman Collection
You can find the Postman collection here
(https://api.postman.com/collections/27246216-a3ded2ab-bedf-43aa-abfd-bc799c6ef7e7?access_key=PMAT-01K1MQXQNZ9Y99MCSSNZX98HER)

📄 Assumptions
Each user can only manage their own tasks.
Quotes endpoint is globally rate-limited per IP.
App is used by small teams but written to scale.


📈 Scaling to 100k Users
To scale this system:
Use a load balancer (e.g., NGINX)
Implement horizontal scaling with multiple Node.js instances
Switch to Redis for session/token caching
Use MongoDB Atlas or a scalable managed DB
Implement background task queues for long-running jobs

🛡️ Production Readiness
For production:
Enable HTTPS
Store secrets in a secure vault (e.g., AWS Secrets Manager)
Use Helmet, CORS, and input sanitizers
Apply logging and monitoring (Winston + Prometheus)
Enable request validation on all routes
Add rate-limiting and brute-force protection on auth routes

👨‍💻 Author
Soundhar Natarajam
📧 soundhar1996@gmail.com
