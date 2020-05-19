import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  ISearchBarEvents,
  TPixabaFinderProps,
  TPixabayFinderState,
} from "./types/PixelApi";

import { Header as HeaderApp } from "./Component/Header";
import { SearchBar } from "./Component/serchBar";
import Container from "@material-ui/core/Container";

class App extends React.Component<TPixabaFinderProps, TPixabayFinderState>
  implements ISearchBarEvents {
  public state: TPixabayFinderState = {
    images: [],
    errorMessage: "",
    searchText: "",
  };
  async componentDidMount() {
    await this.onSearchTextChange("dogs");
  }
  public onSearchTextChange = async (searchText: string) => {
    this.setState({ searchText });
    const images = await this.props.pixabayApi.queryImagesFromPixabay(
      searchText,
      15
    );
    this.setState({ images, errorMessage: "" });
  };
  render() {
    return (
      <>
        <HeaderApp />

        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
        />
        {!this.state.images.length && (
          <Container maxWidth="xs">
            <CircularProgress
              size="2rem"
              color="inherit"
              disableShrink={true}
              variant="indeterminate"
            />
            <br />
            Loading Images...
          </Container>
        )}
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.images.map((i) => {
          return (
            <div key={i.id}>
              {i.tags} by {i.user} <img src={i.largeImageURL} width="100%" />
            </div>
          );
        })}
        <Container>
          <footer>
            <div className="footer_logo">
              Find Image 2020.All rights reserved.
            </div>
          </footer>
        </Container>
      </>
    );
  }
}
export default App;
