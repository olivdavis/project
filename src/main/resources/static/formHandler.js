async function submitForm(event) {
    event.preventDefault();

    const formData = {
        number: document.getElementById('number').value,
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        code: document.getElementById('code').value
    };

    try {
        const response = await fetch('http://52.207.213.2/api/bghdo', {
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
