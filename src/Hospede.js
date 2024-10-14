/**
 * Classe que representa um hóspede.
 */
class Hospede {
    /**
     * @param {string} nome - Nome do hóspede.
     * @param {string} email - Email do hóspede.
     */
    constructor(nome, email) {
        // TODO: Implementar o construtor para inicializar as propriedades nome e email
        this.setNome(nome);    //Setter do nome
        this.setEmail(email);  //Setter do email
    } 

    /** 
     * Validacao e definicao do NOME do hospede.
     * @param {string} nome - Nome do hóspede.
     */
    setNome(nome){
        //Basicamente verifica se o input na varivel `nome` eh string ou esta vazia.
        if(typeof nome !== 'string' || nome.trim === ''){
            //Utilizei o metodo `trim()` para remocao dos espacos em branco
            throw new Error('NOME NAO EH VALIDO! Favor entrar com um nome que nao seja em branco')
        }

        this.nome = nome;
    }

    /** 
     * Validacao e definicao do EMAIL do hospede.
     * @param {string} email - Email do hóspede.
     */
    setEmail(email){
        //Trecho retirado do site https://mailtrap.io/blog/javascript-email-validation/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            //Testa se o padrao para email eh atendido caso retorne FALSE retorna a mensagem de erro.
            throw new Error('EMAIL NAO EH VALIDO! Favor entrar com um email valido.')
        }else{
            this.email = email;
        }
    }

    /**
     * Retorna o nome do hóspede.
     * @returns {string}
     */
    getNome() {
        // TODO: Implementar o método para retornar o nome do hóspede
        return this.nome;
    }

    /**
     * Retorna o email do hóspede.
     * @returns {string}
     */
    getEmail() {
        // TODO: Implementar o método para retornar o email do hóspede
        return this.email;
    }
}

export default Hospede;
