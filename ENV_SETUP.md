# 🔐 Strapi Environment Setup

## Generate Required Secrets

Before deploying Strapi, you need to generate secure secrets. Run these commands:

```bash
# Generate all secrets at once
node -e "console.log('APP_KEYS=' + Array.from({length:4}, () => require('crypto').randomBytes(16).toString('base64')).join(','))"
node -e "console.log('API_TOKEN_SALT=' + require('crypto').randomBytes(16).toString('base64'))"
node -e "console.log('ADMIN_JWT_SECRET=' + require('crypto').randomBytes(16).toString('base64'))"
node -e "console.log('TRANSFER_TOKEN_SALT=' + require('crypto').randomBytes(16).toString('base64'))"
node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(16).toString('base64'))"
```

Or use OpenSSL:

```bash
# APP_KEYS (generate 4 and join with commas)
openssl rand -base64 16
openssl rand -base64 16
openssl rand -base64 16
openssl rand -base64 16

# Other secrets
openssl rand -base64 16  # API_TOKEN_SALT
openssl rand -base64 16  # ADMIN_JWT_SECRET
openssl rand -base64 16  # TRANSFER_TOKEN_SALT
openssl rand -base64 16  # JWT_SECRET
```

## Environment Variables for Deployment

### Required Variables

```env
# Server Configuration
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Security Secrets (Generate new ones!)
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database (adjust based on your provider)
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your-secure-password
DATABASE_SSL=false
```

### Strapi Cloud Deployment

If deploying to Strapi Cloud, you only need:

- The secrets will be auto-generated
- Database is automatically configured
- Just upload your schema templates

### Railway/Heroku/Digital Ocean

1. Add PostgreSQL database addon
2. Set all environment variables above
3. Replace database credentials with your actual values

## Fix the "public folder" Error

The error you're seeing happens because Strapi needs these directories:

```
my-site-cms/
├── public/              ✅ Now created
│   └── uploads/         ✅ Now created
├── config/              ✅ Now created
│   ├── database.js
│   ├── server.js
│   ├── admin.js
│   └── middlewares.js
├── src/                 ✅ Now created
│   └── index.js
└── .tmp/                ✅ Now created
```

All directories have been created! Commit and push these changes:

```bash
git add .
git commit -m "Add Strapi directory structure and configuration"
git push
```

## Deployment Checklist

- [ ] Generate all required secrets
- [ ] Set environment variables in your deployment platform
- [ ] Configure database (PostgreSQL for production)
- [ ] Commit and push the new directory structure
- [ ] Redeploy your application
- [ ] Access admin panel at `https://your-domain/admin`
- [ ] Create admin user
- [ ] Add content types (use schema templates)
- [ ] Configure public permissions
- [ ] Test API endpoints

## Quick Start (Local Development)

1. **Create `.env` file** in `my-site-cms/`:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=generateKey1,generateKey2,generateKey3,generateKey4
API_TOKEN_SALT=generateSalt
ADMIN_JWT_SECRET=generateSecret
TRANSFER_TOKEN_SALT=generateSalt
JWT_SECRET=generateSecret
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
```

2. **Install and run**:

```bash
cd my-site-cms
npm install
npm run develop
```

3. **Access admin**: http://localhost:1337/admin

## Troubleshooting

### "public folder doesn't exist"

✅ **Fixed!** The folder structure has been created.

### "APP_KEYS is required"

Generate keys using the commands above and add to environment variables.

### "Database connection failed"

Check your database credentials and ensure the database is accessible.

### Build fails

Make sure Node.js version is 18 or 20 (not 22).

## Production Recommendations

1. **Use PostgreSQL** instead of SQLite
2. **Enable SSL** for database connections
3. **Use CDN** for media uploads (Cloudinary, AWS S3)
4. **Enable rate limiting** in production
5. **Regular backups** of your database
6. **Keep secrets secure** - never commit to git

---

**Need help?** Check the main [README.md](../my-site-cms/README.md) for detailed instructions.
