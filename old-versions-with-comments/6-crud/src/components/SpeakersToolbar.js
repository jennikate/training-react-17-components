import { useContext } from 'react';
import {ThemeContext } from '../contexts/ThemeContext';
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';

const SpeakersToolbar = () => {
// remove the props theme and setTheme as we don't pass them down anymore
// create a const to get the theme and setTheme from context

const { 
  showSessions, setShowSessions,
  eventYear, setEventYear,
  searchQuery, setSearchQuery,
  EVENT_YEARS,
 } = useContext(SpeakerFilterContext);
const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex-flex-colum flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => {
                    setShowSessions(event.target.checked);
                  }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
            <li>
              <div className="input-group">
                <input 
                type="text"
                className="form-control" placeholder="Search..."
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              </div>
            </li>
            <li className="d-flex flex-column flex-md-row">
              <strong>Year</strong>
              <label className = "dropmenu">
                <select 
                  className="form-control"
                  value={eventYear}
                  onChange={({ currentTarget }) => {
                    setEventYear(currentTarget.value);
                  }}>
                    {EVENT_YEARS.map(function (year) {
                      return (
                        <option value={year} key={year}>{year}</option>
                      );
                    })}
                  </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpeakersToolbar;