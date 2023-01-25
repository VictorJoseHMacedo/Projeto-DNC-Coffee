const exampleModal = document.getElementById('modal-atendimento')
exampleModal.addEventListener('show.bs.modal', () => {

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBody = exampleModal.querySelector('.modal-body')

    modalTitle.textContent = "Atendimento";
    modalBody.textContent = "Rua José de Alencar, 111, Centro CEP: 12209-000 | +55 (11) 3333-8000";
     

})


let cards = Array.from(document.querySelectorAll('.card'))
let botao = Array.from(document.querySelectorAll('.comprar'));


cards.some((element) => {

	element.addEventListener('mouseenter', () => {
	element.children[1].children[1].style.visibility = 'visible';
	
});

	element.addEventListener('mouseleave', () => {
	element.children[1].children[1].style.visibility = 'hidden';
	
});

});

    



