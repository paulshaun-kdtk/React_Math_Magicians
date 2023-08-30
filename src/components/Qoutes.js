import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './ButtonStyles.css';
import NavBar from './NavBar';
import '../App.css';

// end imports

function Quotes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const category = 'learning';

      $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        headers: {
          'X-Api-Key': 'kP1kTQjEYKr4mhstUEZLXw==VUr0CLQqm9FJBQhX',
          'Content-Type': 'application/json',
        },
        contentType: 'application/json',
        success(result) {
          setData(result);
          setLoading(false);
        },
        error: function ajaxError(jqXHR) {
          setError(new Error(jqXHR.responseText));
          setLoading(false);
        },
      });
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="Quote">Loading...</div>;
  }

  if (error) {
    return <div className="Quote"><h4>😐Oops Something went wrong. Please refresh the Page. If the Error Continues Contact our support.</h4></div>;
  }

  return (
    <div className="Container">
      <NavBar />
      <div className="Quote">
        <h2>Quote:</h2>
        <ul>
          {data.map((quote, index) => (
            <li key={index}>
              <i>{quote.quote}</i>
              <br />
              <b>{quote.author}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quotes;
