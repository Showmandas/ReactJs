import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons-material/Add';

const IncrDecr = () => {
    const [num,setNum]=useState(0);
  return (
      
    <div>
        <p>{num}</p>
        <div>
            <Button>
                <AddIcon />
            </Button>
        </div>
    </div>
  )
}

export default IncrDecr;