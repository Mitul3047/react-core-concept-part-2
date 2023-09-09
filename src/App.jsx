import './App.css'
import Counter from './count'
import  Team  from './team'
import User from './user'
function App() {

  function handleClick() {
    alert('Button Clicked')
  }
  const handleClicked2 = () => {
    alert('button 2 Clicked')
  }

  // type 4
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concept 2</h3>

      <Team></Team>
<User></User>
      <Counter></Counter>

      {/* type1 */}
      <button onClick={handleClick
      }>Click me</button>
      {/* type 2 */}
      <button onClick={handleClicked2}>Clicked 2</button>
      {/* type 3 */}
      <button onClick={() => { alert('Button 3 Clicked') }}>Clicked 3</button>
      {/* type 4 */}
      <button onClick={() => addToFive(3)}>Clicked 4</button>
    </>
  )
}


export default App
