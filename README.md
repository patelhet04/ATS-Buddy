
# ATS-Buddy: ATS-Friendly Resume Bullet Point Generator

ATS-Buddy is a web-based tool designed to help job seekers create **ATS-friendly** resume bullet points. Leveraging **Anthropic's Claude AI**, this application generates strong, action-oriented bullet points that are optimized for Applicant Tracking Systems (ATS). The tool allows users to input their role, years of experience, technical skills, domain, and past experiences to produce tailored, metric-driven bullet points that highlight their achievements and improve their chances of passing ATS filters.

## Features

- **Bullet Point Generation**: Automatically generate ATS-friendly resume bullet points using strong action verbs and quantifiable metrics.
- **Customization**: Tailor bullet points based on the user's role, years of experience, past achievements, and industry domain.
- **Real-Time Output**: Instantly view, edit, and download the generated bullet points for use in resumes.
- **Responsive UI**: A simple and intuitive user interface built with **React** for ease of use.
  
## Technologies Used

- **Frontend**: React.js (with TypeScript)
  - User interface for input collection and displaying generated bullet points.
  
- **Backend**: Node.js (Express)
  - Handles API requests and processes user input before interacting with the Claude AI API.
  
- **AI Integration**: Anthropic's Claude API
  - Generates the actual resume bullet points based on user input.

- **Cloud Deployment**: Future Integration
  
## Project Structure

```
ATS-Buddy/
│
├── public/                 # Public assets and index.html
├── src/                    # React components and frontend logic
│   ├── components/         # React components for the UI
│   ├── services/           # API calls and backend communication
│   ├── App.tsx             # Main application entry point
│   ├── index.tsx           # Main React entry point
│
├── server/                 # Backend logic
│   ├── api/                # API routes
│   ├── controllers/        # Functions to handle API requests
│   ├── server.js           # Main server entry point
│
├── .env                    # Environment variables (Claude API key, etc.)
├── package.json            # Project dependencies and scripts
├── README.md               # Project information
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ATS-Buddy.git
   cd ATS-Buddy
   ```

2. **Install dependencies** for both the frontend and backend:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the project root and add your API key for Claude:

   ```bash
   ANTHROPIC_API_KEY=your-api-key
   ```

4. **Run the development server**:

   Start both the frontend and backend servers.

   ```bash
   npm run dev
   ```

   This will start the development server for the React frontend and the Node.js backend.

### Usage

Once the development server is running, navigate to `http://localhost:3000` in your browser. You can now enter your role, experience, skills, and domain to generate ATS-optimized bullet points.
