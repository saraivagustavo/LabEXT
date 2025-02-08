export default {
	formatPhoneNumber: () => {
		// Captura o valor atual do PhoneInput chamado telephone (sem o dial code)
		let phone = telephone.value;  // Use 'value' para pegar apenas os números sem formatação

		// Remove qualquer caractere que não seja numérico
		phone = phone.replace(/\D/g, '');

		// Se o número for maior que 10, limite a 10 caracteres
		if (phone.length > 10) {
			phone = phone.slice(0, 10);
		}

		// Verifica se o número de caracteres é diferente de 10
		if (phone.length !== 10) {
			showAlert("O número de telefone deve ter exatamente 10 dígitos.", "warning");
			return;
		}

		// Aplica o formato (00)xxxx-xxxx
		let formattedPhone = '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 6) + '-' + phone.slice(6);
		
		// Atualiza o valor do telefone formatado
		phone.value = formattedPhone;
	}
}