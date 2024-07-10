document.getElementById('encode-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = document.getElementById('encode-input').value;
    const type = document.getElementById('encode-type').value;
  
    const response = await fetch('/encode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, type }),
    });
  
    const result = await response.json();
    document.getElementById('encoded-message').innerText = result.encoded;
  });
  
  document.getElementById('decode-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = document.getElementById('decode-input').value;
    const type = document.getElementById('decode-type').value;
  
    const response = await fetch('/decode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, type }),
    });
  
    const result = await response.json();
    document.getElementById('decoded-message').innerText = result.decoded;
  });
  