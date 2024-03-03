import React from 'react';
import './CardBottom.css';

function CardBotton({name, image, upSubscribers, followers, colorUpDown, downUp }) {
    const UpDonw = { color: colorUpDown }

    return( 
        <section className='card-bottom'>
            <div className='topo'>
                <h4>{name}</h4>
                <img src={image} alt={image} />
            </div>
            <div className='rodape-bottom'>
                <h5>{followers}</h5>
                <h6 style={UpDonw}>{downUp}{upSubscribers}</h6>
            </div>
        </section>
    )
};

export default CardBotton;
