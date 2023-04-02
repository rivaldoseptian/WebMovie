"use strict";
const { Model } = require("sequelize");
const slugify = require("slugify");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Movie.belongsTo(models.Genre, {
        foreignKey: "genreId",
      });
      Movie.hasMany(models.Cast, {
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title Required",
          },
          notEmpty: {
            msg: "Title Required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "slug Required",
          },
          notEmpty: {
            msg: "slug Required",
          },
        },
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Synopsis Required",
          },
          notEmpty: {
            msg: "Synopsis Required",
          },
        },
      },
      trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "TrailerUrl Required",
          },
          notEmpty: {
            msg: "TrailerUrl Required",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image Required",
          },
          notEmpty: {
            msg: "Image Required",
          },
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image Required",
          },
          notEmpty: {
            msg: "Image Required",
          },
        },
      },
      genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );

  Movie.beforeCreate((movie, options) => {
    movie.slug = slugify(movie.title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  });
  return Movie;
};
