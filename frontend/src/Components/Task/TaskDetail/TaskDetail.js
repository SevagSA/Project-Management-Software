import { useParams } from "react-router-dom";
  

export default function TaskDetail() {
    let { id } = useParams();
    return (
        <div>
            
            {id}
        </div>
    )
}
