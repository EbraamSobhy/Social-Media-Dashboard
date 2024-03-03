import React from 'react';
import "./App.css";
import Titulo from './Components/Titulo';
import SubTitulo from './Components/SubTitulo';
import CardTop from './Components/CardTop';
import CardBottom from './Components/CardBotton';
import Face from './img/icon-facebook.svg';
import Twitter from './img/icon-twitter.svg';
import Instagram from './img/icon-instagram.svg';
import Youtube from './img/icon-youtube.svg';
import ThemeProvider from './Components/Darkmode';

function App() {

    const  dadosCardTop = [
      {
        number: '1987',
        social: '@nathanf',
        followers: 'Followers',
        image: Face, 
        upSubscribers: '12 Today', 
        color: '#028AE3',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        number: '1044',
        social: '@nathanf',
        followers: 'Followers',
        image: Twitter, 
        upSubscribers: '99 Today', 
        color: '#03A3ED',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        number: '11K',
        social: '@realnathanf',
        followers: 'Followers',
        image: Instagram, 
        upSubscribers: '1099 Today', 
        color: '#e24b91',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        number: '8239',
        social: 'Nathan F.',
        followers: 'Subscribers',
        image: Youtube, 
        upSubscribers: '144 Today', 
        color: '#D90427',
        colorUpDonw: '#E20C0C',
        downUp: '-'
      },
    ];

    const dadosCardBottom = [
      {
        name: 'Page Views',
        followers: '87',
        image: Face,
        upSubscribers: '3%',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        name: 'Likes',
        followers: '52',
        image: Face,
        upSubscribers: '2%',
        colorUpDonw: '#E20C0C',
        downUp: '-'
      },

      {
        name: 'Likes',
        followers: '5462',
        image: Instagram,
        upSubscribers: '2257%',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        name: 'Profile Views',
        followers: '52K',
        image: Instagram,
        upSubscribers: '1375%',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        name: 'Retweets',
        followers: '117',
        image: Twitter,
        upSubscribers: '303%',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        name: 'Likes',
        followers: '507',
        image: Twitter,
        upSubscribers: '553%',
        colorUpDonw: '#3ECEAE',
        downUp: '+'
      },

      {
        name: 'Likes',
        followers: '107',
        image: Youtube,
        upSubscribers: '19%',
        colorUpDonw: '#E20C0C',
        downUp: '-'
      },
      {
        name: 'Total Views',
        followers: '1407',
        image: Youtube,
        upSubscribers: '12%',
        colorUpDonw: '#E20C0C',
        downUp: '-'
      },
    ];

  return (
    <div className="App">
      <ThemeProvider>
        <Titulo />

        {dadosCardTop.map (cardTop => <CardTop 
          key={cardTop.image}
          number={cardTop.number}
          social={cardTop.social}
          followers={cardTop.followers}
          image={cardTop.image}
          upSubscribers={cardTop.upSubscribers}
          color={cardTop.color}
          colorUpDonw={cardTop.colorUpDown}
          donwup={cardTop.downUp}
        />)}

          <SubTitulo />

          {dadosCardBottom.map(cardBottom => <CardBottom
            key={cardBottom.followers}
            name={cardBottom.name}
            followers={cardBottom.followers}
            image={cardBottom.image}
            upSubscribers={cardBottom.upSubscribers}
            colorUpDown={cardBottom.colorUpDonw}
            downUp={cardBottom.downUp}
          />)}

      </ThemeProvider>

    </div>
  );
}

export default App;
