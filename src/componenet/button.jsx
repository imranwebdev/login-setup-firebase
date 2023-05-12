import './btn.css';


const button_type = {google:"google-design",twiter:'twiter-design',}
function Button({children,buttonType,...otherprops}){



    return(<>
    <button className={`btn-container ${button_type[buttonType]}`}{...otherprops}>{children}</button>
    </>)
}
export default Button;