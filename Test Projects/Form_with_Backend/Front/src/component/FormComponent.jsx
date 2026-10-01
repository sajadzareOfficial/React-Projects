import React from "react";

export class FormComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
        <div className="flex flex-col justify-around items-center   gap-y-2">
            <label onClick={
                event=>event.target.nextSibling.classList.remove("hidden")
                
            }
             className=' w-9/12 block bg-white/40 italic   text-center text-md  shadow-sm rounded-sm px-3 py-2 ' htmlFor={this.props.data}>{this.props.data}:</label>
            <input onBlur={event=>event.target.classList.add("hidden")} 
            className='rounded-sm hidden italic   max-h-1/2 w-2/3 px-3 py-2 ring-2 shadow-sm ring-purple-400 focus:bg-purple-200  '
            
            type="text" placeholder={this.props.data} name={this.props.data} id={this.props.data} />
        </div>) 
    }
}
// export default lableComponent