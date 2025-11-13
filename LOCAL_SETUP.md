# 🛠️ Local Strapi Development Setup

## ✅ Setup Complete!

Your local Strapi is now configured and ready to run!

## 🚀 Start Local Strapi

### **Easy Way (Recommended)**

Use the helper script that automatically switches to Node.js 20:

```bash
cd my-site-cms
./start.sh
```

### **Manual Way**

**Important**: Make sure you're using Node.js 20:

```bash
# Switch to Node.js 20 (if not already)
nvm use 20

# Navigate to CMS directory
cd my-site-cms

# Start Strapi in development mode
npm run develop
```

**Note**: The `.nvmrc` file will auto-switch to Node.js 20 when you `cd` into the directory (if you have auto-switching enabled).

**First Time Setup**:

1. Strapi will start and open browser automatically
2. Create your admin account
3. You'll be able to create content types!

## 📍 Access Points

- **Admin Panel**: http://localhost:1337/admin
- **API Base**: http://localhost:1337/api

## 🔧 Configuration

The `.env` file has been created with:

- ✅ Generated secure secrets
- ✅ SQLite database (local development)
- ✅ Development mode enabled
- ✅ Port 1337

## 📝 Create Content Types

Once Strapi is running locally:

1. **Go to**: http://localhost:1337/admin
2. **Click**: "Content-Type Builder"
3. **Create**: Experience, Project, Contact-Message content types
4. **Follow**: [STRAPI_SETUP_GUIDE.md](./STRAPI_SETUP_GUIDE.md)

## 🔄 Switch Between Local and Production

### Use Local Strapi (Development)

```bash
# In my-site/.env.local
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Use Production Strapi (Deployment)

```bash
# In Vercel Environment Variables
NEXT_PUBLIC_STRAPI_URL=https://certain-wisdom-9b2646a7c1.strapiapp.com
```

## ⚠️ Important Notes

1. **Node.js Version**: Must use Node.js 18 or 20 (not 22!)

   ```bash
   nvm use 20  # Always run this before starting Strapi
   ```

2. **Development Mode**: Local Strapi runs in development mode, which allows:

   - ✅ Creating/editing content types
   - ✅ Full admin access
   - ✅ Hot reloading

3. **Production Mode**: Production Strapi (Cloud) is in production mode:
   - ❌ Cannot edit content types
   - ✅ Can manage content entries
   - ✅ Can configure permissions

## 🐛 Troubleshooting

### "Strapi command not found"

```bash
# Make sure you're in the right directory
cd my-site-cms

# Make sure Node.js 20 is active
nvm use 20

# Reinstall if needed
rm -rf node_modules package-lock.json
npm install
```

### "Port 1337 already in use"

```bash
# Find what's using the port
lsof -i :1337

# Kill the process or change port in .env
PORT=1338 npm run develop
```

### "Database error"

```bash
# Delete and recreate database
rm -rf .tmp
npm run develop
```

## 📚 Next Steps

1. ✅ Start Strapi: `npm run develop`
2. ✅ Create admin account
3. ✅ Create content types (Experience, Project, Contact-Message)
4. ✅ Add sample content
5. ✅ Configure permissions
6. ✅ Test API endpoints
7. ✅ Connect frontend to local Strapi

---

**Your local Strapi is ready!** 🎉

Run `npm run develop` in the `my-site-cms` directory to start it!
