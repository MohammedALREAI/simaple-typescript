export type TPixabayImage = {
  id: number;
  tags: string;
  largeImageURL: string;
  user: string;
};
export interface IFindPixelAPI {
  queryImagesFromPixabay(
    searchText: string,
    numberofImagesToGet: number
  ): Promise<TPixabayImage[]>;
}

export type TPixabayFinderState = {
  images: TPixabayImage[];
  errorMessage: string;
  //more fields come here leter
  searchText: string;
};
export type TPixabaFinderProps = {
  pixabayApi: IFindPixelAPI;
};

export interface ISearchBarEvents {
  onSearchTextChange(searchText: string): void;
}
export type TSearchBarProps = {
  searchText: string;
};
export type TState = {
  images: TPixabayImage[];
  searchText: string;
  numberElement: number;
  errorMessaGE: string;
  numberOfGetImages: number;
  openImageDialog: boolean;
  imageDetails: TPixabayImage;
};
