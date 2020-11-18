import React, { Fragment } from 'react';

const Account = (props) => {
  return (
    <Fragment>
      <div
        className={
          props.account.isSelected
            ? 'alert alert-primary'
            : 'alert alert-secondary'
        }
        role='alert'
        onClick={() => props.onSelection(props.account)}
      >
        {props.account.name} | {props.account.accountNumber}
      </div>
    </Fragment>
  );
};

export default Account;
