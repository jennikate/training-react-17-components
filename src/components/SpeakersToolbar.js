const SpeakersToolbar = ({ theme, setTheme, showSessions, setShowSessions }) => {
  // const [showSessions, setShowSessions] = useState(true);
  // const [theme, setTheme] = useState("light"); // when set here, theme is trapped in this component as it is a child of speakers and a sibling of speakers list and header
  // instead we will now lift it to the parent component (Speakers) and pass it down as props
  // because the theme setter was passed down from the parent, we can use it here to change the theme value in the parent

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div classname="justify-content-between">
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
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpeakersToolbar;