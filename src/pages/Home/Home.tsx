import Card from '@components/Card';
import Header from '@components/Header';
import Input from '@components/Input';
import { moviesQuery } from '@state/movies';
import React from 'react';
import { atom, useRecoilState } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const Home = () => {
  const [search, setSearch] = React.useState('');
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };


  return (
    <div>
      <Header />
      <Card name="Home" rating="5" image="123" releaseYear="2018" />
      {/* <p>{movies}</p> */}
  <p>{text}</p>
  <input type="text" value={text} onChange={onChange} />
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
