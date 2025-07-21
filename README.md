# Collaborative Data Explorer for Remote Teams

A multi-user dashboard application that allows remote teams to upload, explore, and analyze datasets together in real-time. This project features shared data visualizations, collaborative annotations, and AI-powered insights.

**Live Demo:** [Link to your deployed Render app]

---

## ✨ Key Features

*   **CSV Upload:** Users can upload CSV files to initiate a data exploration session.
*   **Data Visualization:** Interactive tables and charts are generated automatically from the data.
*   **(Upcoming) Real-time Collaboration:** Multiple users can view and interact with the same data simultaneously.
*   **(Upcoming) AI-Powered Insights:** An integrated AI model provides automated data summaries and insights.
*   **(Upcoming) User Accounts:** Secure user authentication and data management.

---

## 🚀 Tech Stack

This project is built with a modern, free-tier-friendly tech stack.

*   **Frontend:**
    *   **Framework:** [React](https://react.dev/) (with TypeScript)
    *   **Charting:** [Recharts](https://recharts.org/)
    *   **Deployment:** [Render](https://render.com/) (Static Site)
*   **Backend:**
    *   **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
    *   **Data Processing:** [Pandas](https://pandas.pydata.org/)
    *   **Real-time:** FastAPI WebSockets
    *   **Deployment:** [Render](https://render.com/) (Web Service)
*   **Database:**
    *   [MongoDB Atlas](https://www.mongodb.com/atlas) (Free M0 Cluster)
*   **AI/ML:**
    *   [Hugging Face Inference API](https://huggingface.co/inference-api)

---

## 🔧 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Python 3.9+
*   Node.js v16+
*   Git

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/collaborative-data-explorer.git
    cd collaborative-data-explorer
    ```

2.  **Set up the Backend:**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows, use: .\venv\Scripts\activate
    pip install -r requirements.txt
    ```

3.  **Set up the Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:** (From the `backend` directory)
    ```bash
    uvicorn main:app --reload
    ```
    The API will be running at `http://localhost:8000`.

2.  **Start the Frontend Development Server:** (From the `frontend` directory, in a new terminal)
    ```bash
    npm start
    ```
    The application will be accessible at `http://localhost:3000`.

---

## 🏗️ Project Structure

This project uses a monorepo structure to keep the frontend and backend code in a single repository.

```
collaborative-data-explorer/
├── .git/
├── backend/          # FastAPI application
│   ├── venv/
│   ├── main.py
│   └── requirements.txt
├── frontend/         # React application
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   └── package.json
├── .gitignore
└── README.md
```
