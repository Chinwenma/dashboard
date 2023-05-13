
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./widget.scss"
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import  PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import  ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import   MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

 

export default function widgets({ type }) {
    let data;
    //for now
    const amount =100
    const diff =20
    switch (type)
    {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: <PersonOutlinedIcon className='icon' />,

            };
            break;
        case "order":
            data = {
                title: "USERS",
                isMoney: false,
                link: "view all orders",
                icon: (<ShoppingCartOutlinedIcon className='icon' />),

            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view net cash",
                icon: < MonetizationOnOutlinedIcon className='icon' />,

            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "view balance",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' />,

            };
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
             {data.icon}
            </div>
        </div>
    );
};