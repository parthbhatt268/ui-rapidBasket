import React, {useState, useEffect} from 'react'
import loading from './loading.gif'
import './Loading.css'
import Backdrop from '@mui/material/Backdrop';

function Loading(props) {
  const [open, setOpen] = React.useState(false); 

  useEffect(()=>{
    setOpen(props.open)
  },[props.open])


  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className='loadingBase'>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open} //set this to true to see loading
          onClick={handleClose}
        >
          <img src={loading} alt="my-gif" />
        </Backdrop>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    savedDish: state.savedDish,
    open: state.loading,
  };
};

const mapDispatchToProps = {

};


export default connect(mapStateToProps, mapDispatchToProps)(Loading)