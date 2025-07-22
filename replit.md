# Kujali - AI-Powered Maternal Health Platform

## Overview

Kujali is a full-stack web application designed to provide AI-powered decision support for maternal and newborn care in low and middle-income countries. The platform serves as a comprehensive information hub with contact functionality, built using modern web technologies with a focus on accessibility and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server with TypeScript  
- **Database**: PostgreSQL with Drizzle ORM (configured but using memory storage currently)
- **Build System**: Vite for frontend bundling and development
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Node.js with ESM modules

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Styling**: Tailwind CSS with custom design system colors (Kujali brand colors)
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **Data Layer**: Abstract storage interface with memory implementation (ready for database integration)
- **Validation**: Zod schemas for request validation
- **Development**: Hot reload with Vite middleware in development mode

### Database Schema
The application defines two main entities:
- **Users**: Basic user structure with username and password
- **Contact Messages**: Form submissions from the contact page

### Key Pages and Features
- **Home**: Hero section with rotating messages, impact statistics, testimonials, and timeline
- **Who We Are**: Company mission and vision with typewriter effects
- **What We Do**: Service offerings and key features  
- **Our Team**: Team member profiles and advisors
- **Contact**: Contact form with server-side submission handling

## Data Flow

1. **Static Content**: Most content is static and rendered client-side
2. **Contact Form**: Form data flows from React components through TanStack Query to Express API endpoints
3. **Form Validation**: Client-side validation with React Hook Form, server-side validation with Zod schemas
4. **Error Handling**: Centralized error handling with toast notifications for user feedback
5. **API Responses**: JSON responses with consistent error/success patterns

## External Dependencies

### Core Technologies
- **React 18**: Frontend framework with modern hooks
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the stack
- **Vite**: Build tool and development server
- **Drizzle ORM**: Database ORM with PostgreSQL support

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library

### Database and Storage
- **PostgreSQL**: Production database (Neon serverless configured)
- **Drizzle Kit**: Database migration tool
- **Memory Storage**: Current fallback implementation

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- Express server with middleware integration
- TypeScript compilation with incremental builds
- Replit-specific development tools and error overlays

### Production Build
- Vite builds optimized frontend bundle to `dist/public`
- ESBuild bundles Express server to `dist/index.js`
- Static file serving from Express in production
- Environment-based configuration (NODE_ENV)

### Database Migration
- Drizzle Kit for schema management and migrations
- PostgreSQL connection via environment variable `DATABASE_URL`
- Schema definitions in shared directory for type consistency

The application is designed to be easily deployable on various platforms with minimal configuration changes, with the main requirement being a PostgreSQL database connection for production use.