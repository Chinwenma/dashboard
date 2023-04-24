
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./widget.scss"
export default function widgets (){
    return (
        <div className="widget">
           <div className="left">
            <span className="title">USERS</span>
            <span className="counter">273949</span>
            <span className="link">See all users</span>
           </div>
           <div className="right">
           <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
           </div>
        </div>
    )
}