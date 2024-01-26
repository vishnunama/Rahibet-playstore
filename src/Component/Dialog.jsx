import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Copytext from './Copytext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div  onClick={handleClickOpen}>
        <svg width={24} height={24} viewBox="0 0 24 24" className="f70z8e">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z">
                                </path>
                              </svg>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            <div style={{display:"flex",gap:"15px"}}>
            <img style={{width:"50px"}} src="WhatsApp Image 2024-01-25 at 15.29.59_212f1dfa.jpg" alt="" />
            <div><h5 className="ksLHF">Rahi Bet</h5><div style={{color:"#5F6368",fontSize:"14px"}} className="cYHJbc">Share this app</div></div>

            {/* <p style={{fontWeight:"bold", fontSize:"18px"}}>Rahi Bet</p>
            <p >Share this app</p> */}
            
            </div>
           
            
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
       <div style={{margin:"0px 10px"}} >
        <a href="https://www.facebook.com/profile.php?id=61554742063668" target="_blank"><svg style={{marginRight:"10px"}} width="60" height="60" viewBox="0 0 60 60"><g fill="none" fill-rule="evenodd"><path d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z" fill="#3B5998" fill-rule="nonzero"></path><path d="M25.7305108 45h5.4583577V30.0073333h4.0947673l.8098295-4.6846666h-4.9045968V21.928c0-1.0943333.7076019-2.2433333 1.7188899-2.2433333h2.7874519V15h-3.4161354v.021c-5.3451414.194-6.4433395 3.2896667-6.5385744 6.5413333h-.0099897v3.7603334H23v4.6846666h2.7305108V45z" fill="#FFF"></path></g></svg></a>
        
      <a href="https://api.whatsapp.com/send/?phone=%2B918619811154&text&type=phone_number&app_abse" target="_blank">  <svg style={{marginRight:"10px"}} width="60" height="60" viewBox="0 0 60 60"><g fill="none" fill-rule="evenodd"><circle cx="30" cy="30" r="30" fill="#25D366"></circle><path d="M39.7746 19.3513C37.0512 16.5467 33.42 15 29.5578 15C21.6022 15 15.1155 21.6629 15.1155 29.8725C15.1155 32.4901 15.7758 35.0567 17.0467 37.3003L15 45L22.6585 42.9263C24.7712 44.1161 27.148 44.728 29.5578 44.728C37.5134 44.728 44 38.0652 44 29.8555C44 25.8952 42.498 22.1558 39.7746 19.3513ZM29.5578 42.2295C27.3956 42.2295 25.2829 41.6346 23.4508 40.5127L23.0051 40.2408L18.4661 41.4646L19.671 36.9093L19.3904 36.4334C18.1855 34.4618 17.5583 32.1841 17.5583 29.8555C17.5583 23.0397 22.9556 17.4986 29.5743 17.4986C32.7763 17.4986 35.7968 18.7904 38.0581 21.119C40.3193 23.4476 41.5737 26.5581 41.5737 29.8555C41.5572 36.6884 36.1764 42.2295 29.5578 42.2295ZM36.1434 32.966C35.7803 32.779 34.0142 31.8782 33.6841 31.7592C33.354 31.6402 33.1064 31.5722 32.8754 31.9462C32.6278 32.3201 31.9511 33.153 31.7365 33.4079C31.5219 33.6629 31.3238 33.6799 30.9607 33.4929C30.5976 33.306 29.4422 32.915 28.0558 31.6572C26.9829 30.6714 26.2567 29.4476 26.0421 29.0907C25.8275 28.7167 26.0256 28.5127 26.2072 28.3258C26.3722 28.1558 26.5703 27.8839 26.7518 27.6799C26.9334 27.4589 26.9994 27.3059 27.115 27.068C27.2305 26.813 27.181 26.6091 27.082 26.4221C26.9994 26.2351 26.2732 24.3994 25.9761 23.6686C25.679 22.9377 25.3819 23.0397 25.1673 23.0227C24.9528 23.0057 24.7217 23.0057 24.4741 23.0057C24.2265 23.0057 23.8469 23.0907 23.5168 23.4646C23.1867 23.8385 22.2459 24.7394 22.2459 26.5581C22.2459 28.3938 23.5333 30.1445 23.7149 30.3994C23.8964 30.6544 26.2567 34.3938 29.8714 36.0085C30.7297 36.3994 31.4064 36.6204 31.9345 36.7904C32.7928 37.0793 33.5851 37.0283 34.2123 36.9433C34.9055 36.8414 36.3415 36.0425 36.6551 35.1756C36.9522 34.3088 36.9522 33.5609 36.8697 33.4079C36.7541 33.255 36.5065 33.153 36.1434 32.966Z" fill="white"></path></g></svg> </a>
       <a href="mailto:rahibet74@gmail.com" target="_blank"> <svg style={{marginRight:"10px"}}  width="60" height="60" viewBox="0 0 60 60"><g fill-rule="nonzero" fill="none"><path d="M28.4863253 59.9692983c-6.6364044-.569063-11.5630204-2.3269561-16.3219736-5.8239327C4.44376366 48.4721168 3e-7 39.6467924 3e-7 29.9869344c0-14.8753747 10.506778-27.18854591 25.2744118-29.61975392 6.0281072-.9924119 12.7038532.04926445 18.2879399 2.85362966C57.1386273 10.0389054 63.3436516 25.7618627 58.2050229 40.3239688 54.677067 50.3216743 45.4153135 57.9417536 34.81395 59.5689067c-2.0856252.3201125-5.0651487.5086456-6.3276247.4003916z" fill="#888"></path><path d="M40.531502 19.160814h-22c-1.74 0-2.986 1.2375-3 3v16c0 1.7625 1.26 3 3 3h22c1.74 0 3-1.2375 3-3v-16c0-1.7625-1.26-3-3-3zm0 6l-11 7-11-7v-3l11 7 11-7v3z" fill="#FFF"></path></g></svg> </a>
       </div>

        </DialogContent>
        
      </BootstrapDialog>
    </React.Fragment>
  );
}


