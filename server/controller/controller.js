const { User, Movie, Genre, Cast } = require("../models/index");

const {
  sequelize,
  Sequelize: { op },
} = require("../models");

class Controller {
  static async createMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.user.id;
      const {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        genreId,
        name,
        profilePict,
      } = req.body;

      const movie = await Movie.create(
        {
          title,
          slug: title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId: id,
        },
        { transaction: t }
      );

      await Cast.bulkCreate(
        name.map((n, index) => ({
          name: n,
          profilePict: profilePict[index],
          movieId: movie.id,
        })),

        { transaction: t }
      );
      await t.commit();

      res.status(201).json({ data: movie });
    } catch (error) {
      console.log(error);
      await t.rollback;
      next(error);
    }
  }

  static async editMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.params.movieId;
      const {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        genreId,
        name,
        profilePict,
      } = req.body;
      const movie = await Movie.findByPk(id, {
        include: [Cast],
        transaction: t,
      });

      await Movie.update(
        {
          title,
          slug: title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
        },
        {
          where: {
            id,
          },
          transaction: t,
        }
      );
      const casts = name.map((n, index) => ({
        name: n,
        profilePict: profilePict[index],
        movieId: movie.id,
      }));

      await Cast.destroy({ where: { movieId: movie.id } }, { transaction: t });
      await Cast.bulkCreate(casts, { transaction: t, ignoreDuplicates: true });
      await t.commit();

      res.status(201).json({ message: "Succes Edit Movie" });
    } catch (error) {
      console.log(error);
      await t.rollback;
      next(error);
    }
  }

  static async fetchMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const movie = await Movie.findAll({
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password", "phoneNumber", "address"],
            },
          },
          Cast,
          Genre,
        ],
        transaction: t,
      });
      await t.commit();
      res.status(200).json(movie);
    } catch (error) {
      await t.rollback;
      next(error);
    }
  }

  static async detailMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.params.movieId;
      const movie = await Movie.findByPk(id, {
        include: [Genre, Cast],
        transaction: t,
      });
      await t.commit();
      res.status(200).json(movie);
    } catch (error) {
      await t.rollback;
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.params.movieId;
      console.log(id);
      const movie = await Movie.destroy({
        where: {
          id,
        },
        transaction: t,
      });
      await Cast.destroy({ where: { movieId: id }, transaction: t });
      await t.commit();
      res.status(201).json({ message: "Succes Delete Movie" });
    } catch (error) {
      console.log(error);
      await t.rollback;
      next(error);
    }
  }

  static async createGenre(req, res, next) {
    try {
      const { name } = req.body;
      const genre = await Genre.create({ name });
      res.status(201).json(genre);
    } catch (error) {
      next(error);
    }
  }

  static async showGenre(req, res, next) {
    try {
      const genre = await Genre.findAll();
      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }

  static async deleteGenre(req, res, next) {
    try {
      const id = req.params.genreId;
      const genre = await Genre.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: "Succes Delete Genre" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
