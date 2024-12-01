import { makeAutoObservable, runInAction} from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class WordStore {
    words = [];
    isLoaded = true;

    constructor () {
        makeAutoObservable(this);
        this.loadData();
    }

     loadData = async () => {
        this.isLoaded = true;

        try {
            const response = await fetch(
                'http://itgirlschool.justmakeit.ru/api/words'
            );
            if (!response.ok) {
                throw new Error ('Не удалось получить слова');
            }
            const data = await response.json();
            runInAction(() => {
                this.words = data; 
                this.isLoaded = false; 
            });
        } catch (error) {
            console.error(error.message);
            runInAction(() => {
                this.isLoaded = false; 
            });
        }
    };

    handleAdd = async (value) => {
        try{ 
            const newWord = {
                id: uuidv4(),
                english: value.english,
                transcription: value.transcription,
                russian: value.russian,
                tags: '',
                tags_json: ''
            }
            runInAction(() => {
                this.words.push(newWord);
            });

            const response = await fetch(
                'http://itgirlschool.justmakeit.ru/api/words/add',
                {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( newWord ),
                }); 
            if (!response.ok) {
                throw new Error ('Не удалось получить слова');
            }
            this.words.push(newWord);
        } catch (error) {
            console.error('Ошибка добавления слова:', error);
        }
    }

    handleSave = async (value, id) => {
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id, 
                    english: value.english,
                    transcription: value.transcription,
                    russian: value.russian,
                    tags: '', 
                    tags_json: '',
                }),
            });
            if (!response.ok) {
                throw new Error('Не удалось обновить слово'); 
            }
            await this.loadData(); 
        } catch (error) {
            console.error('Ошибка обновления слова:', error);
        }
    };

    handleDelete = async (id) => {
        try {
            const response = await fetch(`https://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            });
            if (!response.ok) throw new Error('Не удалось удалить слово');
            await this.loadData(); 
        } catch (error) {
            console.error('Ошибка удаления слова:', error);
        }
    };
};

export const wordStore = new WordStore ();