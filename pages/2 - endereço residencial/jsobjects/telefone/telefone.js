export default {
	formatPhoneNumber: () => {
		// Captura o valor atual do PhoneInput chamado telephone (sem o dial code)
		let phone = telephone.value;  // Use 'value' para pegar apenas os números sem formatação

		// Remove qualquer caractere que não seja numérico
		phone = phone.replace(/\D/g, '');

		// Verifica se o número de caracteres excede ou é inferior ao limite esperado
		if (phone.length != 10) {
			showAlert("O número de telefone deve ter exatamente 10 dígitos.", "warning");
			return;
		}

		// Aplica o formato (00)xxxx-xxxx caso tenha exatamente 10 dígitos
		let formattedPhone = '(' + phone.slice(0, 2) + ')' + phone.slice(2, 6) + '-' + phone.slice(6);
	}
}