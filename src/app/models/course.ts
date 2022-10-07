export class Course {
    constructor(
        public courseName:string,
        public type:string,
        public cost:number,
        public medium:string,
        public trainer?:string
    ){}
}
