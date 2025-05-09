// // backend/middlewares/cors.js
// import Cors from 'cors';

// export const cors = Cors({
//   origin: "http://localhost:3000", // Change in production
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type"],
//   credentials: true,
// });

// export default function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }
// import Cors from 'cors';

// export const cors = Cors({
//   origin: ["http://localhost:3000", "http://localhost:3002"],  // Allow these origins
//   methods: ["GET", "POST", "OPTIONS"],  // Allow these methods
//   allowedHeaders: ["Content-Type"],  // Allow these headers
//   credentials: true,  // Allow credentials (cookies, authorization headers)
// });

// export default function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }



// import Cors from "cors";

// // Allow requests from both the frontend and admin panel
// const cors = Cors({
//   origin: ["http://localhost:3000", "http://localhost:3002"],
//   methods: ["GET", "POST", "OPTIONS"],
//   allowedHeaders: ["Content-Type"],
//   credentials: true,
// });

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }



import Cors from "cors";

// Allow requests from both the frontend and admin panel
const cors = Cors({
  origin: ["http://localhost:3000", "http://localhost:3002"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Export both cors and runMiddleware
export { cors, runMiddleware };