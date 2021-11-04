import './App.css';

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

function populationPercentage (population) {
  return Math.round((population / 7693165599) * 100)
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const PopulationChart = ({population}) => {
  const width = populationPercentage(population)
  const divWidth = { width: width + '%' } 
  return <div className="horizontal-line box" style={divWidth}></div>
}

const Population = ({ populations: { country, population } }) => {
  return (
    <div className="grid-box">
      <div className="box">{country}</div>
      <PopulationChart population={population} />
      <div className="box">{numberWithCommas(population)}</div>
    </div>
  )
}

const TenHighestPopulation = ({ populations }) => {
  const populationList = populations.map((population) => <Population populations={population} />)
  return populationList
}

function App() {
  return (
    <div className="container">
      <h1>30 Days of React</h1>
      <h2>World Population</h2>
      <p>Ten most populated countries</p>
      <div>
        <TenHighestPopulation populations={tenHighestPopulation} />
      </div>
    </div>
  );
}

export default App;
