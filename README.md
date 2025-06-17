# 🍹 Cocktail Explorer  
_Discover your next favorite drink!_

![Cocktail Banner](https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg)

---

## 🧠 What is Cocktail Explorer?

**Cocktail Explorer** is a web app that allows users to search and explore cocktails using the [CocktailDB API](https://www.thecocktaildb.com/api.php). Built using Node.js and Express, this project fetches real-time data from a public API and presents it in a clean, dynamic web interface.

Whether you’re a mixology enthusiast or just someone looking for a fun weekend recipe, this app is for you! 🍸

---

## 🌐 Live Demo

🔗 [Visit Cocktail Explorer on Render](https://cocktail-explorer.onrender.com) <!-- Replace with your actual link after deployment -->

---

## 💻 Tech Stack

| Tech         | Role                          |
|--------------|-------------------------------|
| Node.js      | Backend server                |
| Express.js   | Routing and server framework  |
| Axios        | API calls to CocktailDB       |
| EJS          | Template rendering            |
| HTML/CSS     | UI design                     |
| JavaScript   | Interactivity (minimal)       |

---

## ✨ Features

- 🔍 **Search Cocktails** by name
- 🧪 **Filter** by Alcoholic / Non-Alcoholic
- 📋 **View Details** – Ingredients, Instructions, and Glass Type
- 📸 **Images** for every cocktail
- 💥 **Error Handling** for missing results
- 🎨 Clean and responsive layout using EJS + CSS

---

## 📁 Folder Structure

COCKTAIL/
├── public/ # Static files (CSS, images)
├── views/ # EJS templates
│ ├── index.ejs
│ └── result.ejs
├── index.js # Main server file
├── package.json
├── .gitignore
└── README.md


---

## 🛠️ Installation and Setup

> Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/TharunKrishna-spec/COCKTAIL.git
cd COCKTAIL
### 2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Server
bash
Copy
Edit
node index.js
4. Open in Browser
Visit: http://localhost:3000

## 🧪 Example Search URLs
Here are some example links powered by the CocktailDB API:

Search Margarita

Search by ID

Filter by Alcoholic

## 📷 Screenshots
You can add your own screenshots from the deployed site below:

Homepage	Search Result

##🚀 Deployment Guide (Render)
Want to deploy it yourself?

Create a free account at render.com

Click New Web Service

Connect your GitHub repo

Fill in:

Build Command: npm install

Start Command: node index.js

Environment: Node

Click Create Web Service and you're live!

##🧠 Learnings & Takeaways
Integrated REST APIs using Axios

Worked with Express and route handling

Dynamic rendering with EJS templates

Strengthened skills in debugging and error handling

## 📌 Future Improvements
✅ Search by ingredients

📱 Add mobile responsiveness

💬 Add a feedback or rating feature

🎯 Save favorite cocktails using local storage or DB

## 🙌 Acknowledgements
Special thanks to TheCocktailDB for their amazing open-source API.


##🧑‍💻 Author
👨‍💻 Tharun Krishna

📎 GitHub

💌 DM me if you liked the project or want to collaborate!
