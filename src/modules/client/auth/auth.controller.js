import httpStatus from "http-status";

import AuthService from "./auth.service";

class AuthController {
  async register(req, res, next) {
    try {
      const user = await AuthService.register(req.body);
      return res.status(httpStatus.CREATED).json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }

  async getMe(req, res, next) {
    try {
      if (req.user) {
        return res.json({
          user: req.user,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const token = await AuthService.login(req.body);

      return res.status(httpStatus.OK).json({
        token,
      });
    } catch (error) {
      console.log({
        error,
      });
      next(error);
    }
  }

  async getAll(_req, res, next) {
    try {
      const users = await AuthService.getAll();
      return res.status(httpStatus.OK).json({
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  // async createPost(req, res, next) {
  //   try {
  //     const id = await PostService.createPost(req.body);
  //     return res.status(httpStatus.CREATED).json({
  //       data: id,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getAll(_req, res, next) {
  //   try {
  //     const posts = await PostService.getAll();
  //     return res.status(httpStatus.OK).json({
  //       data: posts,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getOne(req, res, next) {
  //   try {
  //     const post = await PostService.getOne(req.params.id);

  //     if (isEmpty(post)) {
  //       return next(
  //         APIError.NotFound({
  //           message: "Post not found",
  //         })
  //       );
  //     }

  //     return res.status(httpStatus.OK).json({
  //       data: post,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // async getOneBySlug(req, res, next) {
  //   try {
  //     const post = await PostService.getOneBySlug(req.params.slug);

  //     if (isEmpty(post)) {
  //       return next(
  //         APIError.NotFound({
  //           message: "Post not found",
  //         })
  //       );
  //     }

  //     return res.status(httpStatus.OK).json({
  //       data: post,
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default new AuthController();
