// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Get the form and the fields for article title and content
    const articleForm = document.getElementById('article-form');
    const titleInput = document.getElementById('article-title');
    const contentInput = document.getElementById('article-content');

    // Get the area where the article will be displayed
    const articleSection = document.getElementById('article-section');

    // Add an event listener to the form submission
    articleForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload on form submission

        // Get the input values from the form
        const titleValue = titleInput.value.trim();
        const contentValue = contentInput.value.trim();

        // If both the title and content are provided, append them to the article section
        if (titleValue && contentValue) {
            const newArticle = createArticleElement(titleValue, contentValue);
            articleSection.appendChild(newArticle);

            // Clear the input fields
            titleInput.value = '';
            contentInput.value = '';
        } else {
            alert("Please fill out both the title and content fields.");
        }
    });

    // Function to create the article element with a title and content
    function createArticleElement(title, content) {
        // Create elements
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-item');

        const articleTitle = document.createElement('h3');
        articleTitle.textContent = title;

        const articleContent = document.createElement('p');
        articleContent.textContent = content;

        // Append title and content to the article div
        articleDiv.appendChild(articleTitle);
        articleDiv.appendChild(articleContent);

        return articleDiv;
    }

});