function showVocabulary() {
    hideAllModules();
    document.getElementById('vocabulary').style.display = 'block';
}

function showDialogue() {
    hideAllModules();
    document.getElementById('dialogue').style.display = 'block';
}

function showGrammar() {
    hideAllModules();
    document.getElementById('grammar').style.display = 'block';
}

function showTest() {
    hideAllModules();
    document.getElementById('test').style.display = 'block';
}

function hideAllModules() {
    const modules = document.querySelectorAll('.learning-module');
    modules.forEach(module => {
        module.style.display = 'none';
    });
}

function playAudio(file) {
    const audio = new Audio(file);
    audio.play();
}

function checkAnswer() {
    alert('你答对了！');
}

function checkTestAnswer(answer) {
    if (answer === 'Beijing') {
        alert('答对了！');
    } else {
        alert('答错了，再试试！');
    }
}
