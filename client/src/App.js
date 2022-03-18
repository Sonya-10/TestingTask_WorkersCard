import './style.css';

function App() {

  const onSubmit = async (event) => {
    event.preventDefault();

    const body = {
      username: event.target.username.value,
      birthday: event.target.birthday.value,
      citizenship: event.target.citizenship.value,
      address: event.target.address.value,
      teamLeader: event.target.teamLeader.value,
      position: event.target.position.value,
      phoneNumber: event.target.phoneNumber.value,
      personalMail: event.target.personalMail.value,
      workMail: event.target.workMail.value,
      date: event.target.date.value,
      salary: event.target.salary.value,
      registration: event.target.registration.value,
    };

    const responce = await fetch('http://localhost:3000/user', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await responce.json();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="Container">
        <div className="Card">Карточка сотрудника</div>
        <div className="icon"></div>
        <div className="mainField">
          <div className="data">
            <div className="text">ФИО:</div>
            <input name="username" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Дата рождения:</div>
            <input name="birthday" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Гражданство:</div>
            <input name="citizenship" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Адрес проживания:</div>
            <input name="address" className="inputLong" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Руководитель группы:</div>
            <input name="teamLeader" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Должность:</div>
            <input name="position" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Телефон:</div>
            <input name="phoneNumber" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Почта (личная):</div>
            <input name="personalMail" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Почта (рабочая, если есть):</div>
            <input name="workMail" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Дата приёма на работу:</div>
            <input name="date" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Размер оплаты труда:</div>
            <input name="salary" className="input" placeholder="..."></input>
          </div>
          <div className="data">
            <div className="text">Оформление:</div>
            <input name="registration" className="input" placeholder="..."></input>
          </div>

          <button type="submit" className="save">Сохранить</button>
        </div>
      </div>
    </form>
  )
}

export default App;
