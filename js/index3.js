document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('barra-busqueda');
    const items = document.querySelectorAll('.item');

    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        items.forEach(item => {
            const title = item.querySelector('a').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
