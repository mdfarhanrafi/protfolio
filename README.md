# Protfolio

A portfolio application built with modern technologies. This repository contains both the **frontend** and **backend** codebases.

---

## Tech Stack

- **Frontend:** React, Next.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (or specify your database)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (vXX.X.X or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

---

## Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/mdfarhanrafi/protfolio.git
cd protfolio
```

### 2. Install dependencies

#### For the Frontend
Navigate to the `frontend` folder and install dependencies:
```bash
cd protolio
npm install
# OR
yarn install
```

#### For the Backend
Navigate to the `backend` folder and install dependencies:
```bash
cd protofolio_backend
npm install
# OR
yarn install
```

---

### 3. Configure Environment Variables

Create a `.env` file in both the `frontend` and `backend` directories. Add the required environment variables:

#### Backend `.env`
```env
PORT=5000
DB_URL=mongodb://localhost:27017/portfolio
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

#### Frontend `.env`
```env
NEXT_PUBLIC_API=http://localhost:5000
```

---

### 4. Start the Development Servers

#### Run the Backend
Navigate to the `backend` directory:
```bash
cd protfolio_backend
npm run server
#OR
npm run start
# OR
yarn dev
```

#### Run the Frontend
Navigate to the `frontend` directory:
```bash
cd protfolio
npm run dev
# OR
yarn dev
```

---

## Folder Structure

```plaintext
protfolio/
├── protfolio_backend/         # Backend code (Node.js, Express)
├── protfolio/        # Frontend code (React, Next.js)
└── README.md        # Project documentation
```

---

## Contributing

Contributions are always welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

Special thanks to everyone who contributed to this project!
