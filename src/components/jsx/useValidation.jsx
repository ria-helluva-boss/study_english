import { useState } from "react"

const useValidation = () => {
    const [inputErrorText, setInputErrorText] = useState({
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
        setIsInputError(prev => ({ ...prev, [nameField]: false }));
        setInputErrorText(prev => ({ ...prev, [nameField]: '' }));

        if(valueField.trim() === ''){
            setIsInputError({...isInputError, [nameField]:true})
            setInputErrorText({...inputErrorText, [nameField]:'Поле должно быть заполнено'})
        }
        else{
            switch(nameField){
                case 'english':
                case 'transcription':
                    if(valueField.match(/^[а-яА-ЯёЁ]+$/)){
                        setIsInputError({...isInputError, [nameField]:true})
                        setInputErrorText({...inputErrorText, [nameField]:'Используй только английские буквы'})
                    }
                    else{
                        setIsInputError({...isInputError, [nameField]:false})
                        setInputErrorText({...inputErrorText, [nameField]:''})
                    }
                    break;

                    case 'russian':
                    if(valueField.match(/^[a-zA-Z]+$/)){
                        setIsInputError({...isInputError, [nameField]:true})
                        setInputErrorText({...inputErrorText, [nameField]:'Используй только русские буквы'})
                    }
                    else{
                        setIsInputError({...isInputError, [nameField]:false})
                        setInputErrorText({...inputErrorText, [nameField]:''})
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