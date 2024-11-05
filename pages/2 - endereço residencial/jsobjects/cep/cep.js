export default {
    formatZipCode: () => {
        // Captura o valor atual do InputWidget chamado zip_code
        let cep = zip_code.text;
        
        // Remove qualquer caractere que não seja numérico
        cep = cep.replace(/\D/g, '');

        // Verifica se o número de caracteres excede o limite
        if (cep.length != 8) {
            showAlert("O CEP deve ter exatamente 8 dígitos.", "warning");
            return;
        }

        // Aplica o formato 00000-000 caso tenha exatamente 8 dígitos
        if (cep.length === 8) {
            cep = cep.slice(0, 5) + '-' + cep.slice(5);
        }
        
        // Atualiza o InputWidget zip_code com o valor formatado
        zip_code.setValue(cep);
    }
}
