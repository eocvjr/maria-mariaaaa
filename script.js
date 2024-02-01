function respondToInvitation(response) {
    if (response === 'Yes') {
        alert('Te amo mucho mi amorcito eres la mejor muaaaa');

        // Create an img element
        const gifElement = document.createElement('img');

        // Set the src attribute to the URL of your GIF
        gifElement.src = 'https://media1.tenor.com/m/arqlNu8gyJYAAAAC/cat-cat-jumping.gif';

        // Append the img element to the result div
        document.getElementById('result').appendChild(gifElement);
    } else if (response === 'No') {
        // Get a random number between 0 and 1
        const random = Math.random();

        // Get the height of the document
        const documentHeight = document.documentElement.scrollHeight;

        // Calculate the target scroll position based on the random number
        const targetScrollPosition = Math.floor(random * documentHeight);

        // Find the element with id "noSection"
        const noSectionElement = document.getElementById('noSection');

        // Scroll the element into view with smooth behavior
        noSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}
