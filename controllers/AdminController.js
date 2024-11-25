// export class AdminController {
//     constructor(service) {
//         this.service = service;
//     }

//     register(res, res) {
//         const {name, email, password, number, role} = req.body;

//         try {
//             const admin = this.service.register(name, email, password, number, role);
//             return {status: 200, body: admin};
//         }
//         catch(error) {
//             return {status: 400, body: {message: error.message}};
//         }
//     }

//     login(req, res) {
//         const {email, password} = req.body;

//         try {
//             const body = this.service.login(email, password);
//             return {status: 200, body: body};
//         }
//         catch(error) {
//             return {status: 400, body: {message: error.message}};
//         }
//     }
// }