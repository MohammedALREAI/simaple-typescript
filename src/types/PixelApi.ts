export type IPixelApiImage={
     id:number,
     tags:string,
     largeImageUrl:string,
     user:string}
     export interface IPixelAPI{
          queryImagesFromPixel(searchText: string, numberTagsImage: number): Promise<IPixelApiImage[]>

     }
