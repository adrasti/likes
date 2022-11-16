import { getDefaultNormalizer } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import "./card.css";
import { useContext } from "react";
import { CardContext } from './App';

function Card({card, i, activeFilter}) {
    console.log(activeFilter)
    const {dispatch, cards} = useContext(CardContext)
    const [liked, setLiked] = useState(false);
    const [display, setDisplay] = useState(true);
    useEffect(()=>{
        if(activeFilter){
            setDisplay(liked);
        } else {
            setDisplay(true)
        }
    }, [activeFilter])
    return(
    <>
        {display ? (<div className={"card " + (liked ? 'liked' : '')}>
        <div className="image">
            <img src={card.url} />
        </div>
        <div className="buttons">
            <div className="delete svg-inline" onClick={()=>{
                dispatch({type: "DELETE", id: card.id})
            }}></div>
            <div className="like svg-inline" onClick={()=>{
                setLiked(!liked);
            }}></div>
        </div>
    </div>) :<></>}
    </>
)}

export default Card;