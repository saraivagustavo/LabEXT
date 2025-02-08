export default {
	
	getData: () =>
	{
		let link_lattes = appsmith.store.academicData['lattes'];
		let nv_academico = appsmith.store.academicData['nvAcademico'];
		let areaDeConhecimento1 = appsmith.store.academicData['area_conhecimento1'];
		let areaDeConhecimento2 = appsmith.store.academicData['area_conhecimento2'];
		let areaDeConhecimento3 = appsmith.store.academicData['area_conhecimento3'];
		
		return {link_lattes, nv_academico, areaDeConhecimento1,areaDeConhecimento2,areaDeConhecimento3};
	}
}
