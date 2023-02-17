import {Button} from './components/button'
import {Modal} from './components/modal'
import {useEffect, useState} from "react";

export default () => {
    const [selectedText, setSelectedText] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        function handleMouseUp(event) {
            if (event.target.id !== 'my-button') {
                const text = window.getSelection().toString();
                setSelectedText(text);
            }
        }

        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return <>
        {selectedText && <Button id={'my-button'} onClick={() => setShowModal(true)}/>}
        {showModal && <Modal selectedText={selectedText} onClose={() => setShowModal(false)}/>}
    </>
}
