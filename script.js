document.getElementById('send-button').addEventListener('click', function() {
  var userInput = document.getElementById('user-input').value;
  fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input: userInput })
  })
  const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');

sendButton.addEventListener('click', async () => {
    const inputText = userInput.value;
    const response = await fetch('<backend_server_url>/process-input', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: inputText
        })
    });

    const responseData = await response.json();
    // Display the response in the chat window
});

  .then(response => response.json())
  .then(data => {
    // Process the response from the backend
    // Display the response in the chat window
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
