import s from './OurFriendsList.module.scss';

const OurFriendsList = ({ friends, t }) => {
  return (
    <ul className={s.list}>
      {friends &&
        friends.map((friend) => (
          <li key={friend._id} className={s.card}>
            <h3 className={s.cardTitle}>{friend.title}</h3>
            <div className={s.iconDescriptionWrapper}>
              <img
                src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV7B6dowx30U&psig=AOvVaw1RkdAFEefhYc23hraSC2tI&ust=1684102250677000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjjjPWn8_4CFQAAAAAdAAAAABAE/${friend.icon}`}
                className={s.icon}
                alt="Our Friend Icon"
              />
              <ul className={s.discriptionList}>
                <li className={s.discriptionEl}>
                  <div className={s.time}>
                    <p className={s.timeHoverDiscription}>
                      Time: <br></br>
                      {friend.time}
                    </p>
                    <div className={s.timeOverlay}>
                      <p className={s.timeDiscription}>
                        Monday Hours: {friend.time}
                      </p>
                      <p className={s.timeDiscription}>
                        Tuesday Hours: {friend.time}
                      </p>
                      <p className={s.timeDiscription}>
                        Wednesday Hours: {friend.time}
                      </p>
                      <p className={s.timeDiscription}>
                        Thursday Hours: {friend.time}
                      </p>
                      <p className={s.timeDiscription}>
                        Friday Hours: {friend.time}
                      </p>
                      <p className={s.timeDiscription}>
                        Saturday Hours: {friend.time}
                      </p>
                      <p className={s.timeDiscription}>
                        Sunday Hours: {friend.time}
                      </p>
                    </div>
                  </div>
                </li>

                <li className={s.discriptionEl}>
                  <p className={s.discription}>
                    Address: <br></br> {friend.adress}
                  </p>
                </li>
                <li className={s.discriptionEl}>
                  <p className={s.discription}>Email:</p>
                  <a href={`mailto:${friend.email}`} className={s.discription}>
                    {friend.email}
                  </a>
                </li>
                <li className={s.discriptionEl}>
                  <p className={s.discription}>Phone:</p>
                  <a href={`tel:${friend.phone}`} className={s.discription}>
                    {friend.phone}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default OurFriendsList;
