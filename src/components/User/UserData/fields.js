const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'Name:',
    placeholder: 'User name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'Email:',
    placeholder: 'User email',
  },
  birthday: {
    type: 'birthday',
    name: 'birthday',
    required: true,
    label: 'Birthday',
    placeholder: 'User birthday',
  },
  phone: {
    type: 'phone',
    name: 'phone',
    required: true,
    label: 'Phone',
    placeholder: 'User phone',
  },
  city: {
    type: 'city',
    name: 'city',
    required: true,
    label: 'city',
    placeholder: 'User city',
  },
};

export default fields;
