// Eric's test
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#form').onsubmit = () => {

        // Initialize new request
        const currency = document.querySelector('#currency').value;

        const request = new XMLHttpRequest();
        request.open('POST', '/convert');

        // Add data to send with request
        const data = new FormData();
        data.append('currency', currency);

        // Send request
        request.send(data);

        // Callback function for when request completes
        request.onload = () => {

            // Extract JSON data from request
            const data = JSON.parse(request.responseText);

            // Update the result div
            if (data.success) {
                const contents = `1 USD is equal to ${data.rate} ${currency}.`
                document.querySelector('#result').innerHTML = contents;
            }
            else {
                document.querySelector('#result').innerHTML = 'There was an error.';
            }
        }

        return false;

    };

});
