# 🎯 Complete Strapi Setup Guide

## ⚠️ Important: JSON Files Are Reference Only

The `.json` files in `schema-templates/` are **reference guides only**. You **cannot import them directly** into Strapi. You need to create content types manually in the admin panel.

---

## 📋 Step-by-Step: Create Content Types in Strapi Admin

### **Step 1: Access Admin Panel**

1. Go to: **https://certain-wisdom-9b2646a7c1.strapiapp.com/admin**
2. Log in with your admin credentials
3. You should see the Strapi dashboard

---

### **Step 2: Create "Experience" Content Type**

**2.1. Open Content-Type Builder**

- Click **"Content-Type Builder"** in the left sidebar (under Plugins)

**2.2. Create New Collection Type**

- Click **"+ Create new collection type"** button
- **Display name**: `Experience`
- Click **"Continue"**

**2.3. Add Fields** (Click "Add another field" for each):

| Field Type  | Name           | Settings                |
| ----------- | -------------- | ----------------------- |
| **Text**    | `company`      | ✅ Required, Short text |
| **Text**    | `role`         | ✅ Required, Short text |
| **Text**    | `description`  | ✅ Required, Long text  |
| **Date**    | `startDate`    | ✅ Required, Date only  |
| **Date**    | `endDate`      | ❌ Optional, Date only  |
| **Boolean** | `current`      | Default: `false`        |
| **Text**    | `website`      | ❌ Optional, Short text |
| **JSON**    | `technologies` | ✅ Required             |
| **Text**    | `location`     | ❌ Optional, Short text |

**2.4. Save**

- Click **"Finish"** button
- Click **"Save"** button (top right)
- Wait for Strapi to restart (30-60 seconds)

---

### **Step 3: Create "Project" Content Type**

**3.1. Create New Collection Type**

- Click **"+ Create new collection type"**
- **Display name**: `Project`
- Click **"Continue"**

**3.2. Add Fields**:

| Field Type  | Name           | Settings                               |
| ----------- | -------------- | -------------------------------------- |
| **Text**    | `title`        | ✅ Required, Short text                |
| **Text**    | `description`  | ✅ Required, Long text                 |
| **Media**   | `image`        | ❌ Optional, Single media, Images only |
| **Text**    | `url`          | ✅ Required, Short text                |
| **Boolean** | `featured`     | Default: `false`                       |
| **JSON**    | `technologies` | ✅ Required                            |
| **Text**    | `category`     | ❌ Optional, Short text                |

**3.3. Save**

- Click **"Finish"**
- Click **"Save"**
- Wait for restart

---

### **Step 4: Create "Contact Message" Content Type**

**4.1. Create New Collection Type**

- Click **"+ Create new collection type"**
- **Display name**: `Contact Message`
- Click **"Continue"**

**4.2. Add Fields**:

| Field Type | Name      | Settings                |
| ---------- | --------- | ----------------------- |
| **Text**   | `name`    | ✅ Required, Short text |
| **Email**  | `email`   | ✅ Required             |
| **Text**   | `subject` | ✅ Required, Short text |
| **Text**   | `message` | ✅ Required, Long text  |

**4.3. Save**

- Click **"Finish"**
- Click **"Save"**
- Wait for restart

---

### **Step 5: Configure Permissions** ⚠️ CRITICAL!

**5.1. Go to Settings**

- Click **"Settings"** in left sidebar
- Click **"Roles"** under Users & Permissions Plugin
- Click **"Public"** role

**5.2. Enable Permissions**

Scroll down and find each content type:

**Experience:**

- ✅ Check **"find"** (allows listing all experiences)
- ✅ Check **"findOne"** (allows getting single experience)

**Project:**

- ✅ Check **"find"**
- ✅ Check **"findOne"**

**Contact-Message:**

- ✅ Check **"create"** (allows form submissions)

**5.3. Save**

- Click **"Save"** button at top right

---

### **Step 6: Add Sample Content**

**6.1. Go to Content Manager**

- Click **"Content Manager"** in left sidebar
- You should see your 3 content types

**6.2. Add Experience Entry**

Click **"Experience"** → **"+ Create new entry"**

**Entry 1: CIO Africa**

```
Company: CIO Africa by dx5
Role: Fullstack Engineer
Description: Leading development of enterprise-level content management systems and digital platforms. Working with Next.js, React, Node.js, and cloud infrastructure.
Start Date: 2024-06-01
End Date: (leave empty)
Current: ✅ Yes
Website: https://cioafrica.co/
Technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
Location: Remote
```

- Click **"Save"** then **"Publish"**

**Entry 2: Powered by People**

```
Company: Powered by People
Role: Senior Frontend Engineer
Description: Built and maintained responsive e-commerce platforms and B2B marketplaces. Implemented modern UI/UX patterns and optimized performance.
Start Date: 2023-04-01
End Date: 2024-04-01
Current: ❌ No
Website: https://poweredbypeople.com/
Technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
Location: Remote
```

- Click **"Save"** then **"Publish"**

**Entry 3: MjengoSmart**

```
Company: MjengoSmart
Role: Frontend Engineer
Description: Developed construction management web applications with focus on mobile responsiveness and user experience. Collaborated with cross-functional teams.
Start Date: 2020-04-01
End Date: 2021-03-01
Current: ❌ No
Website: https://www.mjengosmart.com/
Technologies: ["React", "JavaScript", "Material-UI", "REST APIs"]
Location: Nairobi, Kenya
```

- Click **"Save"** then **"Publish"**

**6.3. Add Project Entries**

Click **"Project"** → **"+ Create new entry"** for each:

**Project 1: CIO Africa Platform**

```
Title: CIO Africa Platform
Description: Enterprise content management and publishing platform for Africa's leading technology publication. Features include real-time content editing, multi-region support, and advanced analytics.
URL: https://cioafrica.co/
Featured: ✅ Yes
Technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"]
Category: Web Platform
```

- **Save** and **Publish**

**Project 2: Powered by People**

```
Title: Powered by People
Description: B2B e-commerce platform connecting sustainable brands with retailers. Includes inventory management, order processing, and supplier onboarding systems.
URL: https://poweredbypeople.com/
Featured: ✅ Yes
Technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Shopify API"]
Category: E-commerce
```

- **Save** and **Publish**

**Project 3: Virtual Assets Chamber**

```
Title: Virtual Assets Chamber
Description: Professional website for Africa's leading virtual assets advocacy organization. Features event management, membership portals, and resource libraries.
URL: https://www.virtualassetchamber.com/
Featured: ✅ Yes
Technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"]
Category: Corporate Website
```

- **Save** and **Publish**

**Project 4: DHA Kenya**

```
Title: DHA Kenya
Description: Government digital platform for healthcare administration. Includes patient registration, appointment scheduling, and healthcare provider management.
URL: https://dha.go.ke/
Featured: ✅ Yes
Technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
Category: Government Portal
```

- **Save** and **Publish**

**Project 5: MjengoSmart**

```
Title: MjengoSmart
Description: Construction management platform streamlining project workflows, resource allocation, and team collaboration for construction projects.
URL: https://www.mjengosmart.com/
Featured: ❌ No
Technologies: ["React", "Material-UI", "REST APIs"]
Category: Project Management
```

- **Save** and **Publish**

---

## ✅ Verify It's Working

### **Test API Endpoints**

Open these URLs in your browser:

1. **Experiences**: https://certain-wisdom-9b2646a7c1.strapiapp.com/api/experiences

   - Should return JSON with your 3 experiences

2. **Projects**: https://certain-wisdom-9b2646a7c1.strapiapp.com/api/projects
   - Should return JSON with your 5 projects

### **Expected Response Format**

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "company": "CIO Africa by dx5",
        "role": "Fullstack Engineer",
        ...
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 3
    }
  }
}
```

---

## 🐛 Troubleshooting

### **"I don't see Content-Type Builder"**

- Make sure you're logged in as admin
- Check you have admin permissions
- Try refreshing the page

### **"API returns empty array []"**

- ✅ Make sure content is **Published** (not just saved as draft)
- ✅ Check Public permissions are enabled (Step 5)
- ✅ Verify you clicked "Publish" for each entry

### **"API returns 403 Forbidden"**

- ✅ Go to Settings → Roles → Public
- ✅ Enable `find` and `findOne` permissions
- ✅ Click Save
- ✅ Wait a few seconds for changes to apply

### **"API returns 404 Not Found"**

- ✅ Check the content type name matches exactly
- ✅ Make sure Strapi finished restarting after creating content types
- ✅ Try accessing: `/api/experiences` (plural, lowercase)

### **"Technologies field shows error"**

- For JSON fields, enter as: `["React", "Next.js", "TypeScript"]`
- Use square brackets `[]`
- Use double quotes `""` for strings
- Separate with commas

### **"Can't find Media field type"**

- When adding image field, select **"Media"** type
- Choose **"Single media"**
- Select **"Images"** in allowed types

---

## 📸 Visual Guide

### **Content-Type Builder Location**

```
Strapi Admin Panel
├── Content-Type Builder ← Click here first
│   └── + Create new collection type
```

### **Permissions Location**

```
Strapi Admin Panel
├── Settings
│   └── Roles
│       └── Public ← Configure here
│           └── Experience: find, findOne
│           └── Project: find, findOne
│           └── Contact-Message: create
```

### **Content Manager Location**

```
Strapi Admin Panel
├── Content Manager ← Add content here
│   ├── Experience
│   ├── Project
│   └── Contact-Message
```

---

## 💡 Pro Tips

1. **Always Publish**: Draft entries won't appear in API
2. **Check Permissions First**: Most issues are permission-related
3. **Use Plural Names**: API uses plural (e.g., `/api/experiences`)
4. **Test After Each Step**: Don't wait until the end
5. **JSON Format**: For technologies, use: `["Item1", "Item2"]`

---

## 🎯 Quick Checklist

- [ ] Created Experience content type
- [ ] Created Project content type
- [ ] Created Contact-Message content type
- [ ] Enabled Public permissions (find, findOne, create)
- [ ] Added 3 experience entries and published them
- [ ] Added 5 project entries and published them
- [ ] Tested API endpoints return data
- [ ] Verified JSON format is correct

---

## 🚀 Next Steps

Once content types are created and data is added:

1. **Test API**: Visit the URLs above
2. **Deploy Frontend**: Push to Vercel
3. **Add Environment Variable**: `NEXT_PUBLIC_STRAPI_URL=https://certain-wisdom-9b2646a7c1.strapiapp.com`
4. **Verify**: Your site should display Strapi content!

---

**Need help with a specific step?** Let me know which part you're stuck on!
