import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@components';

const CustomerTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClick = label => {
    setActiveTab(label);
  };

  return (
    <div className="md:flex md:flex-wrap">
      <ul className="flex flex-wrap justify-between items-center customer-tabs mb-8 md:w-40 md:flex-shrink-0 md:block md:mb-0">
        {Children.map(children, (child, i) => {
          const { label } = child.props;
          return (
            <Tab
              key={label}
              label={label}
              activeTab={activeTab}
              className="font-light md:mb-5"
              activeClass="text-primary"
              onClick={() => onClick(label)}
            />
          );
        })}
      </ul>
      <div className="md:flex-1">
        {Children.map(children, child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

CustomerTabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerTabs;
