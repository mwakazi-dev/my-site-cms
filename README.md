# 🎯 Quick Start Guide

## Start Strapi (Choose One Method)

### Method 1: Use the Helper Script (Easiest)

```bash
cd my-site-cms
./start.sh
```

### Method 2: Direct Command

```bash
cd my-site-cms
source ~/.nvm/nvm.sh && nvm use 20 && npm run develop
```

### Method 3: Manual Steps

```bash
cd my-site-cms
nvm use 20
npm run develop
```

---

## 🌐 Access Points

- **Admin Panel**: http://localhost:1337/admin
- **API Base**: http://localhost:1337/api

---

## 🆕 First Time Setup

When you start Strapi for the first time:

1. Browser will open automatically to http://localhost:1337/admin
2. **Create admin account**:

   - First name: `Johnson`
   - Last name: `Mwakazi`
   - Email: Your email
   - Password: Create a secure password

3. **You'll see the Strapi Dashboard**

---

## 📝 Create Content Types

Follow these guides in order:

1. **STRAPI_SETUP_GUIDE.md** - Step-by-step content type creation
2. **LOCAL_SETUP.md** - Complete local development guide

### Quick Steps:

1. Click **"Content-Type Builder"** (left sidebar)
2. Create 3 collection types:
   - **Experience** (work history)
   - **Project** (portfolio items)
   - **Contact Message** (form submissions)
3. Follow the field definitions in `STRAPI_SETUP_GUIDE.md`

---

## ⚠️ Important: Node.js Version

**Always use Node.js 20** with Strapi:

```bash
# Check current version
node --version

# If not v20.x.x, switch:
nvm use 20
```

The `.nvmrc` file will help auto-switch when you `cd` into this directory.

---

## 🐛 Troubleshooting

### "Module version mismatch" Error

```bash
cd my-site-cms
nvm use 20
npm rebuild better-sqlite3
npm run develop
```

### "Port 1337 already in use"

```bash
# Kill existing Strapi process
pkill -f "strapi develop"

# Or use a different port
PORT=1338 npm run develop
```

### "Can't create content types"

- Make sure you're running in **development mode** (not production)
- Check you're using `npm run develop` (not `npm start`)

---

## 📚 Documentation

- `STRAPI_SETUP_GUIDE.md` - Content type creation guide
- `LOCAL_SETUP.md` - Complete setup documentation
- `ENV_SETUP.md` - Environment configuration
- `schema-templates/` - Reference schemas for content types

---

## 🔄 Connect Frontend to Local Strapi

In `my-site/.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Then restart your Next.js dev server:

```bash
cd my-site
npm run dev
```

---

## ✅ Verify Everything Works

1. **Admin Panel**: http://localhost:1337/admin ✓
2. **API**: http://localhost:1337/api/experiences
3. **Frontend**: http://localhost:3000

---

**Need help?** Check `TROUBLESHOOTING.md` or the other guide files!
