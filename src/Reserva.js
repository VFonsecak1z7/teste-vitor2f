/**
 * Classe que representa uma reserva no sistema de hotel.
 * Os candidatos devem implementar a lógica de criação e gestão de reservas.
 */
class Reserva {
    /**
     * @param {number} quarto - Número do quarto reservado.
     * @param {string} data - Data da reserva no formato 'YYYY-MM-DD'.
     */
    constructor(quarto, data) {
        // TODO: Implementar o construtor para inicializar as propriedades quarto e data
        this.quarto = quarto;
        this.data = data;
    }

    /**
     * Retorna o número do quarto reservado.
     * @returns {number}
     */
    getQuarto() {
        // TODO: Implementar o método para retornar o número do quarto reservado
        return this.quarto;
    }

    /**
     * Retorna a data da reserva.
     * @returns {string}
     */
    getData() {
        // TODO: Implementar o método para retornar a data da reserva
        return this.data;
    }
}

export default Reserva;
