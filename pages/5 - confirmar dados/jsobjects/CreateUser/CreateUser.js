export default {
	myVar1: [],
	myVar2: 0,

	async myFun2 () {
		// Função para criar usuário e criar endereço
		try {
			const user_created = await Query1.run(); // Executa a query1 para criar o usuário
			const userId = user_created.data.id; // Retorna o id do usuário criado
			await storeValue('userId', userId); // Armazena o id do usuário em uma variável global
			await Query2.run(); // Cria o endereço

			// todas as querys funcionam, porem a query 3 está com valor de user_id setado... o objetivo é pegar o id do usuario
			// criado na query1 e passar como paramtro para a query3, porem tem que aprender fazer isso no appsmith

			await Query3.run();
			
			showAlert("Cadastro realizado com sucesso!", "success"); 
    
    // Redireciona o usuário para a página de Cadastro Concluído
    	navigateTo('/6-cadastro-concluido')
			// console.log('ID do usuário:', userId);		
			return userId; // Retorna o userId para outras operações, se necessário
		} catch (error) {
			showAlert("erro!", error);
			return 0 // caso não crie, nao acha usuarios para fun3
		}
	},

	// async myFun3 () {
	// // Função para capturar o user_id e passar para a Query3
	// try {
	// const user_created = await Query1.run(); // Executa a query1 para criar o usuário
	// const userId = user_created.data.id; // Retorna o id do usuário criado
	// await storeValue('userId', userId); // Armazena o id do usuário em uma variável global
	// 
	// // Agora passamos o userId para a Query3
	// await Query3.run({
	// user_id: userId, // Passa o userId para a Query3
	// link_lattes: getAcademicData.getData().link_lattes,
	// nivel_academico: getAcademicData.getData().nv_academico,
	// area_conhecimento_1: getAcademicData.getData().areaDeConhecimento1,
	// area_conhecimento_2: getAcademicData.getData().areaDeConhecimento2,
	// area_conhecimento_3: getAcademicData.getData().areaDeConhecimento3
	// });
	// 
	// console.log('Usuário criado com sucesso e dados acadêmicos inseridos para o user_id:', userId);
	// return userId; // Retorna o userId, caso necessário em outras operações
	// } catch (error) {
	// console.error("Erro ao executar a query:", error);
	// }
	// }
}
