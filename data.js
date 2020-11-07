                            ///////// hostel ///////////////
const search_key_hostel = {
    "University of ilorin": {"name": "University of ilorin", "codeId": "unilorin001", "abbr": "unilorin", "state": "kwara"},
    "University of Lagos": {"name": "University of Lagos", "codeId": "unilag001", "abbr": "unilag","state": "lagos"},
    "Lagos State University": {"name": "Lagos State University", "codeId": "lasu001", "abbr": "lasu", "state": "lagos"},
    "Al-Hikmah University": {"name": "Al-Hikmah University", "codeId": "Al-Hikmah001", "abbr": "al-hikmat", "state": "kwara"},
    "Kwara State University": {"name": "Kwara State University", "codeId": "Kwasu001", "abbr": "kwasu", "state": "kwara"},
    "Kwara State Ployltechnic": {"name": "Kwara State Ployltechnic", "codeId": "KwaraPoly001", "abbr": "kwarapoly", "state": "kwara"},
    // "Federal University Of Agriculture, Abeokuta": {"name": "Federal University Of Agriculture, Abeokuta", "codeId": "Funaab001", "abbr": "funaab",},
};


const all_location = {
    "subLocation": [
        {"uni": "Unilorin", "keyword": "campus", "id": 1, "autocompleteTerm": "Campus"},
        {"uni": "Unilorin", "keyword": "Unilorin", "id": 2, "autocompleteTerm": "Unilorin Gate"},
        {"uni": "Unilorin", "keyword": "uith", "id": 17, "autocompleteTerm": "UITH"},
        {"uni": "Unilorin", "keyword": "gate", "id": 18, "autocompleteTerm": "School Gate"},
        {"uni": "Unilorin", "keyword": "jalala", "id": 19, "autocompleteTerm": "Jalala, Oke Odo"},
        {"uni": "Unilorin", "keyword": "balogun", "id": 20, "autocompleteTerm": "Balogun"},
        {"uni": "Unilorin", "keyword": "as sunnah", "id": 21, "autocompleteTerm": "As Sunnah"},
        {"uni": "Unilorin", "keyword": "chapel", "id": 22, "autocompleteTerm": "Chapel"},
        {"uni": "Unilorin", "keyword": "mfm", "id": 23, "autocompleteTerm": "MFM"},
        {"uni": "Unilorin", "keyword": "big boy", "id": 24, "autocompleteTerm": "Big Boy"},
        {"uni": "Unilorin", "keyword": "nnfc", "id": 25, "autocompleteTerm": "NNPC"},
        {"uni": "Unilorin", "keyword": "f division", "id": 26, "autocompleteTerm": "F Division"},
        {"uni": "Unilorin", "keyword": "fate", "id": 27, "autocompleteTerm": "Fate"},
        {"uni": "Unilorin", "keyword": "basin", "id": 28, "autocompleteTerm": "Basin"},
        {"uni": "Unilorin", "keyword": "stella", "id": 3, "autocompleteTerm": "Stella Maris"},
        {"uni": "Unilorin", "keyword": "oke", "id": 4, "autocompleteTerm": "Oke Odo"},
        {"uni": "Unilorin", "keyword": "oke", "id": 5, "autocompleteTerm": "Oke Oba"},
        {"uni": "Unilorin", "keyword": "sanrab", "id": 6, "autocompleteTerm": "Sanrab"},
        {"uni": "Unilorin", "keyword": "mark", "id": 7, "autocompleteTerm": "Mark"},
        {"uni": "Unilorin", "keyword": "tanke", "id": 8, "autocompleteTerm": "Tanke Ajanaku"},
        {"uni": "Unilorin", "keyword": "tipper", "id": 9, "autocompleteTerm": "Tipper Garage"},
        //
        {"uni": "Unilag", "keyword": "akoka", "id": 10, "autocompleteTerm": "Akoka, Yaba"},
        {"uni": "Unilag", "keyword": "abule oja", "id": 11, "autocompleteTerm": "Abule Oja, Yaba"},
        {"uni": "Unilag", "keyword": "onike", "id": 12, "autocompleteTerm": "Onike"},
        {"uni": "Unilag", "keyword": "Campus", "id": 29, "autocompleteTerm": "campus"},
        {"uni": "Unilag", "keyword": "university road", "id": 30, "autocompleteTerm": "University Road"},
        {"uni": "Unilag", "keyword": "ilaje Bariga", "id": 31, "autocompleteTerm": "Ilaje Bariga"},
        //
        {"uni": "Lasu", "keyword": "ojo", "id": 13, "autocompleteTerm": "Ojo"},
        {"uni": "Lasu", "keyword": "ikotu", "id": 14, "autocompleteTerm": "Ikotu"},
        {"uni": "Lasu", "keyword": "festac", "id": 15, "autocompleteTerm": "Festac"},
        //
        {"uni": "Al-Hikmah", "keyword": "adeta", "id": 32, "autocompleteTerm": "Adeta"},
        {"uni": "Al-Hikmah", "keyword": "adewalw estate", "id": 33, "autocompleteTerm": "Adewale Estate"},
        {"uni": "Al-Hikmah", "keyword": "mandate", "id": 34, "autocompleteTerm": "Mandate"},
        {"uni": "Al-Hikmah", "keyword": "cottage", "id": 35, "autocompleteTerm": "Cottage"},
        {"uni": "Al-Hikmah", "keyword": "Gerin Alimi", "id": 36, "autocompleteTerm": "Gerin Alimi"},
        {"uni": "Al-Hikmah", "keyword": "olorunsogo", "id": 37, "autocompleteTerm": "Olorunsogo"},
        //
        {"uni": "Kwasu", "keyword": "safari", "id": 38, "autocompleteTerm": "Safari"},
        {"uni": "Kwasu", "keyword": "school gate", "id": 39, "autocompleteTerm": "School Gate"},
        {"uni": "Kwasu", "keyword": "police station", "id": 40, "autocompleteTerm": "Police Station"},
        {"uni": "Kwasu", "keyword": "west end", "id": 41, "autocompleteTerm": "West End"},
        {"uni": "Kwasu", "keyword": "millionaire hostel", "id": 42, "autocompleteTerm": "Millionaire Hostel"},
        {"uni": "Kwasu", "keyword": "agt 2", "id": 43, "autocompleteTerm": "AGT 2"},
        {"uni": "Kwasu", "keyword": "amina castle", "id": 44, "autocompleteTerm": "Amina Castle"},
        {"uni": "Kwasu", "keyword": "cap lounge", "id": 45, "autocompleteTerm": "Cap Lounge"},
        {"uni": "Kwasu", "keyword": "boye hostel", "id": 46, "autocompleteTerm": "Boye Hostel"},
        {"uni": "Kwasu", "keyword": "e place", "id": 47, "autocompleteTerm": "E Place"},
        //
        {"uni": "kwaraPoly", "keyword": "kulende", "id": 48, "autocompleteTerm": "Kulende"},
        {"uni": "kwaraPoly", "keyword": "sanjo", "id": 49, "autocompleteTerm": "Sanjo"},
        {"uni": "kwaraPoly", "keyword": "oyun", "id": 50, "autocompleteTerm": "Oyun"},
        {"uni": "kwaraPoly", "keyword": "eleko", "id": 51, "autocompleteTerm": "Eleko"},
        {"uni": "kwaraPoly", "keyword": "oke oyi", "id": 52, "autocompleteTerm": "Oke Oyi"},
        {"uni": "kwaraPoly", "keyword": "oke ose", "id": 53, "autocompleteTerm": "Oke Ose"},
        {"uni": "kwaraPoly", "keyword": "poly gate", "id": 54, "autocompleteTerm": "Ploy Gate"},
        {"uni": "kwaraPoly", "keyword": "yakuba", "id": 55, "autocompleteTerm": "Yakuba"},
        {"uni": "kwaraPoly", "keyword": "general", "id": 56, "autocompleteTerm": "general"},
        {"uni": "kwaraPoly", "keyword": "agbo oba", "id": 57, "autocompleteTerm": "Agbo Oba"},


    ],
}
                                        ///////// hostel ends here ///////////////




                                        


                                         //////// food //////////
const unilorin_area_name = {
    'areaNames': ['Unilorin PS', 'School Gas', 'Stella Maris', 'Oke Odo', 'Oko Oba', 'Tanke Ajanaku', 'Big Boy',
                  'Sanrab', 'Mark', 'NNPC', 'Tipper Garage ', 'Pipeline', 'F Division ', 'Tanke Junction ', 'Fate',
                  'Basin', 'onCampus'],
};

const unilag_area_name = {
    areaNames: [
    //   "Campus",
      "University Road",
      'onCampus',
      "Akoka, Yaba",
      "Abule Oja, Yaba",
      "Onike, Yaba",
      "Ilaje Bariga",
    ],
};
  
const Al_Hikmah_area_name = {
areaNames: [
    "Adeta",
    "Adewale Estate",
    "Olorunsogo",
    "Mandate",
    "Cottage",
    "Gerin Alimi",
    'onCampus'
],
};

const Lasu_area_name = {
areaNames: [
    "Festac Town",
    "Ijegun", 
    'onCampus',
    "Lasu - Isheri Road",
    "Obadore",
    "Akesan",
    "Iyana Iba",
    "Okokomaiko",
    "Iyana Ishashi",
    "Iyana Era",
    "Ikotun",
],
};

const kwasu_area_name = {
areaNames: ['safari', 'school gate', 'police station', 'west end', 'millionaire hostel', 'Agt2', 'amina castle', 'cap lounge', 'boye hostel', 'e place'],
};

const kwaraPloy_area_name = {
areaNames: [
    'kulende',
    'sanjo',
    'oyun',
    'eleko',
    'oke oyi',
    'oke ose',
    'poly gate',
    'yakuba',
    'general',
    'agbo oba',
],
};

const funaab_area_name = {
areaNames: [],
};

const food_delivery_price_info = {
    'unilorin': {
        'onCampus' : {
            1: 80,
            2: 100,
            3: 100,
            4: 100,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'sameLocation' : {
            1: 80,
            2: 100,
            3: 100,
            4:100,
            5:150,
            6:150,
            7:200,
            8:200,
            9:250,
            10:250,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
    'unilag': {
        'onCampus' : {
            1: 50,
            2: 50,
            3: 50,
            4: 100,
            5: 100,
            6: 100,
            7: 150,
            8: 150,
            9: 150,
            10: 150,
        },
        'sameLocation' : {
            1: 50,
            2: 50,
            3: 100,
            4:100,
            5:150,
            6:150,
            7:200,
            8:200,
            9:250,
            10:250,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
    'lasu': {
        'onCampus' : {
            1: 50,
            2: 50,
            3: 100,
            4: 100,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'sameLocation' : {
            1: 50,
            2: 50,
            3: 100,
            4:100,
            5:150,
            6:150,
            7:200,
            8:200,
            9:250,
            10:250,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
    'al-hikmah': {
        'onCampus' : {
            1: 100,
            2: 100,
            3: 150,
            4: 150,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'sameLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4: 150,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
    'kwasu': {
        'onCampus' : {
            1: 100,
            2: 100,
            3: 150,
            4: 150,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'sameLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4: 150,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
    'kwarapoly': {
        'onCampus' : {
            1: 100,
            2: 100,
            3: 150,
            4: 150,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'sameLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4: 150,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
    'funaab': {
        'onCampus' : {
            1: 50,
            2: 50,
            3: 100,
            4: 100,
            5: 150,
            6: 150,
            7: 150,
            8: 150,
            9: 150,
            10: 200,
        },
        'sameLocation' : {
            1: 50,
            2: 50,
            3: 100,
            4:100,
            5:150,
            6:150,
            7:200,
            8:200,
            9:250,
            10:250,
        },
        'differentLocation' : {
            1: 100,
            2: 100,
            3: 150,
            4:150,
            5:200,
            6:200,
            7:250,
            8:250,
            9:300,
            10:300,
        }
    },
};
  
                                             //////// food ends here //////////




                            //////////// market ////////////////////
const market_delivery_info = {
    'University Of Ilorin': {
    'unilorin': {'delivery_time': '20 - 30 Mins', 'price': 50},
    'unilag': {'delivery_time': '1 - 2 Days', 'price': 500},
    'lasu': {'delivery_time': '2 - 3 Days', 'price': 500},
    'al-hikmah': {'delivery_time': '20 - 40 Mins', 'price': 50},
    'kwasu': {'delivery_time': '1 - 2 Days', 'price': 50},
    'kwarapoly': {'delivery_time': '1 - 2 Days', 'price': 50},
    'funaab': {'delivery_time': '1 - 2 Days', 'price': 250},
    },
    'University Of Lagos': {
    'unilag': {'delivery_time': '20 - 30 Mins', 'price': 100},
    'unilorin': {'delivery_time': '1 - 2 Days', 'price': 500},
    'lasu': {'delivery_time': '20 - 40 Mins', 'price': 150},
    'al-hikmah': {'delivery_time': '1 - 2', 'price': 500},
    'kwasu': {'delivery_time': '1 - 2 Days', 'price': 500},
    'kwasu': {'delivery_time': '1 - 2 Days', 'price': 500},
    'kwarapoly': {'delivery_time': '1 - 2 Days', 'price': 500},
    'funaab': {'delivery_time': '1 - 2 Days', 'price': 500},
    },
    'Lagos State University': {
    'unilag': {'delivery_time': '20 - 40 Mins', 'price': 150},
    'unilorin': {'delivery_time': '2 - 3 Days', 'price': 500},
    'lasu': {'delivery_time': '20 - 30 Mins', 'price': 100},
    'al-hikmah': {'delivery_time': '2 - 3', 'price': 500},
    'kwasu': {'delivery_time': '1 - 2 Days', 'price': 500},
    'kwarapoly': {'delivery_time': '1 - 2 Days', 'price': 500},
    'funaab': {'delivery_time': '1 - 2 Days', 'price': 500},
    },
    'AL-Hikmah University': {
    'unilag': {'delivery_time': '1 - 2 Days', 'price': 500},
    'unilorin': {'delivery_time': '20 - 40 mins', 'price': 50},
    'lasu': {'delivery_time': '2 - 3 Days', 'price': 500},
    'al-hikmah': {'delivery_time': '20 - 30 Mins', 'price': 50},
    'kwasu': {'delivery_time': '1 - 2 Days', 'price': 50},
    'kwarapoly': {'delivery_time': '1 - 2 Days', 'price': 50},
    'funaab': {'delivery_time': '1 - 2 Days', 'price': 250},
    },
    

};
                            

                       ///////////////// market ends here //////////////////////////


                       //////////// hire ////////////////////
const hire_laundry_deilvery_fee = {
    'unilorin': 5,
    'unilag': 10,
    'lasu': 10,
    'al-hikmah': 5,
    'kwasu': 5,
    'kwarapoly': 5,
    'funaab': 5,
};


                       ////////// hire ends here //////

const coin_fee = {
    'coinFee': 100,
};



  

exports.search_key_hostel = search_key_hostel;
exports.unilorin_area_name = unilorin_area_name;
exports.unilag_area_name = unilag_area_name;
exports.Al_Hikmah_area_name = Al_Hikmah_area_name;
exports.Lasu_area_name = Lasu_area_name;
exports.kwasu_area_name = kwasu_area_name;
exports.kwaraPloy_area_name = kwaraPloy_area_name;
exports.funaab_area_name = funaab_area_name;
exports.all_location = all_location;

exports.market_delivery_info = market_delivery_info;
exports.hire_laundry_deilvery_fee = hire_laundry_deilvery_fee;
exports.coin_fee = coin_fee;
