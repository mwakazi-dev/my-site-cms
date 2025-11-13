# 📋 Complete Guide: Creating Content Types & Adding Data

## ⚠️ IMPORTANT: You Must Create Content Types First!

**Strapi does not support importing schema JSON files directly.** You need to manually create the content types through the admin panel.

## 🎯 Step-by-Step Process

### Step 1: Create Content Types Manually (Required)

You **must** do this in the Strapi admin panel first:

1. **Go to**: http://localhost:1337/admin
2. **Click**: "Content-Type Builder" (left sidebar)
3. **Create these 3 collection types**:

#### A. Experience Content Type

**Display name**: `Experience`

**Fields**:

```
company      → Text (Short text) ✅ Required
role         → Text (Short text) ✅ Required
description  → Text (Long text) ✅ Required
startDate    → Date (Date only) ✅ Required
endDate      → Date (Date only) ❌ Optional
current      → Boolean (default: false)
website      → Text (Short text) ❌ Optional
technologies → JSON ✅ Required
location     → Text (Short text) ❌ Optional
```

**Click "Finish" then "Save"** - wait for Strapi to restart

#### B. Project Content Type

**Display name**: `Project`

**Fields**:

```
title        → Text (Short text) ✅ Required
description  → Text (Long text) ✅ Required
image        → Media (Single media, Images) ❌ Optional
url          → Text (Short text) ✅ Required
featured     → Boolean (default: false)
technologies → JSON ✅ Required
category     → Text (Short text) ❌ Optional
```

**Click "Finish" then "Save"** - wait for Strapi to restart

#### C. Contact Message Content Type

**Display name**: `Contact Message`

**Fields**:

```
name    → Text (Short text) ✅ Required
email   → Email ✅ Required
subject → Text (Short text) ✅ Required
message → Text (Long text) ✅ Required
```

**Click "Finish" then "Save"** - wait for Strapi to restart

---

### Step 2: Configure Permissions (Required)

**Settings → Roles → Public**

Enable these permissions:

- **Experience**: ✅ `find`, ✅ `findOne`, ✅ `create`
- **Project**: ✅ `find`, ✅ `findOne`, ✅ `create`
- **Contact-Message**: ✅ `create`

**Click "Save"**

---

### Step 3: Add Default Content (Automated)

Now you can use the seeding script to add default content:

```bash
cd my-site-cms
node seed-data.js
```

This will create:

- ✅ 3 Experience entries (CIO Africa, Powered by People, MjengoSmart)
- ✅ 5 Project entries (all your projects)

---

### Step 4: Publish Entries

The seeding script creates entries as **drafts**. You need to publish them:

1. Go to **Content Manager**
2. Click **Experience** → select all entries → **Publish**
3. Click **Project** → select all entries → **Publish**

---

## 🚀 Alternative: Manual Entry Creation

If you prefer to add content manually:

### Add Experience Entry

1. Content Manager → Experience → Create new entry
2. Fill in the fields:

**Example: CIO Africa**

```
Company: CIO Africa by dx5
Role: Fullstack Engineer
Description: Leading development of enterprise-level content management systems...
Start Date: 2024-06-01
End Date: (leave empty)
Current: ✅ Yes
Website: https://cioafrica.co/
Technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
Location: Remote
```

3. Click **Save** then **Publish**

Repeat for all experiences and projects.

---

## ✅ Verification Checklist

After completing all steps:

- [ ] Content types created (Experience, Project, Contact-Message)
- [ ] Permissions configured (Public role has find, findOne, create)
- [ ] Default content added (via script or manually)
- [ ] All entries published (not in draft status)
- [ ] API endpoints return data:
  - http://localhost:1337/api/experiences
  - http://localhost:1337/api/projects

---

## 📝 JSON Format Reference

When entering `technologies` field, use this format:

```json
["React", "Next.js", "TypeScript", "Node.js"]
```

**Important**:

- Use square brackets `[]`
- Use double quotes `""`
- Separate with commas
- No trailing comma

---

## 🐛 Troubleshooting

### "Cannot POST to /api/experiences"

- Check permissions: Settings → Roles → Public → Enable `create`
- Make sure content type exists

### "Validation error"

- Check all required fields are filled
- Verify JSON format for technologies
- Ensure dates are in YYYY-MM-DD format

### Seeding script fails

- Make sure Strapi is running: http://localhost:1337
- Verify content types are created first
- Check permissions are enabled
- Look for error messages in script output

---

## 📚 Quick Reference

| Task                      | Command/Location                      |
| ------------------------- | ------------------------------------- |
| **Create Content Types**  | Admin → Content-Type Builder          |
| **Configure Permissions** | Admin → Settings → Roles → Public     |
| **Seed Default Data**     | `node seed-data.js`                   |
| **Add Content Manually**  | Admin → Content Manager               |
| **Publish Entries**       | Content Manager → Select → Publish    |
| **Verify API**            | http://localhost:1337/api/experiences |

---

## 🎯 Summary

1. ✅ **Manually create** content types in admin panel
2. ✅ **Enable permissions** for Public role
3. ✅ **Run seeding script** to add default content
4. ✅ **Publish entries** in Content Manager
5. ✅ **Verify** API endpoints return data

**You cannot skip Step 1!** Content types must be created manually through the admin interface.

---

Need detailed step-by-step instructions? See **STRAPI_SETUP_GUIDE.md**
