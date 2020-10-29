                                       ///////// hostel ///////////////
const search_key_hostel = {
    "University of ilorin": {"name": "University of ilorin", "codeId": "unilorin001", "abbr": "Unilorin",},
    "University of Lagos": {"name": "University of Lagos", "codeId": "unilag001", "abbr": "Unilag",},
    "Lagos State University": {"name": "Lagos State University", "codeId": "lasu001", "abbr": "Lasu",},
    "Al-Hikmah University": {"name": "Al-Hikmah University", "codeId": "Al-Hikmah001", "abbr": "Al-Hikmah",}
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

  const food_delivery_price_info = {
    'unilorin': {
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
            9:1250,
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
            9:1250,
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
            9:1250,
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
            9:1250,
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
    'unilag': {'delivery_time': '1 - 2 Days', 'price': 350},
    'lasu': {'delivery_time': '2 - 3 Days', 'price': 500},
    'al-hikmah': {'delivery_time': '20 - 40 Mins', 'price': 1000},
    },
    'University Of Lagos': {
    'unilag': {'delivery_time': '20 - 30 Mins', 'price': 150},
    'unilorin': {'delivery_time': '1 - 2 Days', 'price': 350},
    'lasu': {'delivery_time': '20 - 40 Mins', 'price': 250},
    'al-hikmah': {'delivery_time': '1 - 2', 'price': 350},
    },
    'Lagos State University': {
    'unilag': {'delivery_time': '20 - 40 Mins', 'price': 250},
    'unilorin': {'delivery_time': '2 - 3 Days', 'price': 500},
    'lasu': {'delivery_time': '20 - 30 Mins', 'price': 150},
    'al-hikmah': {'delivery_time': '2 - 3', 'price': 500},
    },
    'AL-Hikmah University': {
    'unilag': {'delivery_time': '1 - 2 Days', 'price': 350},
    'unilorin': {'delivery_time': '20 - 40 mins', 'price': 1000},
    'lasu': {'delivery_time': '2 - 3 Days', 'price': 500},
    'al-hikmah': {'delivery_time': '20 - 30 Mins', 'price': 50},
    },

};
                            



                       ///////////////// market ends here //////////////////////////


                       //////////// hire ////////////////////
const hire_laundry_deilvery_fee = {
    'unilorin': 5,
    'unilag': 10,
    'lasu': 10,
    'al-hikmah': 5,
};








                       ////////// hire ends here //////





// const unilorin_sub_Location = {
//     "subLocation": [
//         {"uni": "Unilorin", "keyword": "campus", "id": 1, "autocompleteTerm": "Campus"},
//         {"uni": "Unilorin", "keyword": "Unilorin", "id": 2, "autocompleteTerm": "Unilorin Gate"},
//         {"uni": "Unilorin", "keyword": "stella", "id": 3, "autocompleteTerm": "Stella Maris"},
//         {"uni": "Unilorin", "keyword": "oke", "id": 4, "autocompleteTerm": "Oke Odo"},
//         {"uni": "Unilorin", "keyword": "oke", "id": 5, "autocompleteTerm": "Oke Oba"},
//         {"uni": "Unilorin", "keyword": "sanrab", "id": 6, "autocompleteTerm": "Sanrab"},
//         {"uni": "Unilorin", "keyword": "mark", "id": 7, "autocompleteTerm": "Mark"},
//         {"uni": "Unilorin", "keyword": "tanke", "id": 8, "autocompleteTerm": "Tanke Ajanaku"},
//         {"uni": "Unilorin", "keyword": "tipper", "id": 9, "autocompleteTerm": "Tipper Garage"},
//     ],
// };


// const unilag_sub_Location = {
//     "subLocation": [
//         {"uni": "Unilag", "keyword": "akoka", "id": 10, "autocompleteTerm": "Akoka"},
//         {"uni": "Unilag", "keyword": "yaba", "id": 11, "autocompleteTerm": "Yaba"},
//         {"uni": "Unilag", "keyword": "onike", "id": 12, "autocompleteTerm": "Onike"},
//     ],
// };

// const lasu_sub_Location = {
//     "subLocation": [
//         {"uni": "Lasu", "keyword": "ojo", "id": 13, "autocompleteTerm": "Ojo"},
//         {"uni": "Lasu", "keyword": "ikotu", "id": 14, "autocompleteTerm": "Ikotu"},
//         {"uni": "Lasu", "keyword": "festac", "id": 15, "autocompleteTerm": "Festac"},
//     ],
// };

// const funaab_sub_Location = {
//     "subLocation": [
//         {"uni": "Funaab", "keyword": "oluwo", "id": 16, "autocompleteTerm": "Oluwo Estate"},
//         {"uni": "Funaab", "keyword": "isolu", "id": 17, "autocompleteTerm": "Isolu"},
//         {"uni": "Funaab", "keyword": "gate", "id": 18, "autocompleteTerm": "Gate"},
//         {"uni": "Funaab", "keyword": "camp", "id": 19, "autocompleteTerm": "Camp"},
//         {"uni": "Funaab", "keyword": "cele", "id": 20, "autocompleteTerm": "Cele"},
//     ],
// };

// const kwara_poly_sub_Location = {
//     "subLocation": [
//         {"uni": "KwaraPloy", "keyword": "gate", "id": 21, "autocompleteTerm": "Ploy Gate"},
//         {"uni": "KwaraPloy", "keyword": "sango", "id": 22, "autocompleteTerm": "Sango"},
//         {"uni": "KwaraPloy", "keyword": "kulendu", "id": 23, "autocompleteTerm": "Kulendu"},
//         {"uni": "KwaraPloy", "keyword": "oyun", "id": 24, "autocompleteTerm": "Oyun"},
//         {"uni": "KwaraPloy", "keyword": "oke", "id": 25, "autocompleteTerm": "Oke Osi"},
//     ],
// };

// const all_location = {
//     "subLocation": [
//         {"uni": "Unilorin", "keyword": "campus", "id": 1, "autocompleteTerm": "Campus"},
//         {"uni": "Unilorin", "keyword": "Unilorin", "id": 2, "autocompleteTerm": "Unilorin Gate"},
//         {"uni": "Unilorin", "keyword": "stella", "id": 3, "autocompleteTerm": "Stella Maris"},
//         {"uni": "Unilorin", "keyword": "oke", "id": 4, "autocompleteTerm": "Oke Odo"},
//         {"uni": "Unilorin", "keyword": "oke", "id": 5, "autocompleteTerm": "Oke Oba"},
//         {"uni": "Unilorin", "keyword": "sanrab", "id": 6, "autocompleteTerm": "Sanrab"},
//         {"uni": "Unilorin", "keyword": "mark", "id": 7, "autocompleteTerm": "Mark"},
//         {"uni": "Unilorin", "keyword": "tanke", "id": 8, "autocompleteTerm": "Tanke Ajanaku"},
//         {"uni": "Unilorin", "keyword": "tipper", "id": 9, "autocompleteTerm": "Tipper Garage"},
//         {"uni": "Unilag", "keyword": "akoka", "id": 10, "autocompleteTerm": "Akoka"},
//         {"uni": "Unilag", "keyword": "yaba", "id": 11, "autocompleteTerm": "Yaba"},
//         {"uni": "Unilag", "keyword": "onike", "id": 12, "autocompleteTerm": "Onike"},
//         {"uni": "Lasu", "keyword": "ojo", "id": 13, "autocompleteTerm": "Ojo"},
//         {"uni": "Lasu", "keyword": "ikotu", "id": 14, "autocompleteTerm": "Ikotu"},
//         {"uni": "Lasu", "keyword": "festac", "id": 15, "autocompleteTerm": "Festac"},
//         {"uni": "Funaab", "keyword": "oluwo", "id": 16, "autocompleteTerm": "Oluwo Estate"},
//         {"uni": "Funaab", "keyword": "isolu", "id": 17, "autocompleteTerm": "Isolu"},
//         {"uni": "Funaab", "keyword": "gate", "id": 18, "autocompleteTerm": "Gate"},
//         {"uni": "Funaab", "keyword": "camp", "id": 19, "autocompleteTerm": "Camp"},
//         {"uni": "Funaab", "keyword": "cele", "id": 20, "autocompleteTerm": "Cele"},
//         {"uni": "KwaraPloy", "keyword": "gate", "id": 21, "autocompleteTerm": "Ploy Gate"},
//         {"uni": "KwaraPloy", "keyword": "sango", "id": 22, "autocompleteTerm": "Sango"},
//         {"uni": "KwaraPloy", "keyword": "kulendu", "id": 23, "autocompleteTerm": "Kulendu"},
//         {"uni": "KwaraPloy", "keyword": "oyun", "id": 24, "autocompleteTerm": "Oyun"},
//         {"uni": "KwaraPloy", "keyword": "oke", "id": 25, "autocompleteTerm": "Oke Osi"},
//     ],
// };

// const unilorin_food_location_list = [
//     'Unilorin PS', 'School Gas', 'Stella Maris', 'Oke Odo', 'Oko Oba', 'Tanke Ajanaku', 'Big Boy', 'Sanrab',
//          'Mark', 'NNPC', 'Tipper Garage ', 'Pipeline', 'F Division ', 'Tanke Junction ', 'Fate', 'Basin'
// ];


  


// const food_delivery_price_info = {
//     'unilorin': {
//         'onCampus' : {
//             1: 50,
//             2: 50,
//             3: 50,
//             4: 100,
//             5: 100,
//             6: 100,
//             7: 150,
//             8: 150,
//             9: 150,
//             10: 150,
//         },
//         'sameLocation' : {
//             1: 50,
//             2: 50,
//             3: 100,
//             4:100,
//             5:150,
//             6:150,
//             7:200,
//             8:200,
//             9:1250,
//             10:250,
//         },
//         'differentLocation' : {
//             1: 100,
//             2: 100,
//             3: 150,
//             4:150,
//             5:200,
//             6:200,
//             7:250,
//             8:250,
//             9:300,
//             10:300,
//         }
//     },
// };

const coin_fee = {
    'coinFee': 100,
};



// exports.unilorin_sub_Location = unilorin_sub_Location;

exports.search_key_hostel = search_key_hostel;

exports.unilorin_area_name = unilorin_area_name;
exports.unilag_area_name = unilag_area_name;
exports.Al_Hikmah_area_name = Al_Hikmah_area_name;
exports.Lasu_area_name = Lasu_area_name;


// exports.unilag_sub_Location = unilag_sub_Location;
// exports.lasu_sub_Location = lasu_sub_Location;
// exports.funaab_sub_Location = funaab_sub_Location;
// exports.kwara_poly_sub_Location = kwara_poly_sub_Location;
exports.all_location = all_location;
// exports.unilorin_food_location_list = unilorin_food_location_list;
exports.market_delivery_info = market_delivery_info;
exports.hire_laundry_deilvery_fee = hire_laundry_deilvery_fee;
exports.food_delivery_price_info = food_delivery_price_info;
exports.coin_fee = coin_fee;
