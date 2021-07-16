import './WidgetLg.css';

export default function WidgetSm() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTh">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://miro.medium.com/max/1313/0*Zw1ZfCk0svcXVQXg.jpg"
                alt="user"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Vitalii Shuplat</span>
            </td>
            <td className="widgetLgDate">30 Mar 2021</td>
            <td className="widgetLgAmount">$122.44</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://miro.medium.com/max/1313/0*Zw1ZfCk0svcXVQXg.jpg"
                alt="user"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Vitalii Shuplat</span>
            </td>
            <td className="widgetLgDate">30 Mar 2021</td>
            <td className="widgetLgAmount">$122.44</td>
            <td className="widgetLgStatus">
              <Button type="Declained" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://miro.medium.com/max/1313/0*Zw1ZfCk0svcXVQXg.jpg"
                alt="user"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Vitalii Shuplat</span>
            </td>
            <td className="widgetLgDate">30 Mar 2021</td>
            <td className="widgetLgAmount">$122.44</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://miro.medium.com/max/1313/0*Zw1ZfCk0svcXVQXg.jpg"
                alt="user"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Vitalii Shuplat</span>
            </td>
            <td className="widgetLgDate">30 Mar 2021</td>
            <td className="widgetLgAmount">$122.44</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
