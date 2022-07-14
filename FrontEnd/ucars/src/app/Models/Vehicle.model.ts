export class vehicle{
    id: number;
    name: string;
    description: string;
    last_update: Date;
    vehicle_cond: number;
    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.last_update = new Date();
        this.vehicle_cond= 0;
      }
}