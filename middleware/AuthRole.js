import {AuthUserService} from '../services/UserServices.js'

export const VerifyRole = {
    preHandler: (req, res, next) => {
        const token = req.headers.authorization?.replace(/^Bearer /, "")
        if(!token) {
            return res.status(401).json({"message": "Sessão inválida"})
        }
        
        const user = AuthUserService.verifyToken(token)
        if(!user) {
            return res.status(401).json({"message": "Não autorizado"})
        }

        req.user = user;
        next();
    }
}