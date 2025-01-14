// Funkcja do obsługi usuwania użytkownika
function deleteUser(userName) {
    // Potwierdzenie przed usunięciem
    const confirmDelete = confirm(`Czy na pewno chcesz usunąć użytkownika ${userName}?`);
    if (confirmDelete) {
        // Wysłanie zapytania do serwera
        fetch(`/api/users/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: userName })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Użytkownik ${userName} został usunięty.`);
                // Usunięcie elementu z listy na stronie
                const userListItem = document.querySelector(`#user-list li:contains('${userName}')`);
                userListItem.remove();
            } else {
                alert('Wystąpił błąd przy usuwaniu użytkownika.');
            }
        })
        .catch(error => {
            console.error('Błąd:', error);
            alert('Wystąpił błąd przy usuwaniu użytkownika.');
        });
    }
}
