import React, { Fragment, useState, useEffect } from 'react';
import GroupCard from './GroupCard';

const AllGroups = (props) => {
  const [groups, setGroups] = useState(props.groups);

  useEffect(() => {
    if (props.searchTerm) {
      const parentGroups = JSON.parse(JSON.stringify(props.groups));
      parentGroups.forEach((g) => {
        g.accounts = g.accounts.filter((a) => {
          return a.name.startsWith(props.searchTerm);
        });
      });

      setGroups(parentGroups);
    } else {
      setGroups(JSON.parse(JSON.stringify(props.groups)));
    }
  }, [props.searchTerm, props.groups]);

  return (
    <Fragment>
      {groups
        ? groups.map((g, i) => {
            return (
              <GroupCard
                data={g}
                key={i}
                onSelection={props.onSelection}
                currentGroup={props.currentGroup}
              />
            );
          })
        : null}
    </Fragment>
  );
};

export default AllGroups;
