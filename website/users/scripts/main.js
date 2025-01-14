document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.getElementById('users-table-body');

    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        data.users.forEach(user => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.role}</td>
                <td><button class="btn btn-danger btn-sm delete-btn" data-id="${user.id}">Usuń</button></td>
            `;
            tableBody.appendChild(row);
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', async (event) => {
                const userId = event.target.getAttribute('data-id');
                console.log("User ID to delete:", userId); // Logowanie ID przed usunięciem
                const confirmed = confirm('Czy na pewno chcesz usunąć tego użytkownika?');

                if (confirmed) {
                    try {
                        const deleteResponse = await fetch('/api/deleteUser', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ id: userId })
                        });

                        if (deleteResponse.ok) {
                            alert('Użytkownik został usunięty!');
                            window.location.reload();
                        } else {
                            alert('Nie udało się usunąć użytkownika.');
                        }
                    } catch (error) {
                        console.error('Error deleting user:', error);
                        alert('Błąd podczas usuwania użytkownika.');
                    }
                }
            });
        });

    } catch (error) {
        console.error('Error fetching users:', error);
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-danger">Nie udało się załadować danych użytkowników.</td>
            </tr>
        `;
    }
});
