import { useState } from 'react'
import Card from './components/Card';
import './css/App.css';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'



function App() {

  const [order, setOrder] = useState([
    {
        id:"c1",
        data:"This a card"
    },
    {
        id:"c2",
        data:"This a card"
    },
    {
        id:"c3",
        data:"This a card"
    }
  ])

  return (

      <div className="App">
        <h2>Cards</h2>
        <DragDropContext>
          {/*Add direction to droppable and change flex-direction  to make it into a horizontal list*/}
          <Droppable droppableId="cards">
          {
            (provided)=>(
              <div className="card-list" {...provided.droppableProps} ref={provided.innerRef}>
                {
                    order.map((item, idx)=>(
                      <Card id={item.id} data={item.data} index={idx}/>
                    ))
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
        </DragDropContext>
       
      </div>

  );
}

export default App;
