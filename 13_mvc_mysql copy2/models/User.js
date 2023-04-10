// TODO: User 모델 정의

const User = function (Sequelize, DataTypes) {
  // create table user (
  //   id int not null primary key auto_increment,
  //   userid varchar(20) not null,
  //   name varchar(10) not null,
  //   pw varchar(20) not null
  // );

  const model = Sequelize.define(
    "user",
    {
      id: {
        // id int not null primary key auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        authIncrement: true,
      },
      userid: {
        // userid varchar(20) not null,
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        // name varchar(10) not null,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        // pw varchar(20) not null
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    { tableName: "user", freezeTableNmae: true, allowNull: false }
  );

  return model;
};

module.exports = User;
