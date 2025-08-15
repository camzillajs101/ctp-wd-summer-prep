const form = document.getElementById('new_habit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const habit = {
        name: data.get('habit_name'),
        streak: parseInt(data.get('target_streak'))
    };

    console.log(habit)
});