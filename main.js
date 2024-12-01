const showMoreSkill = document.querySelector(".show_more_skill")
const skills = document.querySelector('.all_skills');

showMoreSkill.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
        showMoreSkill.textContent = '-';
    } else {
        skills.style.display = 'none';
        showMoreSkill.textContent = '+';
    }
});