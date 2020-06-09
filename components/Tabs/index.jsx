import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@components';

const Tabs = ({
  children,
  tabTitleClass = '',
  activeTabTitleClass = '',
  contentWrapperClass = '',
}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClick = label => {
    setActiveTab(label);
  };

  return (
    <div>
      <ol className="flex flex-wrap border-b border-alt-2 pb-1">
        {Children.map(children, (child, i) => {
          const { label } = child.props;
          return (
            <Tab
              key={label}
              label={label}
              activeTab={activeTab}
              className={tabTitleClass}
              onClick={() => onClick(label)}
              activeClass={activeTabTitleClass}
            />
          );
        })}
      </ol>
      <div className={contentWrapperClass}>
        {Children.map(children, child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabTitleClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  activeTabTitleClass: PropTypes.string,
  contentWrapperClass: PropTypes.string,
};

export default Tabs;
