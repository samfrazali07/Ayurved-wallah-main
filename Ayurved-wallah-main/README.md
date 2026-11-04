# Ayurved Wallah — Ayurveda Education & Coaching Platform

A modern, premium, responsive educational website and Learning Management System (LMS) frontend designed for **Ayurved Wallah**, bridging authentic Vedic medical wisdom (Brihattrayi & Laghuttrayi) with modern EdTech design and usability.

---

## 🌿 1. Design Direction & Color Palette

- **Primary**: Deep Forest Green (`#174C32`) — Represents academic gravitas, life, and classical medicine.
- **Secondary**: Sage Green (`#78966B`) — Herbal botanical accents and secondary highlights.
- **Background**: Warm Ivory (`#FAF7EE`) — Authentic palm-leaf manuscript & parchment aesthetic.
- **Cards & Surfaces**: Crisp White (`#FFFFFF`) — Modern rounded cards with subtle drop shadows.
- **Accent**: Muted Gold (`#C49A45`) — Represents excellence, authenticity, and traditional Ayurveda prestige.
- **Text**: Dark Charcoal (`#242B25`) — High legibility and contrast across all screens.

**Typography:**
- **Headings**: Playfair Display (Serif)
- **Body**: Plus Jakarta Sans (Clean, modern sans-serif)
- **Sanskrit Accent**: Cinzel Decorative

---

## 🏛️ 2. Key Sections Implemented

1. **Sticky Navigation Bar (`Navbar.jsx`)**:
   - Botanical crest logo + brand name + tagline *"Learn · Practice · Excel"*.
   - Dropdown menus for Courses, Study Materials, and More (About Us, Results, Contact).
   - Global interactive Search Bar (`Ctrl + K`).
   - "Student Login" CTA button & mobile hamburger navigation drawer.

2. **Hero Section (`Hero.jsx`)**:
   - Split layout with value proposition badge: *"Your Complete Ayurveda Learning Platform"*.
   - Main heading & subheading: *"Learn Ayurveda. Crack Your Exams."*.
   - Academic guidance description for BAMS, AIAPGET, and State PSCs.
   - High-yield artwork with Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya, mortar & pestle (*Khalva Yantra*), and medicinal herbs (Tulsi, Ashwagandha, Brahmi).
   - Floating badge for today's live batch and national rank percentiles.

3. **Quick Access Cards (`QuickAccess.jsx`)**:
   - 6 horizontally aligned quick-access cards: Class Schedule, Courses, Notes, PYQs, Fee Structure, Doubt Support.

4. **Courses Section (`Courses.jsx`)**:
   - Interactive category filtering tabs for:
     - AIAPGET (PG) Achiever's Masterclass
     - BAMS Professional Foundation (1st to 4th Year)
     - Ayurveda Medical Officer (AMO / PSC / UPSC)
     - Samhita Parayana & Shloka Decoding Batch
     - All-India NTA CBT Mock Test Series
   - Detailed course cards with syllabus preview triggers and transparent fee placeholders.

5. **Student Dashboard Preview (`StudentDashboard.jsx`)**:
   - Prominent dark forest green LMS preview container.
   - 5 interactive tabs: Live Classes, Study Materials, Mock Tests, Performance Report, and My Courses.
   - Student login portal trigger with one-click demo credentials.

6. **Study Materials & Digital Library (`StudyMaterials.jsx`)**:
   - 4 primary resource categories: Subject-wise Notes, PYQs, Practice Questions (MCQ Bank), and Recorded Lectures.
   - Search & filter interface by subject, resource type, and keyword.
   - Interactive Note Reader modal with authentic Sanskrit shloka breakdowns and exam mnemonics.

7. **Class Schedule Preview (`ClassSchedule.jsx`)**:
   - Clean timetable layout on desktop and stacked cards on mobile.
   - Live status badges (*Live Now*, *Starting Soon*, *Scheduled*).
   - Direct "Join Class" and reminder actions.

8. **Fee Structure & EMI (`FeeStructure.jsx`)**:
   - Comparison pricing cards with editable placeholders.
   - Clear inclusion lists, installment/EMI guidance, and merit scholarship details.

9. **Why Choose Ayurved Wallah (`WhyChooseUs.jsx`)**:
   - 7 Core Pillars: MD/MS Faculty, Structured Programs, Comprehensive Notes, 10-Yr Solved PYQs, Regular Mock Tests, Doubt Support, and AI Performance Tracking.

10. **Results and Testimonials (`ResultsTestimonials.jsx`)**:
    - Representative AIR rankers (placeholders), selections in premier national institutes (AIIA, NIA, ITRA, IMS-BHU), and verified student reviews.

11. **About and Contact Section (`AboutContact.jsx`)**:
    - Institute mission and vision, faculty panel profiles, contact numbers, direct WhatsApp button, and interactive contact form.

12. **Footer (`Footer.jsx`)**:
    - Deep forest green footer with newsletter shloka digest subscription, quick navigation links, social channels, and legal policies.

---

## 🚀 3. How to Run & Preview

### Option A: Immediate In-Browser Preview (No Node/NPM Needed)
You can directly open `preview.html` in any web browser (Chrome, Edge, Firefox, Safari) by double-clicking it or using:
```powershell
start preview.html
```

### Option B: Local Vite Dev Server
When Node.js is installed on your workstation:
```bash
npm install
npm run dev
```

---

## 📁 4. Project Structure

```
ayurved-wallah/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── preview.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── QuickAccess.jsx
│   │   ├── Courses.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── StudyMaterials.jsx
│   │   ├── ClassSchedule.jsx
│   │   ├── FeeStructure.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ResultsTestimonials.jsx
│   │   ├── AboutContact.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchModal.jsx
│   │   ├── LoginModal.jsx
│   │   ├── CourseDetailModal.jsx
│   │   ├── NotesPreviewModal.jsx
│   │   └── ConsultationModal.jsx
│   └── data/
│       ├── coursesData.js
│       ├── scheduleData.js
│       ├── materialsData.js
│       ├── facultyData.js
│       ├── testimonialsData.js
│       └── feesData.js
```
