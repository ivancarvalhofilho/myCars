export class Usuario {
    private _id: number;
    private _email: string;
    private _senha: string;
    private _senhaConfirm: string;
   
    public get senha(): string {
        return this._senha;
    }

    public set senha(value: string) {
        this._senha = value;
    }

    public get senhaConfirm(): string {
        return this._senhaConfirm;
    }

    public set senhaConfirm(value: string) {
        this._senhaConfirm = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }
}