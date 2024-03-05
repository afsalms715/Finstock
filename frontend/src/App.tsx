import Card from './components/Card/Card.tsx'
import './App.css'
import CardList from './components/CardList/CardList.tsx'
import SearchBox from './components/Search/SearchBox.tsx'
import { SearchCompony } from './api.tsx';

function App() {
console.log(SearchCompony("tsla"));
  return (
    <div>
    <SearchBox/>
     <CardList/>
    </div>
  )
}

export default App
