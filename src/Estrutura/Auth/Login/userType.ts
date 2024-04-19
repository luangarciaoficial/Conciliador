export interface ResponseUsuario {
    statusCode: number;
    company: Usuario;
    message: string;
    success: boolean;
    token: string;
}

export interface FormDataLogin {
    login: string,
    password: string
}

export interface Usuario {
    id: number;
    login: string;
    email: string;
    userRole: string;
    createBy: string;
    dataExpiracao: string;
}