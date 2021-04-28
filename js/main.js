/***********************************
        BOOLZAPP - Vue js
***********************************/
// Day JS
dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue ({
    el: '#app',

    data: {
        // Utente 
        user : {
            name: 'Cristina',
            avatar: '_io',
        },
        
        // Lista contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
            },
        ],
        // Contatto attivo (indice)
        activeContact: 0,
        // new msg
        newMessageText:'',
        // Cerca contatto
        search:"",
    },
    methods: {
        // CONTATTO ATTIVO
        setActiveContact(index) {
            //console.log(index);

            this.activeContact = index;

            //console.log( this.contacts[this.activeContact]);
        },
        // INSERIRE UN NUOVO MESSAGGIO
        insertMessage() {
            if(this.newMessageText !== '') {
                // ref array msg attuale
                const activeMessages = this.contacts[this.activeContact].messages;

                // creare nuovo messaggio in array messages
                activeMessages.push(
                    {
                        message: this.newMessageText,
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        status: 'sent'
                    }
                );
                // Clean up
                this.newMessageText = '';

                //Auto reply
                setTimeout(() => {

                    activeMessages.push(
                        {
                            message: 'Ok!',
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            status: 'received'
                        }
                    );
                }, 1000);

            }
        },
        // CERCA FRA LA LISTA CONTATTI
        searchContact() {
            this.contacts.forEach( contact => {
                if ( contact.name.toLowerCase().includes(this.search.toLowerCase()) ) {
                   contact.visible = true;
                } else {
                   contact.visible = false;
                }
            });
        }
    }

});