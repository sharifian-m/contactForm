export class contactDto{
    ID:number;
    FullName:string;
    Mobile:string
    public constructor(ID:number,
        FullName: string,
        Mobile: string){
        this.ID=ID;
        this.FullName=FullName;
        this.Mobile=Mobile;
    }
    // public constructor(init?:Partial<contactDto>) {
    //     Object.assign(this, init);
    // }
    // ID:number=0;
    // FullName: string='';
    // Mobile: string='';
}