// Esse arquivo foi criado para fazer alterações em umatabela já existente. Pensa nessas migrations como uma linha do tempo
// uma migratins criada depois não acessa uma migration criada antes

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // tabela que quero criar a caluna
      'avatar_id', // coluna que vou criar
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE', // caso altere o aquivo o cascade garante que ocorra uma att no avatar_id
        onDelete: 'SET NULL', // caso delete, coloca o valor como nulo
        allowNull: true,
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
