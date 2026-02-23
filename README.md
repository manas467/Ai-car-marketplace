# 🚗 Vehiql — AI-Powered Car Marketplace

A full-stack AI car marketplace where users can browse, search, and book test drives for vehicles. Admins can manage inventory using AI-powered image analysis to auto-fill car details.

🔗 **Live Demo:** [https://ai-car-marketplace-mx4l.vercel.app](https://ai-car-marketplace-mx4l.vercel.app)

---

## ✨ Features

- 🤖 **AI Image Search** — Upload a car image to search by make, body type, and color
- 🧠 **AI Car Detail Extraction** — Admin uploads a car photo and AI auto-fills all details
- 🚘 **Car Listings** — Browse cars with filters for make, body type, fuel type, transmission, and price range
- ❤️ **Wishlist** — Save and manage favorite cars
- 📅 **Test Drive Booking** — Book test drives with dealership working hours
- 🔐 **Authentication** — Secure login and signup via Clerk
- 🛡️ **Rate Limiting** — API protection with ArcJet
- 👨‍💼 **Admin Dashboard** — Manage car inventory, bookings, and dealership settings

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | JavaScript |
| Styling | Tailwind CSS, shadcn/ui |
| Database | PostgreSQL (via Prisma ORM) |
| Storage | Supabase Storage |
| Auth | Clerk |
| AI | Groq API (Llama 4 Scout - Vision) |
| Rate Limiting | ArcJet |
| Deployment | Vercel |

---

## 📸 Screenshots

> Homepage with featured cars and AI search

> Admin dashboard with AI image upload

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Accounts for: Clerk, Supabase, Groq, ArcJet

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/manas467/Ai-car-marketplace.git
cd Ai-car-marketplace
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=your_postgresql_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Groq AI
GROQ_API_KEY=your_groq_api_key

# ArcJet
ARCJET_KEY=your_arcjet_key
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
├── actions/          # Server actions (cars, bookings, auth)
├── app/              # Next.js App Router pages
│   ├── (admin)/      # Admin dashboard routes
│   ├── (auth)/       # Authentication routes
│   └── (main)/       # Public-facing routes
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configs
└── prisma/           # Database schema
```

---

## 🔑 Key Implementations

- **AI Vision Analysis** — Groq's Llama 4 Scout model analyzes car images and extracts make, model, year, color, price, mileage, and more
- **Server Actions** — All data mutations handled via Next.js server actions
- **Optimistic UI** — Instant wishlist updates with error recovery
- **Rate Limiting** — ArcJet protects AI endpoints from abuse
- **Image Storage** — Car images stored and served via Supabase Storage

---

## 👨‍💻 Author

**Manas Sharma**

- GitHub: [@manas467](https://github.com/manas467)
- LinkedIn: [linkedin.com/in/manas-sharma](https://www.linkedin.com/in/manas-sharma-324984199/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
