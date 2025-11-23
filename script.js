document.addEventListener("DOMContentLoaded", () => {
  const norrisLink = document.querySelectorAll("a.norris");
  norrisLink.forEach((link) => {
    const text = link.textContent;
    const segmenter = new Intl.Segmenter("it", { granularity: "grapheme" });
    const chars = Array.from(segmenter.segment(text), (s) => s.segment);
    
    link.textContent = '';
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.setAttribute('data-char', char);
      span.style.setProperty('--index', index);
      span.textContent = char;
      link.appendChild(span);
    });
  });
  console.log("Norris animation loaded for ", norrisLink.length, " norrisLink");
});