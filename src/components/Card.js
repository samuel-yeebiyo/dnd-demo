import '../css/card.css'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({id, data, index}) => {
    
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided)=>(
                <div className="Card" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    This is the {id} component
                </div>
            )}
            
        </Draggable>
    )
}

export default Card
