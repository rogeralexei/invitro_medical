
# Invitro Medical - Doctor Appointment Booking Platform

A modern, responsive, and accessible doctor appointment booking platform built with Next.js, Shadcn UI, and Zustand. This application provides a seamless experience for patients to find doctors, book appointments, and manage their healthcare journey.

## ✨ Features

- **User Authentication**
  - Secure login system with persistent sessions
  - User profile management
  - Session persistence using local storage
  
- **Doctor Directory**
  - Browse and filter doctors by specialty and availability
  - Search functionality by name or specialty
  - Detailed doctor profiles with ratings, specialties, and availability
  - Responsive card layout optimized for all devices
  
- **Appointment Booking**
  - Interactive calendar for date selection
  - Time slot selection with visual feedback
  - Confirmation flow with appointment details
  - Real-time availability updates
  
- **Appointment Management**
  - View upcoming appointments
  - Appointment details including doctor info, date, and time
  - Organized view with tabs for upcoming and past appointments
  
- **Responsive Design**
  - Optimized for all devices from mobile to desktop
  - Fluid layouts that adapt to screen size
  - Touch-friendly interface for mobile users
  
- **Accessible Interface**
  - ARIA-compliant and keyboard navigable
  - Screen reader friendly with proper semantic HTML
  - Focus management for interactive elements
  
- **Collapsible Sidebar**
  - Space-efficient navigation that can be toggled between full and icon-only views
  - Responsive behavior adapting to screen size
  - Tooltips for icon-only mode

## 🛠️ Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) - Accessible component library
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant form validation
- **Date Handling**: [date-fns](https://date-fns.org/) - Modern JavaScript date utility library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Animations**: CSS transitions and Tailwind animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) package manager

## 🚀 Installation

Follow these steps to get the project running on your local machine:

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/invitro-medical.git
cd invitro-medical
```

2. **Install dependencies**


```shellscript
yarn install
```

3. **Run the development server**


```shellscript
yarn dev
```

4. **Open your browser**


Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🏗️ Project Structure

```plaintext
invitro-medical/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Dashboard pages
│   │   ├── appointments/   # Appointments page
│   │   ├── profile/        # User profile page
│   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   └── page.tsx        # Dashboard home page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Login page
├── components/             # React components
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx      # Button component
│   │   ├── card.tsx        # Card component
│   │   ├── dialog.tsx      # Dialog component
│   │   └── ...             # Other UI components
│   ├── booking-modal.tsx   # Appointment booking modal
│   ├── doctor-directory.tsx # Doctor listing component
│   ├── login-form.tsx      # Authentication form
│   └── sidebar.tsx         # Navigation sidebar
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Hook for responsive design
│   └── ...                 # Other custom hooks
├── lib/                    # Utility functions
│   └── utils.ts            # Helper functions
├── store/                  # Zustand state stores
│   ├── auth-store.ts       # Authentication state
│   ├── appointment-store.ts # Appointments state
│   └── doctor-store.ts     # Doctors data state
├── types/                  # TypeScript type definitions
│   └── index.ts            # Type definitions
├── public/                 # Static assets
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 📱 Features Explained

### Authentication

The application uses a mock authentication system with Zustand for state management. In a production environment, this would be connected to a real authentication service.

- **Demo Credentials**:

- Email: [demo@medibook.com](mailto:demo@medibook.com)
- Password: password





The authentication flow:

1. User enters credentials on the login screen
2. Credentials are validated (mock validation in this demo)
3. User information is stored in the auth store
4. User is redirected to the dashboard
5. Session persists across page refreshes using localStorage


### Doctor Directory

The doctor directory displays a list of healthcare professionals with filtering capabilities:

- **Filtering Options**:

- By specialty (Cardiology, Dermatology, etc.)
- By availability (Available/Unavailable)
- By search term (name or specialty)



- **Doctor Cards**:

- Professional photo
- Name and specialty
- Star rating and review count
- Location information
- Available appointment slots
- Specialty tags
- Book appointment button





The directory uses a responsive grid layout that adjusts based on screen size:

- 3 columns on large screens
- 2 columns on medium screens
- 1 column on mobile devices


### Appointment Booking

The booking process is streamlined and user-friendly:

1. Click "Book Appointment" on a doctor's card
2. A modal opens with the doctor's information
3. Select a date from the interactive calendar

1. Past dates are disabled
2. Dates too far in the future are disabled



4. Choose an available time slot from the grid
5. Click "Confirm Appointment" to book
6. Receive confirmation and view in appointments page


The booking modal is fully responsive and accessible, with keyboard navigation support and clear visual feedback.

### Appointment Management

The appointments page provides a comprehensive view of your scheduled appointments:

- **Tabs Interface**:

- Upcoming appointments
- Past appointments



- **Appointment Cards**:

- Doctor information with photo
- Date and time
- Location
- Status indicator (Confirmed, Cancelled, Completed)





If no appointments are booked, a friendly empty state is displayed with guidance on how to book an appointment.

### Responsive Sidebar

The application features a modern, collapsible sidebar:

- **Desktop View**:

- Expands to show full navigation with labels
- Collapses to show only icons to save space
- Toggle button at the bottom to switch between states
- Tooltips appear when hovering over icons in collapsed state



- **Mobile View**:

- Converts to a slide-out drawer accessible via a menu button
- Full-height navigation with touch-friendly targets
- Automatically closes after selection





The sidebar maintains consistent navigation across all device sizes while optimizing for the available screen space.

## ♿ Accessibility Features

Invitro Medical is built with accessibility in mind:

### Semantic HTML

- Proper heading hierarchy (h1, h2, h3, etc.)
- Semantic elements like `<main>`, `<nav>`, `<section>`
- Meaningful landmark regions


### Keyboard Navigation

- All interactive elements are keyboard accessible
- Logical tab order follows visual layout
- Focus indicators are clearly visible
- Keyboard shortcuts for common actions


### Screen Reader Support

- ARIA labels and descriptions for non-text content
- Role attributes for custom components
- Status announcements for dynamic content
- Alt text for all images


### Visual Design

- Sufficient color contrast (WCAG AA compliant)
- Text is resizable without breaking layout
- Interactive elements have adequate touch targets
- Visual feedback for all interactive states


### Focus Management

- Focus is trapped within modals when open
- Focus returns to trigger elements when modals close
- Skip links for keyboard users


## 🔄 State Management

The application uses Zustand for state management, with three main stores:

### Auth Store

```typescript
interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}
```

Handles user authentication state, login, and logout functionality.

### Doctor Store

```typescript
interface DoctorState {
  doctors: Doctor[];
  // In a real app, this would include filtering and fetching functions
}
```

Manages the list of doctors and their data.

### Appointment Store

```typescript
interface AppointmentState {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  cancelAppointment: (id: string) => void;
}
```

Tracks booked appointments and provides functions to add or cancel appointments.

## 🧪 Testing

Run the test suite with:

```shellscript
yarn test
```

The application uses Jest for unit tests and React Testing Library for component tests. To run specific test files:

```shellscript
yarn test components/login-form
```

For coverage reports:

```shellscript
yarn test:coverage
```

## 🚀 Deployment

### Vercel Deployment

The easiest way to deploy the application is with Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy with the optimal settings


```shellscript
# Install Vercel CLI
yarn global add vercel

# Deploy
vercel
```

### Docker Deployment

For containerized deployment:

1. Build the Docker image:


```shellscript
docker build -t invitro-medical .
```

2. Run the container:


```shellscript
docker run -p 3000:3000 invitro-medical
```

## 🔧 Troubleshooting

### Common Issues

**Issue**: Dependencies not installing correctly
**Solution**: Clear yarn cache and reinstall

```shellscript
yarn cache clean
yarn install
```

**Issue**: Page not updating after state changes
**Solution**: Ensure you're using the correct Zustand store and check for React strict mode double-rendering

**Issue**: Sidebar not displaying correctly on certain browsers
**Solution**: Check for CSS compatibility issues and ensure all required polyfills are loaded

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


Please ensure your code follows the project's style guidelines and includes appropriate tests.

## 🔮 Future Improvements

- **Backend Integration**

- Connect to a real API for doctor data
- Implement actual authentication with JWT
- Store appointments in a database



- **Enhanced Features**

- Real-time notifications for appointment reminders
- In-app messaging with healthcare providers
- Health records and document upload
- Prescription management
- Video consultation integration



- **User Experience**

- Dark mode support
- Multi-language support
- Customizable user preferences
- Guided onboarding tour for new users



- **Performance Optimizations**

- Implement data caching strategies
- Add service worker for offline support
- Optimize bundle size with code splitting



- **Additional Platforms**

- Native mobile apps using React Native
- Desktop application using Electron


## AI TOOLS

Github copilot was used to enhance the quality of the code written.
ChatGPT was used to debug the app
V0 was used for the initial layout creation.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Zustand](https://github.com/pmndrs/zustand) for the state management solution


---

Made with ❤️ by Roger Urrutia

```plaintext
To Invitro: I hope you guys like it!
```
