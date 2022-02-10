import React, { useEffect, useState } from 'react';
import { getArticlesCount } from '../utils/api';

const PageCount = ({ setCurrentPage }) => {
  const [maxPageNum, setMaxPageNum] = useState(0);

  useEffect(() => {
    getArticlesCount().then((res) => {
      setMaxPageNum(Math.ceil(res / 10));
    });
  }, []);

  const pageNumHandler = (num) => {
    setCurrentPage(num);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {Array.from({ length: maxPageNum }, (v, i) => i + 1).map((num) => {
        return (
          <button key={num} onClick={() => pageNumHandler(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default PageCount;
