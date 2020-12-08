import {connect} from 'react-redux'
import {dec, inc} from "../js/actions";

const Button=({title,increment,decrement})=>{
    const handleClick=()=>{
        if((title="+")){
            increment(10)
        }else{
            decrement(5)
        }
            };

    return(
        <button  onClick={()=>handleClick()}>{title}</button>
    )
}
const mapDispatchToProps=(dispatch)=>({
    increment: (x)=>dispatch(inc(x)),
    decrement: (x)=>dispatch(dec(x))

});
export default connect(null,mapDispatchToProps)(Button)
