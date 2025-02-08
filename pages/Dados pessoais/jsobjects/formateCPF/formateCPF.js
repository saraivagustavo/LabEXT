export default {
	 formatCPF: () =>  {
		 let formated = cpf.text;
			// Remove qualquer caractere que não seja número
			formated = formated.replace(/\D/g, "");
		 
			if (formated.length === 11) {
			formated = formated.slice(0, 3) + '.' + formated.slice(3,6) + '.' + formated.slice(6,9) + '-' + formated.slice(9);
			}
			// Formata o número como CPF (XXX.XXX.XXX-XX)
		 	cpf.setValue(formated);
	}
}