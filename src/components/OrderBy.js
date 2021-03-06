import React from 'react';

const OrderBy = ({ selectedOrderBy, setSelectedOrderBy }) => {
  const orderByHandler = (event) => {
    switch (true) {
      case selectedOrderBy === 'ASC':
        setSelectedOrderBy('DESC');
        break;
      case selectedOrderBy === 'DESC':
        setSelectedOrderBy('ASC');
        break;
    }
  };

  return (
    <div className="dropdown">
      <button className="dropbutton" onClick={(event) => orderByHandler(event)}>
        Order By: {selectedOrderBy}
      </button>
    </div>
  );
};

export default OrderBy;
