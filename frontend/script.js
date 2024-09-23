async function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    const data = {name, address};

    const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
}