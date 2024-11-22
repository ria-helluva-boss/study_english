import { useState } from "react"

const useValidation = () => {
    const [inputErrorText, setImportErrorText] = useState({
        english:'',
        transcription:'',
        russian:'',
    });

    const [isInputError, setIsInputError] = useState({
        english:false,
        transcription:false,
        russian:false,
    });

    const [isDisabled, setIsDisabled] = useState(false);

    function validateField (nameField, valueField){
        if(valueField === ''){
            setIsInputError({...isInputError, [nameField]:true})
            setImportErrorText({...inputErrorText, [nameField]:'Поле должно быть заполнено'})
        }
        else{
            switch(nameField){
                case 'english':
                    if(valueField.match(/^[а-яА-ЯёЁ]+$/)){
                        setIsInputError({...isInputError, [nameField]:true})
                        setImportErrorText({...inputErrorText, [nameField]:'Используй только английские буквы'})
                    }
                    else{
                        setIsInputError({...isInputError, [nameField]:false})
                        setImportErrorText({...inputErrorText, [nameField]:''})
                    }
                    break;
                    
                case 'transcription':
                    if(valueField.match(/^[а-яА-ЯёЁ.,\-'\[\] ]+$/)){
                        setIsInputError({...isInputError, [nameField]:true})
                        setImportErrorText({...inputErrorText, [nameField]:'Используй только английские буквы'})
                    }
                    else{
                        setIsInputError({...isInputError, [nameField]:false})
                        setImportErrorText({...inputErrorText, [nameField]:''})
                    }
                    break;

                    case 'russian':
                    if(valueField.match(/^[a-zA-Z]+$/)){
                        setIsInputError({...isInputError, [nameField]:true})
                        setImportErrorText({...inputErrorText, [nameField]:'Используй только русские буквы'})
                    }
                    else{
                        setIsInputError({...isInputError, [nameField]:false})
                        setImportErrorText({...inputErrorText, [nameField]:''})
                    }
                    break;
                    
                default:
                        break;
            }
        }
    }
    return {validateField,
            inputErrorText, 
            isInputError, 
            isDisabled, 
            setIsDisabled};
};

export default useValidation;