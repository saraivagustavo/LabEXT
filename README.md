# Documentação Lab Extensão

## PROJETO CONECTAFAPES  
### Módulo de Cadastro de Pesquisadores  

### INTEGRANTES  
| Versão | Responsável | Data | Alterações | Status |
|---------|-------------|------|------------|--------|
| 1.0 | Elson | 08/02/2025 | ------------ | Desenvolvido |
| 1.0 | Erick | 08/02/2025 | ------------ | Desenvolvido |
| 1.0 | Gustavo | 08/02/2025 | ------------ | Desenvolvido |
| 1.0 | Renato | 08/02/2025 | ------------ | Desenvolvido |
| 1.0 | Lara | 08/02/2025 | ------------ | Desenvolvido |
| 1.0 | Pedro | 08/02/2025 | ------------ | Desenvolvido |

---

## 1. Introdução  
O objetivo do trabalho foi refazer o módulo de registro de cadastro de novos usuários seguindo as regras de implementação de UI/UX, para assim gerar uma experiência menos estressante aos usuários.

## 2. Propósito do Módulo  
Permitir que pesquisadores realizem o cadastro no sistema para participar de editais e projetos.

---

## 3. Protótipos de Telas  
![Tela 1](https://drive.google.com/uc?id=1qdowNSc1xFe-oQ-qN2AX6LGQcnosiefP)
![Tela 2](https://drive.google.com/uc?id=1cxRiEj2WGiwtQ5SalWoNVZiew0Yk7xbO)
![Tela 3](https://drive.google.com/uc?id=1LbA397DAsL7taJp4qSYzGIyHp2_tcjzS)
![Tela 4](https://drive.google.com/uc?id=1G5qSD4BdyMNK68fnVDxJ1zeU4t2oHH7X)
![Tela 5](https://drive.google.com/uc?id=1UqqHGA69RcmQ9rRYhPGP_7lRzofxhacb)
![Tela 6](https://drive.google.com/uc?id=1c7mLljGjILPuA2TwDEcleBdehAmNUUKR)
![Tela 7](https://drive.google.com/uc?id=1pmyMbuUdQmCCmxyBSQ5NaK6mkBlXg0dU)
![Tela 8](https://drive.google.com/uc?id=18cnPA-ZGbK_zu5W-Lsbblj0TDSThHJal)
![Tela 9](https://drive.google.com/uc?id=1ECdKUPJUPjUprwHh6DxH2-U75sO2KsdF)


---

## 4. Modelo Estrutural  

###  Modelo de Banco de Dados/Projeto  
![Modelagem do Banco de Dados](https://drive.google.com/uc?id=19fyBB6oWR_Mdev_hAkKz6w7r0Z2HiEfb)

---

## 5. Dicionário de Dados  
### Tabela: `academic_professional_data`  
**Descrição:** Tabela para armazenar os dados profissionais do usuário  

| Coluna/Atributo | Tipo | Restrição | Descrição |
|----------------|------|------------|------------|
| id | integer | | Identificador dos dados profissionais do usuário |
| user_id | integer | | Identificador único de cada usuário |
| academic_level | varchar | | Nível acadêmico de cada usuário |
| area_of_knowledge | varchar | | Área de conhecimento de cada usuário |
| institution | varchar | | Instituição em que o usuário atua |
| employment_bond | boolean | | Se o usuário tem vínculo empregatício |
| work_regime | varchar | | Regime de trabalho que o usuário trabalha |
| position | varchar | | Posição do usuário no emprego |

### Tabela: `users`  
**Descrição:** Tabela para armazenar os dados do usuário  

| Coluna/Atributo | Tipo | Restrição | Descrição |
|----------------|------|------------|------------|
| id | integer | | Identificador único de cada usuário |
| cpf | varchar | | CPF de cada usuário |
| rg | varchar | | RG de cada usuário |
| name | varchar | | Nome de cada usuário |
| email | varchar | | Email de cada usuário |
| sex | varchar | | Gênero de cada usuário |
| date_of_birth | date | | Data de nascimento de cada usuário |
| mother_name | varchar | | Nome da mãe de cada usuário |
| father_name | varchar | | Nome do pai de cada usuário |
| password | varchar | | Senha de cada usuário |

### Tabela: `professional_addresses`  
**Descrição:** Tabela para armazenar o endereço profissional do usuário  

| Coluna/Atributo | Tipo | Restrição | Descrição |
|----------------|------|------------|------------|
| id | integer | | Identificador do local de trabalho do usuário |
| user_id | integer | | Identificador de cada usuário |
| city | varchar | | Cidade que o usuário trabalha |
| zip_code | varchar | | CEP do local de trabalho do usuário |
| street | varchar | | Rua que o usuário trabalha |
| neighborhood | varchar | | Bairro que o usuário trabalha |
| state | varchar | | Estado que o usuário trabalha |
| number | varchar | | Número do local de trabalho do usuário |

### Tabela: `residential_addresses`  
**Descrição:** Tabela para armazenar o endereço residencial do usuário  

| Coluna/Atributo | Tipo | Restrição | Descrição |
|----------------|------|------------|------------|
| id | integer | | Identificador do local de moradia do usuário |
| user_id | integer | | Identificador único do usuário |
| city | varchar | | Cidade que o usuário mora |
| zip_code | varchar | | CEP da moradia do usuário |
| street | varchar | | Rua da moradia do usuário |
| neighborhood | varchar | | Bairro da moradia do usuário |
| state | varchar | | Estado da moradia do usuário |
| number | varchar | | Número da moradia do usuário |

---

## 6. Telas do Sistema  
![Tela 1 - Dados Pessoais](https://drive.google.com/uc?id=1WlqVBzEo4qygFVM4o8caGg9vv_MVlEkT)
![Tela 2 - Endereço Residencial](https://drive.google.com/uc?id=1BzZshWeR-ecVVJBPIhKxLdwHJYnInHar)
![Tela 2.1 - Endereço Residencial Exterior](https://drive.google.com/uc?id=1oGzvdKzjE-bvat4kGceendCZKG7BNtxo)
![Tela 3 - Dados Acadêmicos e Profissionais](https://drive.google.com/uc?id=1BYA6Mh6rc7xz55lIfBk23I6SRL10GzYe)
![Tela 4 - Endereço Profissional](https://drive.google.com/uc?id=1GY02UzjTqZXDSWY9a5NraV-ljITavV8Q)
![Tela 4.1 - Endereço Profissional Exterior](https://drive.google.com/uc?id=1MnuC9_lD93TMSTAvpUr0OhnGAxScvHGq)
![Tela 5 - Confirmação dos Dados](https://drive.google.com/uc?id=18HUjIZIBT3Y44Djq8i8wbHhgdi-3cfhw)
![Tela 6 - Dados Confirmados](https://drive.google.com/uc?id=1wulEYx6sdM7jl9JD5YXn5Z_iQVzrt1Nu)
