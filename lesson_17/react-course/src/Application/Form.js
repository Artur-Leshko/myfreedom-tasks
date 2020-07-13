import React from 'react';

function Form() {
    return (
        <form className="form" >
            <label><p className="labelText">Имя животного</p> <input type="text" placeholder="Имя"></input></label>
            <br/>
            <label><p className="labelText">Владелец</p> <input type="text" placeholder="Владелец"></input></label>
            <br/>
            <label><p className="labelText">Дата</p> <input type="date"></input></label>
            <br/>
            <label><p className="labelText">Время</p> <input type="time"></input></label>
            <br/>
            <label><p className="labelText">Заметки</p> <textarea placeholder="Заметки"></textarea></label>
            <br/>
            <button type="submit" className="submitButton">Добавить</button>
        </form>
    )
}

export default Form;