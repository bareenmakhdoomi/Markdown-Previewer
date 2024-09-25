
const markdownInput = document.querySelector('.markdown-input'); // Use class selector
const preview = document.querySelector('.preview'); // Use class selector

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value; // Get the input value
    const htmlContent = marked(markdownText); // Convert Markdown to HTML
    preview.innerHTML = htmlContent; // Display the HTML in the preview div
});

