document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var correctE_module1 = parseInt(params.get('correctE-module1'));
    var correctE_module2 = parseInt(params.get('correctE-module2'));
    var correctM_module1 = parseInt(params.get('correctM-module1'));
    var correctM_module2 = parseInt(params.get('correctM-module2'));

    // LOWER AND UPPER OF ENGLISH
    var lowerEnglishScore = lowerEnglish(correctE_module1 + correctE_module2);
    var upperEnglishScore = upperEnglish(correctE_module1 + correctE_module2);

    // LOWER AND UPPER OF MATH
    var lowerMathScore = lowerMath(correctM_module1 + correctM_module2);
    var upperMathScore = upperMath(correctM_module1 + correctM_module2);

    // TOTAL SCORE OF SUBJECTS
    var totalEnglishScore = (lowerEnglishScore + upperEnglishScore) / 2;
    var totalMathScore = (lowerMathScore + upperMathScore) / 2;

    // TOTAL LOWER SCORES
    var totalLowerScores = (lowerEnglishScore + lowerMathScore);

    // TOTAL UPPER SCORES
    var totalUpperScores = (upperEnglishScore + upperMathScore);

    // TOTAL SCORES
    var totalScores = (totalLowerScores + totalUpperScores) / 2;

    // Update scores
    document.getElementById('lower-english-score').innerHTML = 'Lower ↓ : ' + lowerEnglishScore;
    document.getElementById('upper-english-score').innerHTML = 'Upper ↑ : ' + upperEnglishScore + '<br><br>'; 
    document.getElementById('total-english-score').innerHTML = 'Total Score: ' + totalEnglishScore;


    document.getElementById('lower-math-score').innerHTML = 'Lower ↓: ' + lowerMathScore;
    document.getElementById('upper-math-score').innerHTML = 'Upper ↑ : ' + upperMathScore + '<br><br>';
    document.getElementById('total-math-score').innerHTML = 'Total Score: ' + totalMathScore;

    document.getElementById('lower-scores').innerHTML = 'Lower ↓ : ' + totalLowerScores;
    document.getElementById('upper-scores').innerHTML = 'Upper ↑ : ' + totalUpperScores + '<br><br>';
    document.getElementById('total-scores').innerHTML = 'Total Score: ' + totalScores;
});
