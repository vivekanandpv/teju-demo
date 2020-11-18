import React, { Fragment, Component } from 'react';
import { baseData } from '../data';
import AllGroups from './AllGroups';

class GroupHolder extends Component {
  state = { groupsData: [...baseData], selectedGroup: 'att' };
  onAccountSelection = (a) => {
    this.setState((state, props) => {
      state.groupsData
        .filter((g) => {
          return g.groupName === a.groupName;
        })[0]
        .accounts.filter((ac) => ac === a)[0].isSelected = !a.isSelected;
      return JSON.parse(JSON.stringify(state));
    });
  };

  collateSelectedAccounts = () => {
    const selectedAccounts = [];
    this.state.groupsData.forEach((g) => {
      selectedAccounts.push(...g.accounts.filter((a) => a.isSelected));
    });

    this.setState((state, props) => {
      state.groupsData.forEach((g) => {
        g.accounts = g.accounts.filter((a) => !a.isSelected);
      });

      selectedAccounts.forEach((a) => (a.isSelected = false));

      state.groupsData
        .filter((g) => g.groupName === state.selectedGroup)[0]
        .accounts.push(...selectedAccounts);

      console.log('Collated', selectedAccounts);
      return JSON.parse(JSON.stringify(state));
    });
  };

  getSelectedGroupData = () => {
    return this.state.groupsData.filter(
      (g) => g.groupName === this.state.selectedGroup
    );
  };

  getUnselectedGroupData = () => {
    return this.state.groupsData.filter(
      (g) => g.groupName !== this.state.selectedGroup
    );
  };

  getGroupNames = () => {
    return this.state.groupsData
      .filter((g) => g.groupName !== 'ungrouped')
      .map((g) => g.groupName)
      .map((g, i) => (
        <option value={g} key={i}>
          {g}
        </option>
      ));
  };

  render() {
    return (
      <Fragment>
        <div className='my-2 w-25'>
          <div className='form-group'>
            <label>Select Group</label>
            <select
              className='form-control'
              onChange={(e) => this.setState({ selectedGroup: e.target.value })}
              value={this.state.selectedGroup}
            >
              {this.getGroupNames()}
            </select>
          </div>
        </div>
        <div className='d-flex  align-items-center justify-content-around'>
          <div className='card col-md-4'>
            <div className='card-body'>
              <AllGroups
                groups={this.getUnselectedGroupData()}
                onSelection={this.onAccountSelection}
              />
            </div>
          </div>
          <div className='d-flex align-items-center flex-column'>
            <button
              className='btn btn-primary my-2'
              onClick={this.collateSelectedAccounts}
            >
              <i className='fas fa-arrow-right'></i>
            </button>
          </div>

          <div className='card col-md-4'>
            <div className='card-body'>
              <AllGroups
                groups={this.getSelectedGroupData()}
                onSelection={() => {}}
                currentGroup={this.state.selectedGroup}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GroupHolder;
