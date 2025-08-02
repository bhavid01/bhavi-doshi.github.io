/*
 * main.js
 *
 * Adds interactive behaviour to the portfolio:
 *  – Highlights the active navigation dot based on scroll position using
 *    the IntersectionObserver API.
 *  – Provides a hook for swapping project card images with Google Drive
 *    thumbnails.  To use it, populate the `fileIds` array with your
 *    Drive file IDs and uncomment the code in the `updateProjectImages`
 *    function.  See README for details.
 */

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navDots = document.querySelectorAll('.side-nav .nav-dot');

  // Intersection observer to update the active state of nav dots
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          navDots.forEach(dot => dot.classList.remove('active'));
          if (navDots[index]) {
            navDots[index].classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  sections.forEach(section => observer.observe(section));

  // OPTIONAL: Swap project card background images with Google Drive thumbnails.
  function updateProjectImages() {
    // Provide up to six Google Drive file IDs corresponding to your project
    // documents.  A thumbnail will be automatically generated for each.
    // Example: const fileIds = ['FILE_ID_1', 'FILE_ID_2', ...];
    const fileIds = [];
    if (fileIds.length === 0) return;
    const cards = document.querySelectorAll('.project-card .card-image');
    fileIds.forEach((id, idx) => {
      if (cards[idx]) {
        cards[idx].style.backgroundImage = `url('https://drive.google.com/thumbnail?id=${id}')`;
      }
    });
  }

  // Uncomment the line below once you have provided Drive file IDs
  // updateProjectImages();
});