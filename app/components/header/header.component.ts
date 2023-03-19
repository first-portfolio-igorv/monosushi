import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { getDownloadURL, ref, Storage, uploadBytesResumable} from '@angular/fire/storage'
import { ICategoryResponse } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public categoryForm:any;
  public categoryList!:Array<ICategoryResponse>;
  public smalCategoryList:any=[]
  public menuLaptop=false;
  public menuMobile=false;
  public rotateLine=false;
  constructor(
    private categoryServise:CategoryService,
    private storage: Storage
  ) { }
  menuActive(){
    this.menuMobile=!this.menuMobile;
    this.rotateLine=!this.rotateLine;
  }
  menuToggle(){
    this.menuLaptop=!this.menuLaptop;
    this.rotateLine=!this.rotateLine;
  }
  async uploadFile(folder: string, name:string, file: File):Promise<string>{
    const path =`${folder}/${name}`;
    let storageRef = ref(this.storage, path);
    let task = uploadBytesResumable(storageRef, file);
    await task;
    let url =getDownloadURL(storageRef);
    console.log(url)
    return Promise.resolve(url);
  }
  upload(event:any){
    let file = event.target.files[0];
    this.uploadFile('category-images', file.name, file)
    .then(data => {
      this.categoryForm.patchValue({
        imagePath: data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  valueByControl(control: string): string {
    return this.categoryForm.get(control)?.value;
  }
  loadCategory(){
    this.categoryServise.getAll().subscribe(data =>{
      this.categoryList=data;
      let i=0;
      for(let info of this.categoryList){
        if(i<4){
          i++;
          this.smalCategoryList.push(info)
        }
      }
    })
  }
  ngOnInit(): void {
    this.loadCategory()
  }

}
