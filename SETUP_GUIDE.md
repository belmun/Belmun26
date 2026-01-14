# BELMUN 2026 - COMPLETE SETUP GUIDE

## 🎉 YOUR NEW WEBSITE IS READY!

All pages have been redesigned with:
✅ New color scheme (Green #424610, Beige #8f8779, Browns #363026, #483322)
✅ NO emojis anywhere - clean professional design
✅ Dropdown menus for Committees and Delegate Resources
✅ Individual committee pages with staff sections
✅ Delegate Resources page with file upload boxes
✅ "Coming Soon" messages for files not yet uploaded
✅ New committees: WHO, UNODC, UNICEF, FIFA, IPC, ICJ, USS, INTERPOL, FIA

---

## 📁 FILES YOU HAVE (17 FILES)

### Main Pages:
1. **index.html** - Homepage with slideshow
2. **about.html** - About page
3. **committees.html** - Main committees page
4. **register.html** - Registration page
5. **contact.html** - Contact page
6. **delegate-resources.html** - Resources page with file boxes

### Committee Detail Pages:
7. **committee-who.html** - WHO committee
8. **committee-unodc.html** - UNODC committee
9. **committee-unicef.html** - UNICEF committee
10. **committee-fifa.html** - FIFA committee
11. **committee-ipc.html** - IPC committee
12. **committee-icj.html** - ICJ committee
13. **committee-uss.html** - USS committee
14. **committee-interpol.html** - INTERPOL committee
15. **committee-fia.html** - FIA committee

### Support Files:
16. **styles.css** - All styling with new colors
17. **script.js** - JavaScript functionality

---

## 🚀 UPLOAD TO GITHUB

### Step 1: Upload All Files
1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Upload ALL 17 files listed above
4. Click "Commit changes"
5. Wait 2-3 minutes for GitHub Pages to update

---

## 🖼️ ADDING IMAGES (MOST IMPORTANT STEP!)

You need to add images to make your website complete. Here's what you need:

### 1. YOUR LOGO (logo.png)
- Save your logo as `logo.png` or `logo.jpg`
- Upload to the **main folder** (same place as index.html)
- Recommended size: 200x200 pixels

### 2. UN HEADER IMAGE (un-header.jpg)
This will appear at the top of all pages as background.
- Name it: `un-header.jpg`
- Upload to the **main folder**
- Recommended size: 1920x400 pixels (wide banner)

### 3. UN BACKGROUND SLIDESHOW (3 images)
These rotate on the homepage.

**Create `images` folder:**
- Click "Add file" → "Create new file"
- Type: `images/temp.txt`
- Add any text, click "Commit"

**Upload 3 images:**
- Name them exactly:
  - `un-background-1.jpg`
  - `un-background-2.jpg`
  - `un-background-3.jpg`
- Go to `images` folder → "Upload files"
- Upload all 3
- Recommended size: 1920x1080 pixels

### 4. COMMITTEE IMAGES (9 images)
One image for each committee page.

**Create `committee-images` folder:**
- Click "Add file" → "Create new file"
- Type: `committee-images/temp.txt`
- Add any text, click "Commit"

**Upload 9 committee images:**
Name them exactly (all lowercase):
- `who.jpg`
- `unodc.jpg`
- `unicef.jpg`
- `fifa.jpg`
- `ipc.jpg`
- `icj.jpg`
- `uss.jpg`
- `interpol.jpg`
- `fia.jpg`

Go to `committee-images` folder → "Upload files" → Upload all 9
Recommended size: 800x600 pixels

---

## 📄 ADDING FILES TO YOUR WEBSITE

### Background Guides (Committee PDFs)

**Create `guides` folder:**
- Click "Add file" → "Create new file"
- Type: `guides/temp.txt`
- Add any text, click "Commit"

**Upload background guides:**
Name them:
- `who-background-guide.pdf`
- `unodc-background-guide.pdf`
- `unicef-background-guide.pdf`
- `fifa-background-guide.pdf`
- `ipc-background-guide.pdf`
- `icj-background-guide.pdf`
- `uss-background-guide.pdf`
- `interpol-background-guide.pdf`
- `fia-background-guide.pdf`

### Delegate Resources (4 PDF files)

**Create `resources` folder:**
- Click "Add file" → "Create new file"
- Type: `resources/temp.txt`
- Add any text, click "Commit"

**Upload resource files:**
Name them:
- `delegate-handbook.pdf`
- `position-paper-guide.pdf`
- `resolution-guide.pdf`
- `conference-schedule.pdf`

### How to Make Files Downloadable

Once you upload the files, edit each committee/resource page:

**For Background Guides:**
Find this line in each committee page:
```html
<div class="file-upload-placeholder" onclick="alert('Background guide will be uploaded here soon! Stay tuned.')">
```

Change to:
```html
<div class="file-upload-placeholder" onclick="window.open('guides/who-background-guide.pdf', '_blank')">
```

**For Delegate Resources:**
In `delegate-resources.html`, find the function `handleResourceClick` and change:
```javascript
const fileExists = false;
```
to:
```javascript
const fileExists = true;
```

---

## 👥 ADDING STAFF INFORMATION

To add chair photos and descriptions to each committee:

1. Open any committee page (e.g., `committee-who.html`)

2. Find the staff sections (Head Chair, Co-Chair, Pager)

3. Replace this:
```html
<div class="staff-name staff-placeholder">[Name to be added]</div>
<div class="staff-description staff-placeholder">
    <p>Add head chair name, photo, and description here</p>
</div>
```

With this:
```html
<div class="staff-name">John Smith</div>
<div class="staff-description">
    <p>John is a senior delegate with 3 years of MUN experience...</p>
</div>
```

4. For photos, create a `staff-photos` folder and upload photos, then add:
```html
<div class="staff-photo-placeholder">
    <img src="staff-photos/john-smith.jpg" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
</div>
```

---

## 🔗 ADDING GOOGLE FORMS LINKS

To connect registration forms:

1. Open `script.js` on GitHub
2. Click the pencil icon (Edit)
3. Find the `registrationLinks` section (around line 30)
4. Add your Google Form URLs:

```javascript
const registrationLinks = {
    'secretariat-link': 'https://forms.gle/YOUR-SECRETARIAT-FORM',
    'chair-link': 'https://forms.gle/YOUR-CHAIR-FORM',
    'volunteer-link': 'https://forms.gle/YOUR-VOLUNTEER-FORM',
    'delegate-link': 'https://forms.gle/YOUR-DELEGATE-FORM'
};
```

5. Click "Commit changes"

---

## 📂 FINAL FOLDER STRUCTURE

Your repository should look like this:

```
belmun2026/
├── index.html
├── about.html
├── committees.html
├── register.html
├── contact.html
├── delegate-resources.html
├── committee-who.html
├── committee-unodc.html
├── committee-unicef.html
├── committee-fifa.html
├── committee-ipc.html
├── committee-icj.html
├── committee-uss.html
├── committee-interpol.html
├── committee-fia.html
├── styles.css
├── script.js
├── logo.png                    ← Your logo
├── un-header.jpg               ← UN header image
├── images/
│   ├── un-background-1.jpg
│   ├── un-background-2.jpg
│   └── un-background-3.jpg
├── committee-images/
│   ├── who.jpg
│   ├── unodc.jpg
│   ├── unicef.jpg
│   ├── fifa.jpg
│   ├── ipc.jpg
│   ├── icj.jpg
│   ├── uss.jpg
│   ├── interpol.jpg
│   └── fia.jpg
├── guides/
│   ├── who-background-guide.pdf
│   ├── unodc-background-guide.pdf
│   ├── unicef-background-guide.pdf
│   ├── fifa-background-guide.pdf
│   ├── ipc-background-guide.pdf
│   ├── icj-background-guide.pdf
│   ├── uss-background-guide.pdf
│   ├── interpol-background-guide.pdf
│   └── fia-background-guide.pdf
├── resources/
│   ├── delegate-handbook.pdf
│   ├── position-paper-guide.pdf
│   ├── resolution-guide.pdf
│   └── conference-schedule.pdf
└── staff-photos/
    ├── chair1.jpg
    ├── chair2.jpg
    └── pager1.jpg
```

---

## ✅ QUICK CHECKLIST

- [ ] Upload all 17 HTML/CSS/JS files to GitHub
- [ ] Upload logo.png
- [ ] Upload un-header.jpg
- [ ] Create images folder and upload 3 UN backgrounds
- [ ] Create committee-images folder and upload 9 committee images
- [ ] Create guides folder (add PDFs later)
- [ ] Create resources folder (add PDFs later)
- [ ] Add Google Forms links to script.js
- [ ] Add staff information to committee pages
- [ ] Enable GitHub Pages
- [ ] Test website!

---

## 🎨 COLOR SCHEME REFERENCE

Your new colors:
- **Primary Green**: #424610
- **Beige**: #8f8779
- **Dark Brown**: #363026
- **Brown**: #483322

---

## 🆘 TROUBLESHOOTING

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Check files are in correct folders
- Clear browser cache and refresh

**Dropdown menus not working?**
- Make sure script.js is uploaded
- Check browser console (F12) for errors

**"Coming Soon" messages showing?**
- This is normal until you upload the PDF files
- Follow the steps above to add files

---

## 📧 NEED HELP?

Contact: belmun26@gmail.com
Instagram: @belmun26

---

## 🎉 YOU'RE DONE!

Your website is fully redesigned and ready to go! Just add your images and files, and you're all set!
