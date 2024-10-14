/**
 * Classe que gerencia a fila de espera do hotel.
 * Os candidatos devem implementar a lógica de gerenciamento da fila.
 */

class FilaDeEspera {
    constructor() {
        // TODO: Implementar o construtor para inicializar a fila de hóspedes (array vazio)
        this.waitLine = [];
    }

    /**
     * Adiciona um hóspede à fila de espera.
     * @param {Hospede} hospede - O hóspede a ser adicionado.
     */
    adicionar(hospede) {
        // TODO: Implementar a lógica para adicionar o hóspede à fila
        // Chamei o metodo `.push()` a qual empurra o elemento desejado, 
        // que no caso eh nosso objeto hospede para o final da fila de espera
        this.waitLine.push(hospede);
        console.log('Hospede adicionado a fila');
    }

    /**
     * Remove e retorna o primeiro hóspede da fila.
     * @returns {Hospede|string} - O hóspede removido ou uma mensagem se a fila estiver vazia.
     */
    atender() {
        // TODO: Implementar a lógica para remover e retornar o primeiro hóspede da fila
        // Se a fila estiver vazia, retornar a mensagem: 'Nenhum hóspede na fila de espera'
        if(!this.waitLine.estaVazia()){
            throw new Error('Nenhum hóspede na fila de espera')
        }else{
            const hospede = this.waitLine.shift(); //Remove e retorna o primeiro hóspede
            console.log('Hospede atendido');
            return hospede;
        }
    }

    /**
     * Retorna o próximo hóspede da fila (sem removê-lo).
     * @returns {Hospede|string} - O próximo hóspede ou uma mensagem se a fila estiver vazia.
     */
    proximo() {
        // TODO: Implementar a lógica para retornar o próximo hóspede sem removê-lo da fila
        // Se a fila estiver vazia, retornar a mensagem: 'Nenhum hóspede na fila'
        if(this.estaVazia()){
            throw new Error('Nenhum hóspede na fila de espera')
        }else{
            return this.waitLine[0] //Retorna o primeiro sem remover
        }
    }

    /**
     * Verifica se a fila está vazia.
     * @returns {boolean} - `true` se a fila estiver vazia, `false` caso contrário.
     */
    estaVazia() {
        // TODO: Implementar a lógica para verificar se a fila está vaziar
        return this.waitLine.length === 0;
    }
}

export default FilaDeEspera;
