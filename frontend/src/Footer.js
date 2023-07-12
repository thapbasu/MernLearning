import React from 'react';
import Sdata from './Sdata';

const Footer = () => {
  return (
    <h3>
      {Sdata.map((item) => {
        return (
          <div>
            <p>{item.car.name} </p>
            <p>{item.car.price} </p>
            {item.data.map((ite) => {
              return (
                <div>
                  <p>{ite.name}</p>
                  <p>{ite.title}</p>
                  <p>{ite.id}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </h3>
  );
};

export default Footer;
