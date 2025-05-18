## 🇬🇧 Project Description

Molva Frontend is a modern web application developed using cutting-edge technologies and best practices in web development. The project represents the client-side application built with React and TypeScript, providing a responsive and intuitive user interface.

### Technology Stack

- **Core**: React 19, TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Form Management**: React Hook Form with Zod validation
- **HTTP Client**: ky
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI
- **Routing**: React Router 7
- **Linting and Formatting**: ESLint, Prettier
- **Containerization**: Docker

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/tarkue/molva-frontend.git
cd molva-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Specify the API URL in the `.env` file

```env
VITE_API_URL="http://localhost:5000/api"
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

To build the project:

```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
