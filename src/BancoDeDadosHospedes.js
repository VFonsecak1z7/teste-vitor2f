/**
 * Classe que interage com o banco de dados para gerenciar hóspedes.
 * Os candidatos devem implementar a lógica de persistência de dados.
 */
//Import na biblioteca SQLite3
import sqlite3 from 'sqlite3'\
//Import da classe Hospede
import Hospede from './Hospede'

//variavel global para que se coloque o caminho do banco de dados que se deseja utilizar
const pathDB = './myDB.db'

class BancoDeDadosHospedes {
    constructor(nome, quarto) {
        // TODO: Implementar o construtor para inicializar a conexão com o banco de dados (SQLite)
        //Abre a conexao com o banco de dados
        this.db = new sqlite3.Database( pathDB, err =>{
            if(err){
                console.error('Erro ao conectar ao banco!', err.message);
            }else{
                console.log('Conectando ao banco de dados.');
                //Definida a instrucao de criacao de tabela
                const tableQuery = `
                CREATE TABLE hospede(hospedeId INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 hospedeNome TEXT NOT NULL, 
                 hospedeQuarto INTEGER NOT NULL)
                `;
                //Executa as instrucoes SQL anteriormente passadas a variavel `tableQuery`
                this.db.run(tableQuery, (err)=>{
                    if(err){
                        console.error('Erro ao criar a tabela de hóspedes! ', err.message);
                    }else{
                        console.log('Tabela de hóspedes criada com sucesso.');
                    }
                })
            }
        });
        //Inicia as propriedades nome e quarto
        this.nome = nome;
        this.quarto = quarto;
    }

    /**
     * Insere um novo hóspede no banco de dados.
     * @param {string} nome - Nome do hóspede.
     * @param {number} quarto - Número do quarto do hóspede.
     * @returns {Promise<number>} - O ID do hóspede inserido.
     */
    inserirHospede(nome, quarto) {
        // TODO: Implementar a lógica para inserir um hóspede no banco de dados
        // Retornar uma Promise que resolve com o ID do hóspede inserido

        this.nome = nome;
        this.quarto = quarto;

        return new Promise((resolve, reject)=>{
            const tableQuery = 'INSERT INTO hospedes (hospedeNome, hospedeQuarto) VALUES (?, ?)';
            //Basicamente estamos chando a query e preenchendo com os dados via metodo `this.db.run` e ja tratando caso haja erro
            this.db.run(tableQuery, [this.nome, this.quarto], function(err){
                if(err){
                    //Caso nao seja cumprida, retorna erro de insercao e sai da function
                    reject(new Error('Erro ao inserir hospede: ' + err.message));
                }else{
                    //Caso a promise seja cumprida, retorna o ID do hospede inserido.
                    resolve(this.lastID);
                }
            });
        });
    }

    /**
     * Busca um hóspede pelo ID.
     * @param {number} id - ID do hóspede.
     * @returns {Promise<Hospede>} - O hóspede encontrado.
     */
    buscarHospede(id) {
        // TODO: Implementar a lógica para buscar um hóspede no banco de dados pelo ID
        // Retornar uma Promise que resolve com um objeto Hospede ou null se não encontrado
        return new Promise((resolve, reject)=>{
            const tableQuery = 'SELECT * FROM hospedes WHERE hospedeId = ?'
            //Metodo que serve para executar instrucoes que RETORNAM DADOS
            this.db.get(tableQuery, [id], (err, row) =>{
                if(err){
                    reject(new Error('Nao foi possivel encontrar o hospede: ' + err.message));
                }else if(row){
                    const hospede = new Hospede(row.hospedeNome, 'email@dominio.com'); //Cria um novo objeto hospede na linha disponivel + email dinamico
                    resolve(hospede);
                }else{
                    resolve(null)
                }
            })
        })
    }

    /**
     * Atualiza o número do quarto de um hóspede.
     * @param {number} id - ID do hóspede.
     * @param {number} novoQuarto - Novo número do quarto.
     * @returns {Promise<void>}
     */
    atualizarQuarto(id, novoQuarto) {
        // TODO: Implementar a lógica para atualizar o número do quarto de um hóspede
        // Retornar uma Promise que resolve quando a operação estiver completa
        return new Promise((resolve, reject)=>{
            const tableQuery = 'UPDATE hospedes SET hospedeQuarto = ? WHERE hospedeId = ?';
            this.db.run(tableQuery, [novoQuarto, id], function(err){
                if(err){
                    reject(new Error('Erro na atualizacao do quarto' + err.message));
                }else{
                    console.log('OPERACAO CONCLUIDA...');
                    resolve();
                }
            })
        })
    }

    /* 
     *Metodo para fechar a conexao com o Banco de Dados
     *Importante para liberar recusos, servindo como um `destructor`
     */
    closeDB(){
        //Metodo da propria biblioteca sqlite, serve para fechar a conexao.
        this.db.close((err)=>{
            if(err){
                console.error(err.message);
            }else{
                console.log('Conexao com o banco de dados esta encerrada');
            }
        })
    }

}

export default BancoDeDadosHospedes
