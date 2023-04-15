import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Widget = ({type}) => {
    let data;
    let amount = 100;

    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonIcon className="icon" style={{backgroundColor:"rgba(248, 89, 128, 0.3)" ,color:"crimson"}}/>,
            };
            break;
        case "order":
            data = {
                title:"ORDER",
                isMoney:false,
                link:"View all orders",
                icon:<ShoppingCartOutlinedIcon className="icon" style={{backgroundColor:"rgba(252, 207, 0, 0.5)" ,color:"goldenrod"}}/>,
            };
            break;
        case "earning":
            data = {
                title:"EARNING",
                isMoney:true,
                link:"View net Earnings",
                icon:<MonetizationOnIcon className="icon" style={{backgroundColor:"rgba(175, 240, 150, 0.5)" ,color:"darkgreen"}}/>,
            };
            break;
        case "balance":
            data = {
                title:"BALANCE",
                isMoney:true,
                link:"View details",
                icon:<AccountBalanceWalletOutlinedIcon className="icon" style={{backgroundColor:"rgba(213, 150, 240, 0.5)" ,color:"purple"}}/>,
            };
            break;
        default:
            break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"}{amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {data.diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}
export default Widget;
