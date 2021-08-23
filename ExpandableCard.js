import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import "./ExpandableCard.css";


function ExpandableCard(props) {

    const [expanded, setExpanded]  = useState(false);

    const mystyle = {
        backgroundColor: props.color
    };
 
    return (
            <div style = {mystyle} className={expanded ? "Expanded" : "Reduced"}>

                <h3 className="titleFont">{props.title}</h3>
                <span className="titleHeader">{props.header}</span>

                <div className="pContainer">
                    <p>{props.paragraph}</p>
                    <p className={expanded ? "" : "hidden"}>{props.hparagraph}</p>
                </div>

                {props.img && expanded ? <br/> : null } 
                <img className="projectImg" src={props.img} alt=''></img>
                {props.img && expanded ? <br/> : null } 


                {props.himg && expanded ? <br/> : null } 
                <img className={expanded ? "projectImg" : "hidden"} src={props.himg} alt=""></img>
                {props.himg && expanded  ? <br/> : null } 


                <div className=".pContainer">
                    <p className={expanded ? "" : "hidden"}>{props.footer}</p>
                </div>

                <div className="linkContainer">
                    <a href= {props.link1} className={expanded ? "link" : "hidden"}>{props.linkName1}</a>
                    <a href= {props.link} className={expanded ? "link" : "hidden"}>{props.linkName}</a>
                    <a href= {props.link2} className={expanded ? "link" : "hidden"}>{props.linkName2}</a>
                </div>

                <div className="infIconContainer">
                    {props.button=="hidden"? "" :
                        <InfoIcon className="InfoIcon" onClick={()=>{setExpanded(!expanded)}}/>
                    }
                </div>
            </div>   
    );
}
export default ExpandableCard;
