import React, { Component } from "react";

// tslint:disable-next-line: ordered-imports
import { TState, IFindPixelAPI, ISearchBarEvents } from "../types/PixelApi";

export default class ImagesApi extends Component<IFindPixelAPI, TState>
  implements ISearchBarEvents {
  public state: TState = {
    images: [],
    searchText: "",
    numberElement: 15,
    errorMessaGE: "",
    openImageDialog: false,
    numberOfGetImages: 0,
    imageDetails: {
      id: 0,
      tags: "",
      largeImageURL: "",
      user: "",
    },
  };
  public onSearchTextChange = async (searchText: string) => {
    this.setState({ searchText });
  };

  public handleClose = () => {
    this.setState({ openImageDialog: false });
  };

  async componentDidMount() {
    try {
      const images = await this.props.queryImagesFromPixabay(
        this.state.searchText,
        12
      );
      this.setState({ images, errorMessaGE: "" });
    } catch (error) {
      this.setState({ errorMessaGE: error, images: [] });
    }
  }
  render() {
    return (
      <div>
        {!this.state.images.length ? (
          <span aria-labelledby="img"> loading ...😂</span>
        ) : (
          this.state.images.map((item, index) => (
            <div key={item.id}>
              <span>{item.tags}</span>
              <span>{item.user}</span>
              <img
                src={item.largeImageURL}
                width="100%"
                alt={
                  item.largeImageURL.split("/")[
                    item.largeImageURL.split("/").length - 1
                  ]
                }
              />
            </div>
          ))
        )}

        {this.state.errorMessaGE && <p> {this.state.errorMessaGE}</p>}
      </div>
    );
  }
}
