import defaultAvatar from './default_avatar.svg';
const picSize = '182px';
let avatar = false;

const UserDataItem = () => {
  if (!avatar) {
    avatar = defaultAvatar;
  }
  return (
    <div>
      <img src={avatar} alt="Your look" width={picSize} height={picSize}></img>
      <button>Edit photo</button>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <input type="submit" value="Submit" />
      <p>Email:</p>
      <label>
        Birthday:
        <input type="text" name="birthday" />
      </label>
      <input type="submit" value="Submit" />
      <p>Birthday:</p>
      <label>
        Phone:
        <input type="text" name="phone" />
      </label>
      <input type="submit" value="Submit" />
      <p>Phone:</p>
      <label>
        City:
        <input type="text" name="city" />
      </label>
      <input type="submit" value="Submit" />
      <p>City:</p>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <button>Log Out</button>
    </div>
  );
};

export default UserDataItem;
