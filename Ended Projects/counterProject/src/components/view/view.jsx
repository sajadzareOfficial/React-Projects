import React from "react";
export class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  plusOne__Handler() {
    this.setState(prevState => {

      return { counter: prevState.counter + 1 };
    });
  }
  minusOne__Handler() {
    this.setState(prevState => {
      if(prevState.counter<=0){
        return { counter: prevState.counter };
      }
        return { counter: prevState.counter - 1 };
    });
  }
  render() {
    return (
      <div className="size-1/4 min-h-[200px] ring bg-pink-300 rounded-sm ring-pink-300 shadow-xl flex flex-col  items-center justify-around">
        <div id="State-Number" className="italic text-3xl text-gray-200">
          {this.state.counter}
        </div>
        <div className="w-full flex items-center justify-around">
          <div
            id="plusOne__Btn"
            onClick={this.plusOne__Handler.bind(this)}
            className=" ring-2  w-1/3 self-center  ring-blue-400   text-center text-3xl    bg-blue-400    rounded-sm "
          >
            +
          </div>
          <div
            id="minusOne__Btn"
            onClick={this.minusOne__Handler.bind(this)}
            className=" ring-2 w-1/3 self-center ring-red-400 text-center  text-3xl   bg-red-400    rounded-sm "
          >
            -
          </div>
        </div>
      </div>
    );
  }
}
