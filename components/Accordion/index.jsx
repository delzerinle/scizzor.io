import React, { Children, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AccordionSection } from '@components';

const Accordion = ({
  children,
  labelIcon,
  isAccordionOpen = false,
  labelClassName = 'text-sm font-medium',
}) => {
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    if (isAccordionOpen) {
      const [firstChild] = children;
      const {
        props: { label },
      } = firstChild;
      setOpenSections({ [label]: true });
    }
  }, [isAccordionOpen]);

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
            labelIcon={labelIcon}
            labelClassName={labelClassName}
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
  isAccordionOpen: PropTypes.bool,
  labelClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Accordion;
