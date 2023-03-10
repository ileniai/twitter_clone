import {useState} from "react"
import "./index.css"

const Modal = ({setVisibleModal}) =>{


    //ho creato uno stato per le input della modale
    const [titleInput, setTitleInput] = useState ("");
    const [messageInput, setMesageInput] = useState ("");

    //questa è la funzione che scatena fetch con metodo PUT 
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        fetch("https://dummyjson.com/posts/1",{
            method: "PUT", 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleInput,
                message: messageInput,
              }),
        });
        setVisibleModal(false)
    };

    const onHandleClick = () =>{setVisibleModal(false);};



    return(
        <div className="Modal">
            <div className="Modal_overlay" onClick={onHandleClick}></div>
            <div className="Modal_content">
                <h3 className="Modal_title">Modifica il messaggio</h3>
                <button onClick={onHandleClick} className="Close_model">x</button>
                <form onSubmit={onHandleSubmit} className="Modal_form">
                    <input
                    className="Modal_input-title"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    type="text"
                    placeholder="Titolo..."
                    required
                    />
                    <input
                    className="Modal_input-message"
                    value={messageInput}
                    onChange={(e) => setMesageInput(e.target.value)}
                    type="text"
                    placeholder="Nuovo Post..."
                    required
                    />
                    <input
                    className="Modal_input-submit"
                    type="submit"
                    value="Modifica il Post"
                    />
                </form>
            </div>
        </div>
    )
}

export default Modal;