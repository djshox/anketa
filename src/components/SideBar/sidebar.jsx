import React from "react";
import s from "./sidebar.css";
import { NavLink, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from "element-react";
import { connect } from "react-redux"
import { signOutThunk } from "localRedux/authReducer";


const Sidebar = (props) => {
  const { t } = useTranslation();
  let menuNames = [{ name: t('home'), page: "/home" }, { name: t('anketa'), page: "/anketa" }]
  const logOut = () => {
    props.signOutThunk();
    if (!props.isAuth) {
      props.history.push('/login')
    }
  }
  return (
    <div className="bg-secondary text-white col-2 p-0" >
      <div id="sidebar" className=" bg-secondary text-white">
        <ul className="list-group">
          {
            menuNames.map((item, key) =>
              <li className="list-group-item bg-secondary" key={key}>
                <NavLink to={item.page} className={s.active}>{item.name}</NavLink>
              </li>
            )
          }
          <li className="list-group-item bg-secondary">
            <Button type='text' className="text-danger" onClick={logOut}>{t('logOut')}</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ Auth }) => {
  return { isAuth: Auth.isAuth }
}
export default withRouter(connect(mapStateToProps, { signOutThunk })(Sidebar));
