# Portfolio CMS - Strapi Setup

This directory contains the Strapi CMS configuration for the portfolio site.

## Requirements

- Node.js 18.x or 20.x (Strapi v4 is not compatible with Node.js 22+)
- npm >= 6.0.0

## Installation

### Option 1: Use Production CMS

The portfolio is already configured to use the production Strapi CMS at:
**https://intuitive-idea-4fd32251fd.strapiapp.com**

Update the Next.js `.env.local` file:
```env
NEXT_PUBLIC_STRAPI_URL=https://intuitive-idea-4fd32251fd.strapiapp.com
```

### Option 2: Local Development

1. **Switch to Node.js 18 or 20:**
```bash
nvm use 20  # or nvm install 20
```

2. **Install Strapi:**
```bash
cd my-site-cms
npx create-strapi-app@latest . --quickstart
```

3. **Create Content Types:**

#### Experience Content Type

Create a new content type called `experience` with the following fields:

- `company` - Text (Short text)
- `role` - Text (Short text)
- `description` - Text (Long text)
- `startDate` - Date
- `endDate` - Date (optional)
- `current` - Boolean
- `website` - Text (Short text)
- `technologies` - JSON
- `location` - Text (Short text, optional)

#### Project Content Type

Create a new content type called `project` with the following fields:

- `title` - Text (Short text)
- `description` - Text (Long text)
- `image` - Media (Single file, optional)
- `url` - Text (Short text)
- `featured` - Boolean
- `technologies` - JSON
- `category` - Text (Short text, optional)

#### Contact Message Content Type

Create a new content type called `contact-message` with the following fields:

- `name` - Text (Short text)
- `email` - Email
- `subject` - Text (Short text)
- `message` - Text (Long text)

4. **Configure Permissions:**

Go to Settings > Roles > Public and enable:
- `find` and `findOne` for `experience` and `project`
- `create` for `contact-message`

5. **Add Sample Data:**

Use the Strapi admin panel to add your experience and project data.

6. **Start Development Server:**
```bash
npm run develop
```

The CMS will be available at `http://localhost:1337`

## API Endpoints

Once Strapi is running, the following endpoints will be available:

- GET `/api/experiences` - List all experiences
- GET `/api/projects` - List all projects  
- POST `/api/contact-messages` - Submit contact form

## Note

The Next.js site includes fallback data, so it will work even if Strapi is not available. This is useful for development and ensures the site is always functional.

