import React from "react";
import { Header, Main, DropDown } from "./components";
import "./index.scss";

const LANGUAGES = [
  { name: "English", code: "en" },
  { name: "Japanese", code: "jp" }
];

class App extends React.Component {
  state = {
    language: LANGUAGES[0].code
  };
  onChange = e => {
    this.ListeningStateChangedEvent({ language: e.target.value });
  };

  render() {
    console.log("render");
    const { language } = this.state;
    const items = LANGUAGES.map(({ name, code }) => ({
      children: name,
      value: code
    }));
    return (
      <div className="App">
        <Header />
        <DropDown items={items} onChange={this.onChange} />
        <Main language={language} />
      </div>
    );
  }
}

export default App;
