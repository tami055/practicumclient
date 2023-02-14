export default class UserDTO{
    constructor(
        public id:number,
        public FName:string,
        public LName:string,
        public BirthDate:Date,
        public tz:string,
        public min :string,
        public HMO:string,
    ){}
    
    }