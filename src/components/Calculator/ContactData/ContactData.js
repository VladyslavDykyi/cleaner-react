import React, {useState, useEffect, memo} from 'react';
import InputMask from 'react-input-mask';
import './ContactData.css';

const ContactData = ({getData,numeration,validInput}) => {
	const [userData, setUserData] = useState({
		userName: '',
		userTel: '',
		userEmail: '',
		userComment: '',
	});
	useEffect(() => {
		(() => {
			getData(userData);
		})();
	}, [userData]);
	const handlerChange = (event) => {
		const {value, name} = event.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				{numeration}. Вкажіть ваші контактні дані
			</h2>
			<div className="contact-data">
				<label className={`input ${validInput.nameValid ? 'inValid' : ''}`} htmlFor="userName">
					<input type="text" name="userName" id="userName" placeholder="Ваше імʼя"
					       value={userData.userName} onChange={handlerChange} required/>
				</label>
				<label className={`input ${validInput.telValid ? 'inValid' : ''}`} htmlFor="userTel">
					<InputMask type='tel' name="userTel" id="userTel" mask="+38(099)-999-99-99"
					           value={userData.userTel} onChange={handlerChange} placeholder="+38(0__)-___-__-__"
					           required/>
				</label>
				<label className="input" htmlFor="userEmail">
					<input type="text" name="userEmail" id="userEmail" placeholder="Email"
					       value={userData.userEmail} onChange={handlerChange} />
				</label>
				<label className="textarea" htmlFor="userComment">
					<textarea name="userComment" id="userComment" cols="30" rows="10" placeholder="Коментар (опціонно)"
					          value={userData.userComment} onChange={handlerChange}/>
				</label>
				<p className="contact-text">
					Наш менеджер звʼяжеться з вами для уточнення деталей або для підтвердження
					замовлення.
					Або чекайте повідомлення з підтвердженням замовлення у ваших месенджерах.
				</p>
			</div>
		</section>
	);
}
export default memo(ContactData);