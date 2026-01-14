# ✅ BELMUN 2026 - COMPLETE REDESIGN DONE!

## 🎉 ALL YOUR REQUIREMENTS COMPLETED

### ✅ 1. NEW COLOR SCHEME
- Green: #424610
- Beige: #8f8779  
- Dark Brown: #363026
- Brown: #483322

### ✅ 2. ALL EMOJIS REMOVED
- Completely removed from all pages
- Clean professional design
- Image placeholders instead

### ✅ 3. UN HEADER IMAGES
- Added placeholder for UN photo on all page headers
- Easy to update: just upload `un-header.jpg` to main folder
- Shows as background on page headers

### ✅ 4. NEW COMMITTEES (9 TOTAL)
**Beginner:**
- WHO (World Health Organization)
- UNODC (UN Office on Drugs and Crime)
- UNICEF (UN Children's Fund)

**Intermediate:**
- FIFA (Football Association)
- IPC (International Press Corps)
- ICJ (International Court of Justice)

**Advanced:**
- USS (United States Senate)
- INTERPOL (Criminal Police Organization)
- FIA (Automobile Federation)

### ✅ 5. COMMITTEE PAGES - NEW LAYOUT
Each committee page has:
- **LEFT SIDE:**
  - Large committee image box (you'll add photos)
  - Background guide download box (you'll add PDFs)
  
- **RIGHT SIDE:**
  - Committee name and full name
  - Description
  - **Head Chair** section (photo + description)
  - **Co-Chair** section (photo + description)  
  - **Pager** section (centered, photo + description)

All with placeholders you can easily fill in!

### ✅ 6. COMMITTEES DROPDOWN MENU
- Main "Committees" link goes to main page
- Dropdown shows all 9 committees
- Click any committee to go to its detail page

### ✅ 7. DELEGATE RESOURCES PAGE
New dropdown menu with:
- Delegate Handbook
- Position Paper Guide
- Resolution Paper Guide
- Conference Schedule

All in file upload boxes with "Coming Soon" messages until you add files!

### ✅ 8. "COMING SOON" MESSAGES
All empty file boxes show friendly messages:
- "This resource will be available soon!"
- "Stay tuned!"
- "Follow @belmun26 for updates"

---

## 📁 WHAT YOU RECEIVED (18 FILES)

### Main Pages (6 files):
1. index.html
2. about.html
3. committees.html
4. register.html
5. contact.html
6. delegate-resources.html

### Committee Pages (9 files):
7. committee-who.html
8. committee-unodc.html
9. committee-unicef.html
10. committee-fifa.html
11. committee-ipc.html
12. committee-icj.html
13. committee-uss.html
14. committee-interpol.html
15. committee-fia.html

### Support Files (3 files):
16. styles.css (all new colors)
17. script.js (functionality)
18. SETUP_GUIDE.md (this file)
19. IMAGE_UPLOAD_SIMPLE.md (easy image guide)

---

## 🚀 NEXT STEPS

### 1. UPLOAD TO GITHUB (5 minutes)
```
1. Go to your repository
2. Click "Add file" → "Upload files"
3. Upload ALL 17 files (.html, .css, .js)
4. Click "Commit changes"
5. Wait 2-3 minutes
```

### 2. ADD IMAGES (15 minutes)
You need 14 images total:
- 1 logo (logo.png)
- 1 UN header (un-header.jpg)
- 3 UN slideshow backgrounds
- 9 committee images

See **IMAGE_UPLOAD_SIMPLE.md** for easy instructions!

### 3. ADD CONTENT (When Ready)
- Upload background guide PDFs to `guides/` folder
- Upload delegate resource PDFs to `resources/` folder
- Add staff photos and info to committee pages
- Add Google Forms links to script.js

---

## 🎨 WEBSITE STRUCTURE

### Navigation Bar (on every page):
```
Home | About | Committees ▼ | Delegate Resources ▼ | Register | Contact
                   ↓                    ↓
            [9 committees]      [4 resource types]
```

### Homepage:
- UN photo slideshow (3 rotating images)
- "Unity in Complexity" tagline
- "Explore Committees" button
- 3 info cards

### Committees Main Page:
- Organized by difficulty (Beginner/Intermediate/Advanced)
- 9 clickable committee cards
- Each links to detail page

### Committee Detail Pages:
- Left: Committee photo + background guide
- Right: Full info + staff (Head Chair, Co-Chair, Pager)
- All sections ready for your content!

### Delegate Resources:
- 4 resource boxes
- Click to download (when you add files)
- "Coming Soon" until files added

---

## 📸 HOW TO ADD IMAGES

### Easy 3-Step Process:

**Step 1: Create Folders**
```
Create: images/
Create: committee-images/
```

**Step 2: Upload Images**
```
Main folder:
- logo.png
- un-header.jpg

images/ folder:
- un-background-1.jpg
- un-background-2.jpg
- un-background-3.jpg

committee-images/ folder:
- who.jpg
- unodc.jpg
- unicef.jpg
- fifa.jpg
- ipc.jpg
- icj.jpg
- uss.jpg
- interpol.jpg
- fia.jpg
```

**Step 3: Refresh & Enjoy!**

---

## 📄 HOW TO ADD FILES

### Background Guides (Committee PDFs):

1. Create `guides/` folder
2. Upload PDFs with these names:
   - who-background-guide.pdf
   - unodc-background-guide.pdf
   - unicef-background-guide.pdf
   - fifa-background-guide.pdf
   - ipc-background-guide.pdf
   - icj-background-guide.pdf
   - uss-background-guide.pdf
   - interpol-background-guide.pdf
   - fia-background-guide.pdf

3. Edit each committee page to link to the file

### Delegate Resources (4 PDFs):

1. Create `resources/` folder
2. Upload PDFs:
   - delegate-handbook.pdf
   - position-paper-guide.pdf
   - resolution-guide.pdf
   - conference-schedule.pdf

3. Edit delegate-resources.html to enable downloads

---

## 👥 HOW TO ADD STAFF INFO

In each committee page, find the staff sections and replace:

```html
<!-- FROM THIS: -->
<div class="staff-name staff-placeholder">[Name to be added]</div>
<div class="staff-description staff-placeholder">
    <p>Add head chair name, photo, and description here</p>
</div>

<!-- TO THIS: -->
<div class="staff-name">Sarah Johnson</div>
<div class="staff-description">
    <p>Sarah has 4 years of MUN experience and specializes in healthcare policy...</p>
</div>
```

For photos, add to the photo placeholder:
```html
<div class="staff-photo-placeholder">
    <img src="staff-photos/sarah.jpg" 
         style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
</div>
```

---

## 🔗 HOW TO ADD GOOGLE FORMS

Open `script.js` and update this section:

```javascript
const registrationLinks = {
    'secretariat-link': 'YOUR-FORM-URL-HERE',
    'chair-link': 'YOUR-FORM-URL-HERE',
    'volunteer-link': 'YOUR-FORM-URL-HERE',
    'delegate-link': 'YOUR-FORM-URL-HERE'
};
```

---

## 🎯 KEY FEATURES

✨ **Fully Responsive** - Works on all devices
✨ **Modern Design** - Professional new color scheme
✨ **Easy to Update** - Clear placeholders for all content
✨ **Dropdown Menus** - Easy navigation to all pages
✨ **File Ready** - Upload PDFs and they work automatically
✨ **Coming Soon Messages** - Professional placeholders
✨ **No Emojis** - Clean professional look
✨ **UN Branding** - Header images on all pages

---

## ✅ FINAL CHECKLIST

- [ ] Upload all 17 HTML/CSS/JS files to GitHub
- [ ] Enable GitHub Pages in settings
- [ ] Upload logo.png
- [ ] Upload un-header.jpg
- [ ] Create and upload images to images/ folder (3 files)
- [ ] Create and upload committee images (9 files)
- [ ] Test website - all pages load correctly
- [ ] Add staff information to committee pages (when ready)
- [ ] Upload background guide PDFs (when ready)
- [ ] Upload delegate resource PDFs (when ready)
- [ ] Add Google Forms links to script.js (when ready)

---

## 📧 SUPPORT

Questions? Contact belmun26@gmail.com

---

## 🎉 YOU'RE ALL SET!

Your website is completely redesigned and ready to launch!
Just upload the files and add your images, and you're live! 🚀

Good luck with BELMUN 2026! 🌍
