const Sequelize = require("sequelize");

module.exports = class UserCoupon extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        issuanceDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        extinctionDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "UserCoupon",
        tableName: "usercoupons",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.UserCoupon.belongsTo(db.Coupon, {
      foreignKey: "couponId",
      targetKey: "id",
    });
    db.UserCoupon.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
  }
};
