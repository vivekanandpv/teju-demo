import React, { Fragment } from 'react';
import Account from './Account';

const GroupCard = (props) => {
  return (
    <Fragment>
      <div className='card mb-3'>
        <div className='card-body'>
          <p
            className='text-primary lead'
            data-toggle='collapse'
            data-target={`#${props.data.groupName}`}
            role='button'
          >
            {props.data.groupName}
          </p>
          {/* <p>{JSON.stringify(props.data)}</p> */}
          <div
            className={
              props.currentGroup === props.data.groupName
                ? 'collapse show'
                : 'collapse'
            }
            id={props.data.groupName}
          >
            {props.data.accounts.map((a, i) => {
              return (
                <Account account={a} key={i} onSelection={props.onSelection} />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GroupCard;
