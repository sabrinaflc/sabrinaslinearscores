document.addEventListener('DOMContentLoaded', function () {
    const scoreDataJSON = sessionStorage.getItem("scores");

    if (!scoreDataJSON) {
        Swal.fire({
            icon: 'error',
            title: 'No data found',
            text: 'Please go back and fill in your scores.',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = "index.html";
        });
        return;
    }

    const scoreData = JSON.parse(scoreDataJSON);

    const correctE_module1 = parseInt(scoreData["correctE-module1"]);
    const correctE_module2 = parseInt(scoreData["correctE-module2"]);
    const correctM_module1 = parseInt(scoreData["correctM-module1"]);
    const correctM_module2 = parseInt(scoreData["correctM-module2"]);


    // LOWER AND UPPER OF ENGLISH
    const lowerEnglishScore = lowerEnglish(correctE_module1 + correctE_module2);
    const upperEnglishScore = upperEnglish(correctE_module1 + correctE_module2);

    // LOWER AND UPPER OF MATH
    const lowerMathScore = lowerMath(correctM_module1 + correctM_module2);
    const upperMathScore = upperMath(correctM_module1 + correctM_module2);

    // TOTAL SCORE OF SUBJECTS
    const totalEnglishScore = (lowerEnglishScore + upperEnglishScore) / 2;
    const totalMathScore = (lowerMathScore + upperMathScore) / 2;

    // TOTAL LOWER SCORES
    const totalLowerScores = lowerEnglishScore + lowerMathScore;

    // TOTAL UPPER SCORES
    const totalUpperScores = upperEnglishScore + upperMathScore;

    // TOTAL SCORES
    const totalScores = (totalLowerScores + totalUpperScores) / 2;

    // Update scores
    document.getElementById('lower-english-score').textContent = `Lower ↓ : ${lowerEnglishScore}`;
    document.getElementById('upper-english-score').textContent = `Upper ↑ : ${upperEnglishScore}`;
    document.getElementById('total-english-score').textContent = `Total Score: ${totalEnglishScore}`;

    document.getElementById('lower-math-score').textContent = `Lower ↓ : ${lowerMathScore}`;
    document.getElementById('upper-math-score').textContent = `Upper ↑ : ${upperMathScore}`;
    document.getElementById('total-math-score').textContent = `Total Score: ${totalMathScore}`;

    document.getElementById('lower-scores').textContent = `Lower ↓ : ${totalLowerScores}`;
    document.getElementById('upper-scores').textContent = `Upper ↑ : ${totalUpperScores}`;
    document.getElementById('total-scores').textContent = `Total Score: ${totalScores}`;
});