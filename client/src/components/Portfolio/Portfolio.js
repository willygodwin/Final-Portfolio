import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import "./style.css";
import PortfolioImage from '../PortfolioImage/PortfolioImage';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "none",
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

 

   export default function Portfolio(props) {
    const classes = useStyles();
    const tileData = props.tileData()
    
    const data = [
        {
            title: 'Project 3 - To Be Revealed',
            imageSrc: "/assets/images/Chocolate-Rainbow-Cupcake.svg",
            width: '25%',
            height: '25%', 
            top: '30%',
            right: '38%',
            borderRadius: ''

        }, 
        {
            title: 'Project 2 - Jiffy',
            imageSrc: "/assets/images/jiffy-6.png",
            width: '15%',
            height: '15%', 
            top: '10%',
            right: '23%',
            borderRadius: ''

        }, 
        {
            title: 'Project 1 - Recitbits',
            imageSrc: "/assets/images/recibits.jpeg",
            width: '15%',
            height: '15%', 
            top: '60%',
            right: '63%',
            borderRadius: '100%'

        }, 
        {
            title: 'Note Taker',
            imageSrc: "/assets/images/postit.png",
            width: '50px',
            height: '50px', 
            top: '10%',
            right: '63%',
            borderRadius: ''

        }, 
        {
            title: 'Daily Planner',
            imageSrc: "/assets/images/clock.png",
            width: '50px',
            height: '50px', 
            top: '20%',
            right: '58%',
            borderRadius: ''

        }, 
        {
            title: 'Coding Quiz',
            imageSrc: "/assets/images/nerd.png",
            width: '50px',
            height: '50px', 
            top: '22%',
            right: '65%',
            borderRadius: ''

        }, 
        {
            title: 'Eat-Da-Burger',
            imageSrc: "/assets/images/burgers.png",
            width: '50px',
            height: '50px', 
            top: '50%',
            right: '33%',
            borderRadius: ''

        }, 
        {
            title: 'Weather Dashboard',
            imageSrc: "/assets/images/sun.png",
            width: '50px',
            height: '50px', 
            top: '60%',
            right: '28%',
            borderRadius: ''

        }, 
        {
            title: 'Password Generator',
            imageSrc: "/assets/images/lock.jpg",
            width: '50px',
            height: '50px', 
            top: '62%',
            right: '35%',
            borderRadius: ''

        }, 
    ]

    return (
        <div className="portfolio">
            <h1>Projects </h1>

            {data.map(data => <PortfolioImage title={data.title} src={data.imageSrc} width={data.width} height={data.height} right={data.right} top={data.top}></PortfolioImage>)}
            
            {/* <div className='project-div' style={{display:'flex', justifyContent:'center' ,width:"25%", height:'25%', position:'absolute', top:'30%', right:"38%"}} >
                <a href='/'>
                <img  style={{width:"100%", height:'100%'}} src="/assets/images/Chocolate-Rainbow-Cupcake.svg"></img>
                <div className="tooltipnavtext">Project 3 - To Be Revealed</div>
                </a>
            </div>
            <div className='project-div' style={{width:"15%", height:'15%', position:'absolute', top:'10%', right:"23%"}}>
                <a href='/'>
                <img  style={{width:"100%", height:'100%'}} src="/assets/images/jiffy-6.png"></img>
                <div className="tooltipnavtext">Project 2 - Jiffy</div>
                </a>
            </div>
            <div >
                <a href='/'>
                <img  style={{width:"15%", height:'15%', position:'absolute', top:'60%', right:"63%", borderRadius:'100%'}} src="/assets/images/recibits.jpeg"></img>
                </a>
            </div>
            <div className='project-div' style={{width:"50px", height:'50px', position:'absolute', top:'10%', right:"63%"}}>
                <a href='/'>
                <img style={{width:"100%", height:'100%'}} src="/assets/images/postit.png"></img>
                <div className="tooltipnavtext">Project 2 - Jiffy</div>
                </a>
            </div>
            <div >
                <a href='/'>
                <img  style={{width:"50px", height:'50px', position:'absolute', top:'20%', right:"58%"}} src="/assets/images/clock.png"></img>
                </a>
            </div>
            <div >
                <a href='/'>
                <img  style={{width:"50px", height:'50px', position:'absolute', top:'22%', right:"65%"}} src="/assets/images/nerd.png"></img>
                </a>
            </div>
            <div >
                <a href='/'>
                <img  style={{width:"50px", height:'50px', position:'absolute', top:'50%', right:"33%"}} src="/assets/images/burgers.png"></img>
                </a>
            </div>
            <div >
                <a href='/'>
                <img  style={{width:"50px", height:'50px', position:'absolute', top:'60%', right:"28%"}} src="/assets/images/sun.png"></img>
                </a>
            </div>
            <div >
                <a href='/'>
                <img  style={{width:"50px", height:'50px', position:'absolute', top:'62%', right:"35%"}} src="/assets/images/lock.jpg"></img>
                </a>
            </div> */}

        </div>

    //   <div className={classes.root} style={{backgroundColor:'none'}}>
    //     <GridList cellHeight={160} className={classes.gridList} cols={3}>
    //     <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    //       <ListSubheader component="div">{props.title}</ListSubheader>
    //     </GridListTile>
    //       {tileData.map((tile) => (
    //         <GridListTile key={tile.img} cols={tile.cols || 1}>
    //           <img src={tile.img} alt={tile.title} />
    //           <GridListTileBar
    //           title={tile.title}
              
    //           actionIcon={
    //             <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
    //               <InfoIcon />
    //             </IconButton>
    //           }
    //         />
    //         </GridListTile>
    //       ))}
    //     </GridList>
    //   </div>
    );
  }