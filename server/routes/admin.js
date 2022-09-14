import AdminModel from "../models/admin.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Config from "../config/index.js";

const router = express.Router();

// router.post("/signup", async (req, res, next) => {
//   try {
//     let admin = await AdminModel.findOne({
//       username: req.body.username,
//     }).exec();
//     if (admin) {
//       return res.status(409).json({
//         message: "user already exists",
//       });
//     } else {
//       bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if (err) {
//           return res.status(500).json({
//             error: err,
//           });
//         } else {
//           const user = new AdminModel({
//             username: req.body.username,
//             password: hash,
//           });
//           user
//             .save()

//             .then((result) => {
//               console.log(result);
//               res.status(201).json({
//                 message: "User created",
//               });
//             })

//             .catch((err) => {
//               console.log(err);
//               res.status(500).json({
//                 error: err,
//               });
//             });
//         }
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.post("/signuptest", async (req, res, next) => {
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(hash);
//     }
//   });
// });

router.post("/AuthenticateUser", async (req, res) => {
  await AdminModel.findOne({ username: req.body.username })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user.username,
            },
            Config.JWT_TOKEN,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

export default router;
