import arrow from './arrow.svg';
import Card from './Card.jsx';
import './App.css';

function App() {
  const mockData = [
    {
      title: 'ALL ACCESS MEMBERSHIP',
      price: '$299/Month',
      listStatus: ['1', '1', '1', '1', '1', '1'],
    },
    {
      title: 'IN PERSON TRAINING MEMBERSHIP',
      price: '$199/Month',
      listStatus: ['1', '1', '1', '1', '0', '0'],
    },
    {
      title: 'Virtual Training',
      price: '$99/Month',
      listStatus: ['1', '1', '1', '1', '0', '0'],
    },
  ];
  return (
    <div className="App">
      <header>
        <img src={arrow} className="App-logo" alt="logo" />
        <h2>Dragatron.</h2>
      </header>

      <main>
        <div className="description">
          <h1>
            SIGN UP AS A <span className="text-orange">PROFESIONAL</span>
          </h1>
          <h4>
            <span className="text-orange">STEP 3/4</span> SELECT TRAINER SUBSCRIPTION
          </h4>
          <h5>
            With 3 Types of memberships,
            <span className="text-orange">
              Discover the membership which fits your personal needs
            </span>
          </h5>
        </div>

        <div className="card-column">
          <Card
            isPopular={false}
            price={mockData[0].price}
            listStatus={mockData[0].listStatus}
            title={mockData[0].title}
          />
          <Card
            isPopular={true}
            price={mockData[1].price}
            listStatus={mockData[1].listStatus}
            title={mockData[1].title}
          />
          <Card
            isPopular={false}
            price={mockData[2].price}
            listStatus={mockData[2].listStatus}
            title={mockData[2].title}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
