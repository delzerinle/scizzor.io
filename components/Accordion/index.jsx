import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';

import { AccordionSection } from '@components';

const Accordion = ({ children }) => {
  const [openSections, setOpenSections] = useState({});

  const onClick = label => {
    const isOpen = !!openSections[label];
    setOpenSections({ [label]: !isOpen });
  };

  return (
    <>
      {Children.map(children, (child, i) => {
        const { props } = child;
        return (
          <AccordionSection
            key={i}
            label={props.label}
            onClick={() => onClick(props.label)}
            isOpen={!!openSections[props.label]}
          >
            {props.children}
          </AccordionSection>
        );
      })}
    </>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
