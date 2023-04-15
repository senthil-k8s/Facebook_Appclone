import "./feature.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MoreVertOutlined  } from "@mui/icons-material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Feature() {
  return (
    <div className="featured">
        <div className="top">
            <div className="title">
                Total Revenue
            </div>
            <MoreVertOutlined />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sale today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transaction is processing. Last transaction is not included</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon className="icon" />
                        <div className="resultAmount">$12k</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon className="icon" />
                        <div className="resultAmount">$12k</div>
                    </div>
                </div>

                <div className="item">
                    <div className="itemTitle">Last month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon className="icon" />
                        <div className="resultAmount">$12k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
