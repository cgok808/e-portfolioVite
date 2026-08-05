# E-Portfolio

A personal portfolio site built with React and Vite, showcasing projects and skills with a contact form powered by EmailJS.

## Tech Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- EmailJS (`@emailjs/browser`)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials:

```
VITE_SERVICE_ID="your_service_id"
VITE_TEMPLATE_ID="your_template_id"
VITE_PUBLIC_KEY="your_public_key"
```

Get these values from your [EmailJS](https://www.emailjs.com/) dashboard. Do not commit this file — it should stay listed in `.gitignore`.

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  assets/       Images and static assets
  components/   Reusable UI components (Nav, Hero, Projects, Modal, Footer)
  contexts/     React context providers
  pages/        Route-level page components
```

## Contact

The site includes a contact form (via the Modal component) that sends messages using EmailJS.
