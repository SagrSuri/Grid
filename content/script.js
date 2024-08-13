document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'tag';
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                div.appendChild(a);
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading the JSON data:', error));
});
