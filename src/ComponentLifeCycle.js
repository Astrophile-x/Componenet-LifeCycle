import React from "react";
class ComponentLifeCycle extends React.Component{
    constructor(){
        super();
        this.state={count:0};
    }
    componentDidMount(){
        console.log("Componet Did Mount");
    }
    handleClickListener=()=>{
        this.setState( (prevState)=>{
            return{
                count:prevState.count+1,
            }
        })
    }
    componentDidUpdate(prevProp, prevState){
         console.log("prevProp", prevProp);
         console.log("Prop", this.props);
         console.log("prevState", prevState);
         console.log("this.State",this.state);
         if(prevState.count===0 && this.state.count==1){
           this.setState({count:100});
         }
         
    }
    render(){
        console.log("Render");
        return(
            <div> 
                <h1 >{this.state.count}</h1>
                <button style={style.button}
                onClick={this.handleClickListener}
                >
                     Increase 
                     </button>
            </div>
        );
    }
    
}
const style={
    button:{
        cursor:"pointer",
        height:30,
        width:70
    },
}
export default ComponentLifeCycle;
