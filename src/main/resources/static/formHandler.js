async function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const formData = {
        number: document.getElementById('number').value,
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        code: document.getElementById('code').value
    };

    try {
        const response = await fetch('http://localhost:8080/api/bghdo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const message = await response.text();
            alert(message);
        } else {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        alert('An error occurred while submitting the form.');
        console.error('Error:', error);
    }
}
