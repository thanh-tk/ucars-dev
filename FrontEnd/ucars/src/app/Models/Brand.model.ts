export class brand{
    id: number;
    status: number;
    name: string;
    description: string;
    last_update: Date
    logo: string;
    models: [];
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.status = 0;
        this.logo = '';
        this.models = [];
        this.last_update = new Date();
      }
}