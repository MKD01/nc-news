import React, { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';

const Topics = ({ setSelectedTopic, selectedTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  const topicHandler = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="dropdown">
      <button className="dropbutton">
        {selectedTopic.length ? selectedTopic : 'Unselected'}
      </button>
      <div className="dropdown-content">
        <a onClick={() => setSelectedTopic('')}>Unselected</a>
        {topics.map((topic) => {
          return (
            <a key={topic.slug} onClick={() => topicHandler(topic.slug)}>
              {topic.slug}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
