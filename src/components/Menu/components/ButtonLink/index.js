import React from 'react';

function ButtonLink(props) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;

//import React from 'react';
//import PropTypes from 'prop-types';

//function ButtonLink({ className, href, children }) {
//  return (
//    <a className={className} href={href}>
//      {children}
//    </a>
//  );
//}

//ButtonLink.defaultProps = {
//  href: '/',
//  className: '',
//};

//ButtonLink.propTypes = {
//  className: PropTypes.string,
//  href: PropTypes.string,
//  children: PropTypes.node.isRequired,
//};

//export default ButtonLink;