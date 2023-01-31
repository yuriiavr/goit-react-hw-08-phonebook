import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Button from 'react-bootstrap/Button';
import css from '../UserMenu/UserMenu.module.css';

export default function UserMenu({ email }) {
  const dispatch = useDispatch();
  return (
    <div>
      <a href="mailto: {email}" className={css.Email}>
        {email}
      </a>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
    </div>
  );
}