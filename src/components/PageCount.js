import React, { useEffect } from 'react';
import { getArticlesCount } from '../utils/api';

const PageCount = ({ selectedTopic, currentPage, setCurrentPage }) => {
  useEffect(() => {
    getArticlesCount(selectedTopic).then((res) => {
      setCurrentPage({ page: 1, maxPage: Math.ceil(res / 10) });
    });
  }, [selectedTopic]);

  const pageNumHandler = (num) => {
    setCurrentPage((currentVal) => ({ ...currentVal, page: num }));
    window.scrollTo(0, 0);
  };

  return (
    <div className="pages">
      {Array.from({ length: currentPage.maxPage }, (v, i) => i + 1).map(
        (num) => {
          return (
            <button key={num} onClick={() => pageNumHandler(num)}>
              {num}
            </button>
          );
        }
      )}
    </div>
  );
};

export default PageCount;
