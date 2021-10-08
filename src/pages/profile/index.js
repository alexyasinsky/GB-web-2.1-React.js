
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";


import Area from '../../components/Area';
import Modal from  '../../components/Modal';
import Card from './components/Card';
import Form from './components/Form'


import { useDispatch } from 'react-redux';
import { clearUsersStore } from '../../store/users/actions';
import { useState } from 'react';



export default function Profile() {

  const dispatch = useDispatch();

	function signOutHandler() {
		const auth = getAuth();
		signOut(auth).then(() => {
      dispatch(clearUsersStore());
			console.log('sign out successful');
		})
    .catch((error) => {
			console.log('sign out failed')
		});
	}

  const profile = useSelector(state => state.users.profile);

  const [cardIsVisible, setCardVisible] = useState(true);

  const [modalIsVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setCardVisible(!cardIsVisible);
    setModalVisible(!modalIsVisible);
  }

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
        />
      </Modal>
    </Area>
	)
}