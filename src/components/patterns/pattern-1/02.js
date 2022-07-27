import React from "react";

const Clap02 = () => {
  return (
    <button className="clap">
      <ClapIcon />
      <ClapCount />
      <ClapTotal />
    </button>
  );
};

/**
 * Sub-Components
 */

const ClapIcon = () => {
  return <span></span>;
};

const ClapCount = ({ count }) => {
  return <span>+ {count}</span>;
};

const ClapTotal = ({ totalCount }) => {
  return <span>{totalCount}</span>;
};

export default Clap02;
