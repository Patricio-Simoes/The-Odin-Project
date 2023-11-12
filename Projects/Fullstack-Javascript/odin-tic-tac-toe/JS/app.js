//? This function is in charge of displaying/hiding the AI & Player form fields.
function displayOpponentFormFields(){
    if (selectFormFieldElement.value === 'ai'){
        opponent = 'ai';
        aiFormFieldElement.classList.remove('hidden');
        humanFormFieldElement.classList.add('hidden');
        startGameBtnElement.classList.remove('hidden');
    }
    else if (selectFormFieldElement.value === 'human'){
        opponent = 'human';
        aiFormFieldElement.classList.add('hidden');
        humanFormFieldElement.classList.remove('hidden');
        startGameBtnElement.classList.remove('hidden');
    }
    else{
        aiFormFieldElement.classList.add('hidden');
        humanFormFieldElement.classList.add('hidden');
        startGameBtnElement.classList.add('hidden');
    }
}