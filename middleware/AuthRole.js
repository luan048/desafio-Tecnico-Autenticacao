import {AuthUserService} from '../services/UserServices.js'
// import {AdminService} from '../services/AdminServices.js'

export const VerifyRole = {
    preHandler: (req, res, next) => {
        const token = req.headers.authorization?.replace(/^Bearer /, "")
        if(!token) {
            return res.status(401).json({"message": "Sessão inválida"})
        }
        
        const user = AuthUserService.verifyToken(token)
        if(user.role?.toLowerCase() !== 'admin') {
            return res.status(401).json({"message": "Não autorizado"})
        }

        req.user = user;
        next();
    }
}

// export const VerifyRoleAdmin = {
//     preHandler: (req, res, next) => {
//         const token = req.headers.authorization?.replace(/^Bearer /, "")
//         if(!token) {
//             return res.status(401).json({"message": "Sessão inválida"})
//         }

//         const admin = AdminService.verify(token)
//         if(!admin) {
//             return res.status(401).json({"message": "Não autorizado"})
//         }

//         req.admin = admin;
//         next();
//     }
// }