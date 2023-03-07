import "./index.css";

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
      <li>
        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
      </li>
      <li>
        <img
          src="https://img.icons8.com/pulsar-line/256/home-page.png"
          alt="home"
        />
        <p className="property__menu">Home</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
          alt="explore"
        />
        <p className="property__menu">Explore</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material-outlined/512/filled-appointment-reminders.png"
          alt="notifications"
        />
        <p className="property__menu">Notifications</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/windows/512/secured-letter--v1.png"
          alt="messages"
        />
        <p className="property__menu">Messages</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material/256/bookmark-outline.png"
          alt="bookmarks"
        />
        <p className="property__menu">Bookmarks</p>
      </li>
    </ul>
    <button>Tweet</button>
    </div> 
  );
};

export default MenuContent;