# Full Stack Development Practice (HTML • CSS • PHP)

This repository contains my **Full Stack Development learning exercises** and practice files organized by topic.  
It includes **HTML fundamentals, CSS fundamentals/layout/responsiveness/animations**, and **PHP basics**.

**Languages (approx.):** HTML (~79%), CSS (~13%), PHP (~8%)

---

## How to use this repo

### View HTML/CSS exercises
Open any `.html` file in a browser, or use **VS Code + Live Server**.

### Run PHP exercises (XAMPP)
1. Install XAMPP
2. Start **Apache**
3. Copy repo into: `C:\xampp\htdocs\`
4. Visit:
   - `http://localhost/Full_Stack_development_B210101017/`

---

## Repo structure (topics)

- `FirstWebPage/` — first HTML page
- `HTML-Fundamentals/` — multiple HTML practice pages + `content.txt` + `img/`
- `HTML-Forms/` — forms & labels practice
- `CSS-Fundamentals/` — selectors, styling, basic CSS pages + `style.css`
- `CSS-Layouts/` — Flexbox, Grid, layout challenges + CSS files
- `CSS media Quaries/` — responsive practice (media queries + responsive navbar)
- `CSS transition Transform/` — transitions & transforms demos
- `PHP Basic/` — hello world, variables, strings, arrays, types, casting

---

# 2-Week Plan (7 days repeated for 2 weeks)
This is a **7-day learning plan**, repeated as **Week 1 + Week 2**.  
Each day contains:
- what I focused on
- related folder(s)
- **code snippets** (examples of what I learned)
- a small **visual/animation idea** (where applicable)

> Week 2 repeats Week 1, but with **better code quality**, **cleaner CSS**, and **small upgrades**.

---

## Week 1

<details>
  <summary><strong>Day 1 — HTML Basics + First Page</strong></summary>

### What I learned
- Basic HTML page structure
- Headings, paragraphs, links, images, lists

### Where in this repo
- `FirstWebPage/index.html`
- `HTML-Fundamentals/index.html`

### Code example (HTML skeleton + common tags)
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My First Page</title>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>This is a paragraph.</p>

  <a href="https://developer.mozilla.org/">Learn more</a>

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>

  <img src="img/photo.jpg" alt="A description of the image" width="240" />
</body>
</html>
```

### Visual idea (easy)
Use a colored “highlight box” with inline CSS (quick preview of styling concept):
```html
<div style="padding:12px; border:1px solid #ccc; background:#f7f7f7;">
  Highlighted note box (quick inline style)
</div>
```
</details>

---

<details>
  <summary><strong>Day 2 — Semantic HTML + Page Structure</strong></summary>

### What I learned
- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`
- Better structure for readability and SEO

### Where in this repo
- `HTML-Fundamentals/index2.html` → `Index6.html`
- `HTML-Fundamentals/content.txt`

### Code example (semantic layout)
```html
<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">Posts</a>
    <a href="#">About</a>
  </nav>
</header>

<main>
  <section>
    <h2>Latest Posts</h2>

    <article>
      <h3>Post title</h3>
      <p>Post preview text…</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2026 My Blog</p>
</footer>
```

### Visual idea (simple “card” look with CSS)
```html
<div class="card">
  <h3>Card Title</h3>
  <p>This looks like a UI card.</p>
</div>
```

```css
.card{
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  max-width: 420px;
}
```
</details>

---

<details>
  <summary><strong>Day 3 — HTML Forms</strong></summary>

### What I learned
- Building forms with labels
- Common inputs and validation attributes

### Where in this repo
- `HTML-Forms/CreateForm.html`
- `HTML-Forms/Label.html`

### Code example (form + labels)
```html
<form>
  <label for="name">Full Name</label>
  <input id="name" name="name" type="text" required minlength="3" />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="course">Course</label>
  <select id="course" name="course">
    <option>Web Development</option>
    <option>PHP Basics</option>
  </select>

  <button type="submit">Submit</button>
</form>
```

### Visual idea (clean form styling)
```css
form{
  max-width: 420px;
  display: grid;
  gap: 10px;
}

input, select, button{
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
}

button{
  background: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover{
  filter: brightness(1.05);
}
```
</details>

---

<details>
  <summary><strong>Day 4 — CSS Fundamentals (Selectors + Box Model)</strong></summary>

### What I learned
- Selectors, colors, units, typography
- Margin, padding, border, box sizing

### Where in this repo
- `CSS-Fundamentals/Index.html`
- `CSS-Fundamentals/style.css`

### Code example (box model + consistent sizing)
```css
*{
  box-sizing: border-box;
}

.box{
  width: 280px;
  padding: 16px;
  margin: 12px 0;
  border: 2px solid #111827;
  border-radius: 12px;
  background: #f3f4f6;
}
```

### Visual idea (hover highlight)
```css
.box:hover{
  background: #e0f2fe;
  border-color: #0284c7;
}
```
</details>

---

<details>
  <summary><strong>Day 5 — CSS Layouts (Flexbox + Grid)</strong></summary>

### What I learned
- Flexbox for rows/columns + alignment
- Grid for 2D layouts

### Where in this repo
- `CSS-Layouts/CSSFlexBox.html`
- `CSS-Layouts/CssGrid.html`

### Code example (Flexbox cards)
```html
<div class="cards">
  <div class="card">Card A</div>
  <div class="card">Card B</div>
  <div class="card">Card C</div>
</div>
```

```css
.cards{
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.card{
  flex: 1 1 200px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: white;
}
```

### Code example (Grid gallery)
```css
.gallery{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}
```

### Visual idea (card shadow for depth)
```css
.card{
  box-shadow: 0 10px 24px rgba(0,0,0,.08);
}
```
</details>

---

<details>
  <summary><strong>Day 6 — Responsive Design (Media Queries)</strong></summary>

### What I learned
- Breakpoints and layouts that adapt to screen size
- Making nav and content responsive

### Where in this repo
- `CSS media Quaries/MediaQuariesPractice.html`
- `CSS media Quaries/ResponsibeDeviceTest.html`
- `CSS media Quaries/Responsibe Navbar.html`

### Code example (basic media query)
```css
.container{
  padding: 20px;
}

@media (max-width: 600px){
  .container{
    padding: 12px;
  }
}
```

### Visual idea (responsive navbar concept)
```css
.nav{
  display:flex;
  gap: 12px;
}

@media (max-width: 600px){
  .nav{
    flex-direction: column;
    align-items: flex-start;
  }
}
```
</details>

---

<details>
  <summary><strong>Day 7 — Transitions/Transforms + UI Polish</strong></summary>

### What I learned
- `transition` for smooth changes
- `transform` for motion effects

### Where in this repo
- `CSS transition Transform/Transition.html`
- `CSS transition Transform/ButtonTransition.html`

### Code example (smooth hover animation)
```css
.btn{
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  background: #60a5fa;
  cursor: pointer;

  transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
}

.btn:hover{
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(96,165,250,.35);
  filter: brightness(1.03);
}

.btn:active{
  transform: translateY(0) scale(.98);
}
```

### Visual idea (animated “badge” using keyframes)
```css
.badge{
  display:inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #111827;
  color: white;
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse{
  0%,100% { transform: scale(1); opacity: .85; }
  50%     { transform: scale(1.05); opacity: 1; }
}
```
</details>

---

## Week 2 (repeat Week 1 — improve & upgrade)

Use the same Day 1–Day 7 topics again, but focus on **improvements**:

- cleaner file naming (optional)
- better CSS organization (reusable classes)
- better spacing/typography system
- improved responsiveness
- add small animations carefully (not too much)

<details>
  <summary><strong>Day 1 (Repeat) — HTML structure cleanup</strong></summary>

- Use semantic tags properly
- One `h1` per page
- Better indentation and comments

**Mini code reminder:**
```html
<main>
  <section aria-label="Introduction">
    <h2>Introduction</h2>
    <p>Short and clear content.</p>
  </section>
</main>
```
</details>

<details>
  <summary><strong>Day 2 (Repeat) — Accessibility improvements</strong></summary>

- Improve `alt` text
- Improve links
- Add proper `lang="en"` and meta viewport

**Mini code reminder:**
```html
<img src="img/pic.jpg" alt="Student working on a laptop at a desk" />
<a href="/about.html">Read more about this page</a>
```
</details>

<details>
  <summary><strong>Day 3 (Repeat) — Better forms</strong></summary>

- Add `fieldset` + `legend`
- Better spacing and focus styles

**Mini code reminder:**
```html
<fieldset>
  <legend>Personal Details</legend>
  <label for="phone">Phone</label>
  <input id="phone" name="phone" type="tel" />
</fieldset>
```
</details>

<details>
  <summary><strong>Day 4 (Repeat) — CSS variables + consistent theme</strong></summary>

**Mini code reminder:**
```css
:root{
  --bg: #0b1220;
  --card: rgba(255,255,255,.06);
  --text: #e5e7eb;
  --primary: #60a5fa;
}
```
</details>

<details>
  <summary><strong>Day 5 (Repeat) — Better layout components</strong></summary>

- Create reusable `.container`, `.card`, `.btn`

**Mini code reminder:**
```css
.container{ width:min(1000px, 92vw); margin:auto; }
```
</details>

<details>
  <summary><strong>Day 6 (Repeat) — Responsive testing</strong></summary>

- Test: 360px mobile, 768px tablet, 1366px desktop
- Fix overflow and font sizes

**Mini code reminder:**
```css
img{ max-width: 100%; height: auto; }
```
</details>

<details>
  <summary><strong>Day 7 (Repeat) — Animation polish</strong></summary>

- Use subtle animations only
- Prefer `transform` + `opacity` for smooth performance

**Mini code reminder:**
```css
.card{
  transition: transform .2s ease;
}
.card:hover{
  transform: translateY(-4px);
}
```
</details>

---

## PHP Basics (quick reference)
These are small practice scripts located in `PHP Basic/`.

### Example: variables + echo
```php
<?php
$name = "Zol-piE";
$age = 20;

echo "Name: " . $name . "<br>";
echo "Age: " . $age;
?>
```

### Example: array + print_r
```php
<?php
$colors = ["red", "green", "blue"];
print_r($colors);
?>
```

---

## Optional next step (to make this repo easier to browse)
Add a root `index.html` that links to:
- HTML Fundamentals
- HTML Forms
- CSS Fundamentals
- CSS Layouts
- Media Queries
- Transitions/Transforms
- PHP Basics

---

**Author:** Zol-piE  
**Date:** 2026-05-01
