export class Recipe {
    name!:String;
    description!:String;
    imgPath!:String;
    constructor(name:String,desc:String,imgPath:String){
        this.name=name;
        this.description=desc;
        this.imgPath=imgPath;
    }
}
