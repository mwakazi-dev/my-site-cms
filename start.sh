#!/bin/bash

# Strapi Local Development Starter
# Ensures Node.js 20 is used before starting Strapi

echo "🚀 Starting Strapi Local Development Server..."
echo ""

# Check if nvm is available
if ! command -v nvm &> /dev/null; then
    echo "⚠️  nvm not found. Loading nvm..."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Switch to Node.js 20
echo "📦 Switching to Node.js 20..."
nvm use 20

# Verify Node version
NODE_VERSION=$(node --version)
echo "✅ Using Node.js $NODE_VERSION"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "   Please run this script from the my-site-cms directory"
    exit 1
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "   Creating .env file..."
    # You'll need to create this manually or copy from .env.example
fi

# Rebuild native modules if needed
echo "🔧 Checking native modules..."
npm rebuild better-sqlite3 --silent 2>/dev/null || true

# Start Strapi
echo "🎯 Starting Strapi..."
echo "   Admin panel: http://localhost:1337/admin"
echo "   API base: http://localhost:1337/api"
echo ""
npm run develop

