import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.435</span>
          <span className="featuredMoneyRate">
            -12.23 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="fuaturedSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$23.453</span>
          <span className="featuredMoneyRate">
            +9.23 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="fuaturedSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.435</span>
          <span className="featuredMoneyRate">
            -12.23 <ArrowDownward className="featuredIcon  negative" />
          </span>
        </div>
        <span className="fuaturedSub">Compared to last month</span>
      </div>
    </div>
  );
}
