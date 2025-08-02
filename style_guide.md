# Mini Style Guide

This lightweight style guide documents the core design tokens used in
Bhavi Doshi’s single–page portfolio.  Colours, typography, spacing
and motion principles are captured here to enable consistent future
updates.

## Colours

| Token                | Sample | Usage                                   |
|----------------------|:------:|-----------------------------------------|
| `--bg-gradient-start`| ![#f7f4fa](https://via.placeholder.com/15/f7f4fa/f7f4fa) | Lightest colour of the page background gradient. |
| `--bg-gradient-end`  | ![#e8f8f7](https://via.placeholder.com/15/e8f8f7/e8f8f7) | Second stop of the background gradient. |
| `--accent`           | ![#f49ac1](https://via.placeholder.com/15/f49ac1/f49ac1) | Primary accent used for buttons, highlights, icons and active nav dots. |
| `--accent-dark`      | ![#e479ac](https://via.placeholder.com/15/e479ac/e479ac) | Darker tone of the accent for button gradients and hover states. |
| `--primary-text`     | ![#2d3748](https://via.placeholder.com/15/2d3748/2d3748) | Headings and primary text. |
| `--secondary-text`   | ![#4a5568](https://via.placeholder.com/15/4a5568/4a5568) | Body copy and supporting text. |
| `--skill-bg`         | ![#f3f3f5](https://via.placeholder.com/15/f3f3f5/f3f3f5) | Background of the embossed skill badges and social icons. |

## Typography

- **Primary font:** [`Inter`](https://fonts.google.com/specimen/Inter) imported via Google Fonts. Weights used: 400, 500 and 700.
- **Headline sizes:**
  - Hero name (`h1`): clamp(2.5rem – 4.5rem) to scale fluidly across viewports.
  - Section headings (`h2`): 2 rem on desktop, scaling down on mobile.
- **Body text:** 1 rem with a 1.6 line‑height for comfortable reading.

## Spacing

- Sections are snap‑aligned and occupy at least `100vh` to create clear scroll
  stops. They include `80px` top and bottom padding on desktop and reduce
  slightly on smaller screens.
- Grids and badge groups use `16–24px` gaps to ensure elements breathe.
- Skill badges have `0.6rem × 1rem` internal padding for a pill‑like feel.

## Embossed Elements

Skill badges and the LinkedIn icon use an inset box‑shadow to create a
subtle embossed appearance.  The effect is achieved using two
contrasting inset shadows: one light and one dark.

```css
.skill-badge {
  box-shadow: inset 4px 4px 6px rgba(255, 255, 255, 0.8), inset -4px -4px 8px rgba(0, 0, 0, 0.05);
}
```

## Motion & Interactions

- **Navigation dots:** a `transform` and colour change highlight the active
  section. IntersectionObserver updates the active state.
- **Buttons & badges:** scale slightly (`translateY(-2px)`) on hover to
  communicate interactivity.
- **Project cards:** rotate subtly in 3‑D on hover using `rotateX` and
  `rotateY` transforms and an eased transition over 0.5 s.

## Responsiveness

- The sticky side‑nav is hidden on screens narrower than `769px` to avoid
  clutter.  Sections still snap on mobile, and the layout stacks
  vertically.
- The projects grid switches from multi‑column to single‑column on
  smaller widths to maintain legibility.

## Assets

- **Blob:** A soft pastel blob (`assets/blob1.png`) floats behind the hero
  content to add depth without distracting from the copy.
- **Scribble underline:** A hand‑drawn underline (`assets/scribble.png`) sits
  under the hero tagline, reinforcing the playful/hand‑crafted aesthetic.
- **Avatar:** A neutral, stylised avatar (`assets/avatar.png`) represents
  Bhavi Doshi in lieu of a personal headshot. This can be replaced with an
  actual photograph by overwriting the `avatar.png` file in `/assets`.

Feel free to adjust these tokens and reuse the embossed shadows
elsewhere in the site for a cohesive look.