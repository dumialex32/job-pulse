# Job Pulse

### Job Pulse is a job tracking platform that helps users manage and organize their job applications, track progress, and analyze trends over time.

## Prerequisites

Ensure you have the following installed:

- Node.js: Download and install Node.js
- PostgreSQL: Download and install PostgreSQL

### Getting started

1. **Clone the repository:**

```sh
git clone https://github.com/dumialex32/job-pulse.git
cd job-pulse
```

2. **Install dependencies:**

```sh
npm install
#or
yarn install
```

3. **Set up environment variables:**

- Create a **.env** file in the root directory and add the following:

```env
# Database connection
DATABASE_URL=postgresql://your_db_user:your_db_password@localhost:5432/your_db_name
```

- Create a **.env.local** file in the root of tidrectory and add the following:

```env
# Clerk authentication keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

_Replace placeholders with your actual database credentials and Clerk API keys._

4. **Database configuration:**

- Initialize Prisma: If not already initialized, run:

```bash
npx prisma init
```

- Run Migrations: Apply existing migrations to set up your database schema:

```bash
npx prisma migrate dev
```

- Seed the Database (Optional): Populate your database with initial data:

```bash
node prisma/seed.js
```

_Ensure the clerkId in **seed.js** matches a valid user ID from your Clerk setup._

5. **Run the app on your local host**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
