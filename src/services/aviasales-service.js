export default class AviasalesService {

    data = [
        {
            id: 0,
            origin: "VVO",
            origin_name: "Владивосток",
            destination: "TLV",
            destination_name: "Тель-Авив",
            departure_date: "12.05.18",
            departure_time: "16:20",
            arrival_date: "12.05.18",
            arrival_time: "22:10",
            carrier: "TK",
            stops: 3,
            price: 12400
        }, {
            id: 1,
            origin: "VVO",
            origin_name: "Владивосток",
            destination: "TLV",
            destination_name: "Тель-Авив",
            departure_date: "12.05.18",
            departure_time: "17:20",
            arrival_date: "12.05.18",
            arrival_time: "23:50",
            carrier: "S7",
            stops: 1,
            price: 13100
        }, {
            id: 2,
            origin: "VVO",
            origin_name: "Владивосток",
            destination: "TLV",
            destination_name: "Тель-Авив",
            departure_date: "12.05.18",
            departure_time: "12:10",
            arrival_date: "12.05.18",
            arrival_time: "18:10",
            carrier: "SU",
            stops: 0,
            price: 15300
        }, {
            id: 3,
            origin: "VO",
            origin_name: "Киев",
            destination: "VV",
            destination_name: "Кемер",
            departure_date: "12.05.18",
            departure_time: "12:10",
            arrival_date: "12.05.18",
            arrival_time: "18:10",
            carrier: "KU",
            stops: 1,
            price: 2050
        }
    ];


    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75){
                    reject(new Error("Something bad happened"));
                }
                else{
                    resolve(this.data);
                }
            }, 700);
        });
    }


}

