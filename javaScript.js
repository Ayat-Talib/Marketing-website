function filterProjects(category) {
    // Correct selector to match the class of project boxes
    const projects = document.querySelectorAll('.project-box');

    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block'; // Show all projects
        } else {
            project.style.display = project.classList.contains(category) ? 'block' : 'none'; // Show only the matching category
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const degree = `${percentage}%`;
        circle.style.setProperty('--percentage', degree);
    });
});
