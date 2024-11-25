import { userAuthService } from '../routes/Routes.js';

export const VerifyRole = {
    preHandler: (req, res, next) => {
        const token = req.headers.authorization?.replace(/^Bearer /, "")
        if (!token) {
            return res.status(401).json({ "message": "Sessão inválida" })
        }

        try {
            const user = userAuthService.verifyToken(token)
            if (user.role?.toLowerCase() !== 'admin') {
                return res.status(401).json({ "message": "Não autorizado" })
            }

            req.user = user;
            next();
        }
        catch(error) {
            return res.status(401).json({message: "Sessão inválida"});
        }
    }
}