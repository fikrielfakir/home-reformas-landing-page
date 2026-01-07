# Home Reformas - Construction & Renovation Website

## Overview

Home Reformas is a professional business website for a construction and home renovation company based in Spain. The site showcases their services (kitchen/bathroom renovations, construction, electrical work, painting, etc.), displays a portfolio of completed projects, features customer testimonials, and provides a contact form for requesting quotes. The application is a single-page marketing website with a dark theme and gold accent colors, designed to attract potential clients seeking renovation services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM for client-side navigation (currently only index and 404 pages)
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Typography**: Google Fonts (Bebas Neue for headings, Inter for body text)

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Server Setup**: Single Express server that serves both the API and static files
- **Development**: Vite dev server middleware integration for HMR during development
- **Production**: Static file serving from the `dist/public` directory

### API Structure
- **POST /api/contact**: Handles contact form submissions, sends emails via nodemailer to the business email address

### Design Patterns
- Component-based architecture with presentational components for each page section (Hero, Services, Projects, Testimonials, Contact, Footer)
- Path aliasing using `@/` prefix mapped to `src/` directory
- CSS variables for consistent theming with dark mode design
- Form handling with controlled components and toast notifications for user feedback

## External Dependencies

### Email Service
- **Nodemailer**: Used to send contact form submissions via Gmail SMTP
- **Required Secrets**: 
  - `GMAIL_USER` or `VITE_GMAIL_USER`: Gmail account for sending emails
  - `GMAIL_APP_PASSWORD` or `VITE_GMAIL_APP_PASSWORD`: Gmail app password for authentication
- **Recipient**: Emails are sent to `Homereformas24@gmail.com`

### Third-Party Integrations
- **Google Maps Embed**: Displays service area map in the ServiceArea component
- **Google Fonts**: Bebas Neue and Inter fonts loaded via CSS import

### Key NPM Dependencies
- `@radix-ui/*`: Headless UI primitives for accessible components
- `@tanstack/react-query`: Server state management
- `class-variance-authority`: Component variant styling
- `lucide-react`: Icon library
- `react-day-picker`: Calendar component
- `embla-carousel-react`: Carousel functionality
- `vaul`: Drawer component
- `sonner`: Toast notifications
- `next-themes`: Theme management (dark mode)