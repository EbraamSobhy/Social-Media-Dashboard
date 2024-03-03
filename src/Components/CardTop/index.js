import React from 'react';
import './CardTop.css';

function CardTop ({ number, image, upSubscribers, social, followers, color, colorUpDonw, downUp }) {
    const corDaBorda = { borderColor: color }
    const UpDonw = { color: colorUpDonw }

    return(
        <section className='card-top' style={corDaBorda}>
            <div className='topo'>
                <img src={image} alt={image} />
                <h4> {social} </h4>
            </div>
            <div className="rodape-top">
                <h4>{number}</h4>
                <h5>{followers}</h5>
                <h6 style={UpDonw}>{downUp}{upSubscribers}</h6>
            </div>
        </section>
    )
};

export default CardTop;