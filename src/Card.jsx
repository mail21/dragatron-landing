import './Card.css';

function Card({ title, price, listStatus, isPopular }) {
  const listText = [
    'Promote yourself & reach thousands of user globaly',
    'Accept Payments',
    'Only',
    'Access to manager customers health profile',
    'Verivied Profilde',
    'Access to weekly newsletters',
  ];

  return (
    <div className="card" data-testid="card">
      {isPopular ? <div className="popular">POPULAR.</div> : ''}
      <div className="card__body">
        <h3 className="text-main">{title}</h3>
        <h4>{price}</h4>
        <ul>
          {listText.map((item, index) => {
            if (listStatus[index] == 1) {
              if (index == 2) {
                return <li>{`${item} ${title}`}</li>;
              }
              return <li>{item}</li>;
            } else {
              return (
                <li key={index} className="greyed">
                  {item}
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="button">
        <div>PROCEED & PAY</div>
      </div>
    </div>
  );
}

export default Card;
