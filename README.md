# YARIS — AI Smart Chat Bot


[![Node.js](https://img.shields.io/badge/Node-%3E%3D16-brightgreen)](https://nodejs.org/)
[![Built with Vite](https://img.shields.io/badge/Bundler-Vite-FFDB6D)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]

---

## Table of Contents

* [About](#about)
* [Demo & Screenshots](#demo--screenshots)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Folder Structure](#folder-structure)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Environment variables (.env.example)](#environment-variables-envexample)
* [Running Locally](#running-locally)
* [Troubleshooting / Common Errors](#troubleshooting--common-errors)
* [How to Contribute](#how-to-contribute)
* [Roadmap](#roadmap)
* [Credits](#credits)
* [License](#license)
* [Contact](#contact)

---

## About

YARIS — AI Smart Chat Bot is a modern, fully responsive and AI-powered web application designed to deliver fast, intelligent, and human-like conversational experiences.
The project combines the power of Google Gemini AI, a clean React-based frontend and a lightweight Node.js service layer, making it a perfect fit for:

Internship projects
Practical learning
Portfolio enhancement
AI experimentation
Real-world web development practice

YARIS AI aims to provide a flexible and extendable structure where new features, models and UI improvements can be added easily without breaking the core system.
With its modular design, clean architecture and developer-friendly workflow, it serves as a strong foundation for anyone entering the field of AI-driven web development.

---

## Demo & Screenshots

> Add GIF or screenshots of the app here. Example:

* `/screenshort/ofter-login.jpeg` — Chat UI Before logging in
* `/screenshort/ofter-login.jpeg` — After Login/SingUp

---

## Features

Conversational Chat UI — Real-time streaming responses for fast interaction.
(Badge Suggestion: Live Streaming / Chat UI)

Google Gemini Integration — Direct connection with Gemini for intelligent replies.
(Badge Suggestion: Gemini / AI Powered)

Configurable API Keys — Easily manage API keys using a simple .env file.
(Badge Suggestion: Secure / Configurable)

Multi-Service Architecture — Clean structure with separate frontend & service layers.
(Badge Suggestion: Modular / Service Based)

Lightweight & Extensible — Perfect for internships, demos and quick prototypes.
(Badge Suggestion: Lightweight / Developer Friendly)

---

## Tech Stack

  Tech Stack
Frontend

React — Component-based UI

Vite — Fast development & bundling
(Badge Suggestion: React, Vite)

Backend / Services

Node.js — JavaScript runtime

Fastify-style service stubs — Minimal service layer
(Badge Suggestion: Node.js, Fastify)

AI SDK

@google/gemini — Easily replaceable with other AI providers
(Badge Suggestion: Gemini SDK / AI Ready)

Bundler

Vite — Super-fast build tool
(Badge Suggestion: Ultra Fast)

---

## Folder Structure (high level)

```
YARIS-AI-Smart-Chat-Bot/
│
├── components/              # Core React UI components (chat box, input bar, layout, etc.)
│
├── Node-Module/             # Installed dependencies (auto-generated)
│
├── screenShort/             # UI Screenshots used in documentation or demo
│
├── services/                # Backend service layer (API handlers, Gemini utilities, configs)
│
├── package.json             # Project metadata + dependencies + scripts
│
├── vite.config.js           # Frontend bundler configuration (Vite)
│
├── LICENCE                  # Project license information
│
├── Other/                   # Misc assets or helper files
│
└── README.md                # Main documentation (project overview, setup, tech stack)
```

---

## Prerequisites

Before running the project, make sure you have the following installed:

Node.js v16+ (LTS version highly recommended)
npm — Comes bundled with Node.js
A valid AI Provider API Key, e.g.:
Google Gemini
OpenAI
DeepSeek
Anthropic Claude
Meta AI  (or any provider you want to integrate)

---

## Installation

Follow the steps below to set up the project locally.

1. Follow the steps below to set up the project locally.

```bash
# on your machine
unzip "YARIS AI smart chat bot.rar"  # or extract via Explorer
cd "YARIS AI smart chat bot"
```

2. Install Dependencies:

If the node_modules/ folder is missing or removed:

```bash
npm install
```

This will install all required packages for both frontend and services.


3. Configure Environment Variables

Copy the example environment file:

```bash
 cp .env.example .env
```
Then open .env and add your API keys:

4. Start services and frontend:

```bash
 GEMINI_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
DEEPSEEK_API_KEY=your_key_here
```
5.Start the Backend & Frontend
Start backend services:

```bash
 npm run start:service
```

Start frontend (Vite):

```bash
 npm run dev
```

(Adjust commands to match scripts in `package.json`.)

---


## Running Locally

1. Ensure `.env` contains correct API keys.
2. Start backend/services: `npm run start:service` (or `node services/index.js`).
3. Start frontend: `npm run dev`.
4. Open LocalHost`http://localhost3000:` (or URL shown by Vite).

---


## How to Contribute

We welcome contributions to make YARIS AI Smart Chat Bot even better! Here's a suggested workflow:

1  Fork this repository to your account.
2  Create a branch for your feature or fix:

```bash
 git checkout -b feature/your-feature
```
Implement your changes and add tests if necessary.

3  Commit your changes with clear and descriptive messages.
4  Push your branch to your fork:
5  Please keep commits small and descriptive.

```bash
git push origin feature/your-feature
```

6  Open a Pull Request with a concise description of your changes.

---

## Roadmap

Here’s what’s done and what’s coming next for YARIS AI Smart Chat Bot:

Core chat UI
AI integration
Authentication
Persistent conversation history (database)
Deployment guide

**Legend:**

Bright Green → Completed
Yellow → In progress
Grey → Planned / upcoming

---
## Technologies Used

Here are the main technologies powering **YARIS AI Smart Chat Bot**:

* ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**  
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript**  
* ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Vite** 
* ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white) **Google Cloud AI** 
* ![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white) **Google Gemini AI**  

---

## License & Credits

* This project is licensed under the [MIT License](./LICENSE).  
* Developed by **Muhammad Yasir**.  
* Inspired by AI chatbot tutorials and open-source projects.  
* Special thanks to contributors and the community for support.  

---

## Badges

Some status badges to show project progress and quality (optional):

* ![Status: Done](https://img.shields.io/badge/Status-Done-brightgreen) Completed features  
* ![Status: In Progress](https://img.shields.io/badge/Status-In%20Progress-yellow) Ongoing work  
* ![Status: Planned](https://img.shields.io/badge/Status-Planned-lightgrey) Upcoming features  
* ![License: MIT](https://img.shields.io/badge/License-MIT-blue) License  

---


## Stay Connected

If you liked this project, please consider:

 **Starring** the repository on [GitHub](https://github.com/YARIS-AI-Smart-Chat-Bot)  
 **Sharing feedback** on [Asani.pk](https://asani.pk/profile/yasirawan4831)  
 **Following on X (Twitter):** [@yasirawan4831](https://twitter.com/yasirawan4831/)  
 **Connecting on LinkedIn:** [Muhammad Yasir](https://www.linkedin.com/in/yasirawan4831/) 
 --- 

Built solely by Muhammad Yasir.

---