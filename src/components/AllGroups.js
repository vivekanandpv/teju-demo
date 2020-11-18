import React, { Fragment } from 'react';
import GroupCard from './GroupCard';

const AllGroups = (props) => {
  return (
    <Fragment>
      {props.groups.map((g, i) => {
        return (
          <GroupCard
            data={g}
            key={i}
            onSelection={props.onSelection}
            currentGroup={props.currentGroup}
          />
        );
      })}
    </Fragment>
  );
};

export default AllGroups;
