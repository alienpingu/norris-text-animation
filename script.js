document.addEventListener("DOMContentLoaded", () => {
  const norrisLink = document.querySelectorAll("a.norris");

  norrisLink.forEach((link) => {
    const text = link.textContent;
    const segmenter = new Intl.Segmenter("it", { granularity: "grapheme" });
    const chars = Array.from(segmenter.segment(text), (s) => s.segment);
    link.innerHTML = chars
      .map((char) => `<span data-char="${char}">${char}</span>`)
      .join("");
  });

  console.log("Norris animation loaded for ", norrisLink.length, " norrisLink");
});
