
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";


import Area from '../../components/Area';
import Modal from  '../../components/Modal';
import Card from './components/Card';
import Form from './components/Form'


import { useDispatch } from 'react-redux';
import { clearUsersStore } from '../../store/users/actions';
import { changeUserName } from '../../store/users/actions';
import { useCallback, useState } from 'react';



export default function Profile() {

  const dispatch = useDispatch();

	function signOutHandler() {
		const auth = getAuth();
		signOut(auth).then(() => {
      dispatch(clearUsersStore());
		});
	}

  const profile = useSelector(state => state.users.profile);

  const profileId = profile?.id;

  const [userName, setUserName] = useState('');

  const handleUserName = (event) => {
    setUserName(event.target.value);
  }

  const [cardIsVisible, setCardVisible] = useState(true);

  const [modalIsVisible, setModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setCardVisible(!cardIsVisible);
    setModalVisible(!modalIsVisible);
  }, [cardIsVisible, modalIsVisible]);

  const changeUserNameButtonWrapper = useCallback( () => {
    dispatch(changeUserName(profileId, userName));
    toggleModal();
  }, [dispatch,toggleModal, userName, profileId]);

	return (
		<Area>
      <Card 
        profile={profile}
        signOut={signOutHandler}
        visible={cardIsVisible}
        showModal={toggleModal}
      />
      <Modal 
        className='profile__modal' 
        visible={modalIsVisible}
      >
        <Form
          hideModal={toggleModal}
          setUserName={handleUserName}
          userName={userName}
          changeUserName={changeUserNameButtonWrapper}
        />
      </Modal>
    </Area>
	)
}