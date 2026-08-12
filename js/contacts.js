/**
 * contacts.js
 * ------------------------------------------------------------
 * Static lookup used for the checkout autocomplete. Typing 2+
 * characters into Roll Number or Full Name suggests a match from
 * this list; selecting one pre-fills Roll/Name/Phone/Email/Batch,
 * all still editable afterward. No match = type everything manually,
 * same as before.
 */

const CONTACTS = [
  {
    "name": "Aadarsh Kumar",
    "roll": "B25321",
    "phone": "9801558058",
    "email": "b25321@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aakash Lakhangaonkar",
    "roll": "B25301",
    "phone": "6355182728",
    "email": "aakashvl.24700@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aarati Goenka",
    "roll": "B25302",
    "phone": "9933455298",
    "email": "b25302@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aaron Byron Pereira",
    "roll": "B25322",
    "phone": "8097490409",
    "email": "b25322@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aaryman Kaul",
    "roll": "B25395",
    "phone": "7506087435",
    "email": "b25395@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aastha Kumari",
    "roll": "B25396",
    "phone": "9905308227",
    "email": "b25396@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aayush Dani",
    "roll": "B25378",
    "phone": "9619376633",
    "email": "b25378@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aayushi Luthra",
    "roll": "B25379",
    "phone": "9650841699",
    "email": "b25379@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aayushi Rana",
    "roll": "B25441",
    "phone": "9817073243",
    "email": "b25441@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhinav Dixit",
    "roll": "B25442",
    "phone": "7388108662",
    "email": "thepageabhi@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhishek Kumar",
    "roll": "B25462",
    "phone": "7033937019",
    "email": "b25462@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhishek P Jiju",
    "roll": "B25443",
    "phone": "9207866224",
    "email": "b25443@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhishek Pratap Singh Rajawat",
    "roll": "B25323",
    "phone": "9479310398",
    "email": "b25323@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhishek Soni",
    "roll": "B25343",
    "phone": "9315469949",
    "email": "abhishek.xlri343@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhishek Tiwari",
    "roll": "B25380",
    "phone": "9997703555",
    "email": "b25380@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Abhitej Voruganti",
    "roll": "B25397",
    "phone": "8801176176",
    "email": "b25397@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aditya Atre",
    "roll": "B25463",
    "phone": "9321782105",
    "email": "b25463@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aditya Aware",
    "roll": "B25444",
    "phone": "7249571201",
    "email": "b25444@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aditya Bhattacharya",
    "roll": "B25303",
    "phone": "6287119886",
    "email": "b25303@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Akhilesh K S",
    "roll": "B25344",
    "phone": "6238646113",
    "email": "b25344@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Akshat Jain",
    "roll": "B25381",
    "phone": "9210775414",
    "email": "b25381@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Akshat Pagaria",
    "roll": "B25361",
    "phone": "8094583183",
    "email": "b25361@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Anamay Ghate",
    "roll": "B25445",
    "phone": "9167393345",
    "email": "b25445@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ananya Mittal",
    "roll": "B25464",
    "phone": "7045815851",
    "email": "ananya.mittal178@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Anjali Jain",
    "roll": "B25324",
    "phone": "6207618047",
    "email": "b25324@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Anjali Singh",
    "roll": "B25398",
    "phone": "7979917518",
    "email": "b25398@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Anmol Devnani",
    "roll": "B25446",
    "phone": "8237829615",
    "email": "b25446@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ansh Gujral",
    "roll": "B25325",
    "phone": "8800805590",
    "email": "b25325@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Anushka Agrawal",
    "roll": "B25345",
    "phone": "8447125360",
    "email": "b25345@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Anya Jain",
    "roll": "B25326",
    "phone": "6267021535",
    "email": "b25326@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Apoorva Sinha",
    "roll": "B25399",
    "phone": "9717984409",
    "email": "b25399@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Archith G",
    "roll": "B25382",
    "phone": "7306292197",
    "email": "archithg002@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Arush Singhal",
    "roll": "B25383",
    "phone": "7251803964",
    "email": "b25383@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ashish Kumar",
    "roll": "B25447",
    "phone": "7739333341",
    "email": "b25447@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Atharva Karhade",
    "roll": "B25465",
    "phone": "7083795563",
    "email": "b25465@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Avantika Shailesh Singh",
    "roll": "B25421",
    "phone": "9892063749",
    "email": "b25421@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Avdhi Mehta",
    "roll": "B25358",
    "phone": "9891165755",
    "email": "avdhimehta143@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ayush Aggarwal",
    "roll": "B25400",
    "phone": "8766311498",
    "email": "b25400@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ayush Singh Negi",
    "roll": "B25448",
    "phone": "8178416816",
    "email": "b25448@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Bathrinath S",
    "roll": "B25346",
    "phone": "7550168242",
    "email": "b25346@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Bhagyashree Choraria",
    "roll": "B25401",
    "phone": "9831525110",
    "email": "b25401@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Bhavana Narayan",
    "roll": "B25402",
    "phone": "9324300508",
    "email": "b25402@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Chaitanya Sharma",
    "roll": "B25347",
    "phone": "9990576590",
    "email": "b25347@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Chhavi Munjal",
    "roll": "B25384",
    "phone": "8607409023",
    "email": "b25384@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Debashish Das",
    "roll": "B25348",
    "phone": "9087005337",
    "email": "b25348@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "DESAI KARANAM YASHASWI SAI MANOJ",
    "roll": "B25403",
    "phone": "6385884120",
    "email": "b25403@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Devashish Agrawal",
    "roll": "B25466",
    "phone": "7534041448",
    "email": "agrawaldevashish@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Devika Tyagi",
    "roll": "B25304",
    "phone": "7600132339",
    "email": "ehhh1502@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Dhruv Aggarwal",
    "roll": "B25362",
    "phone": "9319944001",
    "email": "b25362@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Divyanu Baheti",
    "roll": "B25467",
    "phone": "6375155738",
    "email": "b25467@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Faria Choudhry",
    "roll": "B25327",
    "phone": "9650084762",
    "email": "b25327@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Gauri Wayal",
    "roll": "B25310",
    "phone": "9967277251",
    "email": "b25310@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Gautam Aggarwal",
    "roll": "B25404",
    "phone": "8847071746",
    "email": "b25404@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Govind Singh",
    "roll": "B25424",
    "phone": "8452867782",
    "email": "techgovind360@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Harshit Kumar",
    "roll": "B25359",
    "phone": "7903101151",
    "email": "b25359@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Hiranya Karnatak",
    "roll": "B25405",
    "phone": "9599951175",
    "email": "b25405@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Hrishabh Thakur",
    "roll": "B25468",
    "phone": "7727084673",
    "email": "b25468@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ishaben Manilal Solanki",
    "roll": "B25305",
    "phone": "9327830585",
    "email": "b25305@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ishita Bhatnagar",
    "roll": "B25385",
    "phone": "6264437204",
    "email": "ishita.bhatnagar21@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ishita Delish",
    "roll": "B25469",
    "phone": "8281539757",
    "email": "b25469@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Janmejai Singh Minhas",
    "roll": "B25349",
    "phone": "8527561880",
    "email": "b25349@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Jasmin Priya",
    "roll": "B25363",
    "phone": "8249124343",
    "email": "b25363@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Jitendra Veer",
    "roll": "B25425",
    "phone": "9649050640",
    "email": "b25425@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Kashish Jain",
    "roll": "B25350",
    "phone": "9837275490",
    "email": "jainkashish510@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Khushi Gupta",
    "roll": "B25306",
    "phone": "9625785156",
    "email": "b25306@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Khushi Mittal",
    "roll": "B25364",
    "phone": "8447563949",
    "email": "b25364@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Khushi Srivastava",
    "roll": "B25426",
    "phone": "7042111737",
    "email": "b25426@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Kirtika Singh Tanwar",
    "roll": "B25449",
    "phone": "7232870511",
    "email": "b25449@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "KISHLAY KISHORE",
    "roll": "B25328",
    "phone": "8789731762",
    "email": "b25328@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Kunal Verma",
    "roll": "B25386",
    "phone": "9752011133",
    "email": "b25386@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Lavanya Krishan Sharma",
    "roll": "B25470",
    "phone": "9466290566",
    "email": "b25470@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mahi Nilesh Thakkar",
    "roll": "B25329",
    "phone": "9824347066",
    "email": "b25329@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Manas Agrawal",
    "roll": "B25407",
    "phone": "9406976777",
    "email": "b25407@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Manav Pabari",
    "roll": "B25408",
    "phone": "9428003003",
    "email": "b25408@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mansi Avinash Naik",
    "roll": "B25450",
    "phone": "7888018433",
    "email": "b25450@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Manya Madhur",
    "roll": "B25307",
    "phone": "9810717707",
    "email": "b25307@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mayank Garg",
    "roll": "B25427",
    "phone": "8196995428",
    "email": "b25427@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mayank Jain",
    "roll": "B25308",
    "phone": "7030332832",
    "email": "b25308@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mayank Sanghai",
    "roll": "B25309",
    "phone": "9073276377",
    "email": "b25309@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mayank Shukla",
    "roll": "B25409",
    "phone": "7693047048",
    "email": "b25409@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Meenakshi Pandey",
    "roll": "B25365",
    "phone": "7982586029",
    "email": "b25365@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Megha Ghosh Dastidar",
    "roll": "B25428",
    "phone": "9474676690",
    "email": "b25428@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mitali Sehgal",
    "roll": "B25429",
    "phone": "8505931818",
    "email": "b25429@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Mrityunjay Mohanty",
    "roll": "B25437",
    "phone": "8984439443",
    "email": "mmohanty655@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Nandika Chadha",
    "roll": "B25351",
    "phone": "9911760904",
    "email": "b25351@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Neeharika Tumuluri",
    "roll": "B25366",
    "phone": "8660934381",
    "email": "b25366@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Neella Sowmya",
    "roll": "B25476",
    "phone": "8008940708",
    "email": "n.sowmya4477@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Nikhil Natarajan Thirunayam",
    "roll": "B25471",
    "phone": "9819721324",
    "email": "b25471@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Nimish Mangee",
    "roll": "B25367",
    "phone": "9643752462",
    "email": "b25367@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Omkar Edgaonkar",
    "roll": "B25451",
    "phone": "8483957449",
    "email": "omkaredgaonkar@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Osman Baig",
    "roll": "B25330",
    "phone": "7045605240",
    "email": "b25330@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pandya Siddhant Maulik",
    "roll": "B25387",
    "phone": "6358840424",
    "email": "b25387@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Peddada Srinivasa Varshith",
    "roll": "B25438",
    "phone": "9963299800",
    "email": "b25438@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pradeep kumar dey",
    "roll": "B25420",
    "phone": "8860766578",
    "email": "pradeepdeyku@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Praharsha Nuti",
    "roll": "B25452",
    "phone": "9920883541",
    "email": "b25452@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pranay Kumar",
    "roll": "B25423",
    "phone": "9654566990",
    "email": "b25423@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pranshu Hooda",
    "roll": "B25430",
    "phone": "8307478538",
    "email": "b25430@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Prantaran Kashyap",
    "roll": "B25311",
    "phone": "6000498733",
    "email": "b25311@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Prateek Kumar Gupta",
    "roll": "B25352",
    "phone": "9029857759",
    "email": "b25352@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Prateeksha Jha",
    "roll": "B25388",
    "phone": "6260126154",
    "email": "b25388@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pratibha Agarwal",
    "roll": "B25389",
    "phone": "9432306528",
    "email": "b25389@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pratik Gandhi",
    "roll": "B25472",
    "phone": "9146976415",
    "email": "onpratikg@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pratyay Chaturvedi",
    "roll": "B25453",
    "phone": "7021225363",
    "email": "b25453@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Priya Yadav",
    "roll": "B25360",
    "phone": "9710167157",
    "email": "b25360@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Priyal Jain",
    "roll": "B25331",
    "phone": "7000403637",
    "email": "jainpriyal0607@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Priyanshu Mukherjee",
    "roll": "B25368",
    "phone": "9234772511",
    "email": "b25368@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Pulkit Jain",
    "roll": "B25369",
    "phone": "9880022641",
    "email": "b25369@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Purbayan Palit",
    "roll": "B25454",
    "phone": "9819801444",
    "email": "b25454@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "R Ujwal Bharadwaj",
    "roll": "B25312",
    "phone": "9481523615",
    "email": "b25312@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Rabnoor Kaur",
    "roll": "B25332",
    "phone": "9319782682",
    "email": "b25332@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Raj Gupta",
    "roll": "B25390",
    "phone": "8981015573",
    "email": "b25390@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "RAJAT GUPTA",
    "roll": "B25410",
    "phone": "9811814417",
    "email": "b25410@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Rajneesh Jain",
    "roll": "B25431",
    "phone": "9320440234",
    "email": "b25431@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Ramanpreet Kaur",
    "roll": "B25432",
    "phone": "8877887868",
    "email": "b25432@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Rounak dwary",
    "roll": "B25313",
    "phone": "6203744794",
    "email": "b25313@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Rucha Bhosale",
    "roll": "B25422",
    "phone": "9604012587",
    "email": "b25422@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Rupesh Kumar",
    "roll": "B25411",
    "phone": "6201116197",
    "email": "b25411@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Rushil Sahni",
    "roll": "B25455",
    "phone": "9611073311",
    "email": "b25455@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sachchit Nair",
    "roll": "B25314",
    "phone": "9819939440",
    "email": "b25314@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sachin dey",
    "roll": "B25333",
    "phone": "8128781445",
    "email": "b25333@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sadhvi Pandey",
    "roll": "B25370",
    "phone": "9582719862",
    "email": "b25370@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sagar Ghorpade",
    "roll": "B25473",
    "phone": "8308253035",
    "email": "b25473@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sahil Goyal",
    "roll": "B25433",
    "phone": "9463841176",
    "email": "sahil1465.sg@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Saladi Vamsi Krishna",
    "roll": "B25315",
    "phone": "7396670700",
    "email": "b25315@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Saloni Nazare",
    "roll": "B25334",
    "phone": "7738089100",
    "email": "b25334@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Samyuktha Navin Menon",
    "roll": "B25391",
    "phone": "9980982404",
    "email": "b25391@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sanjeet Shrivastava",
    "roll": "B25434",
    "phone": "9891075476",
    "email": "b25434@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sarah Dhamija",
    "roll": "B25474",
    "phone": "7814980760",
    "email": "b25474@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sarang Bendre",
    "roll": "B25336",
    "phone": "8237871151",
    "email": "b25336@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sarang Kawade",
    "roll": "B25335",
    "phone": "8605016133",
    "email": "b25335@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Saraswat Majumder",
    "roll": "B25316",
    "phone": "9082228609",
    "email": "b25316@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Satwik Bhargav Rath",
    "roll": "B25353",
    "phone": "8599057446",
    "email": "b25353@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Satyam Singh",
    "roll": "B25354",
    "phone": "6354758413",
    "email": "b25354@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Saubhagya Sharma",
    "roll": "B25412",
    "phone": "9891285835",
    "email": "b25412@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Senthil Sidharth",
    "roll": "B25372",
    "phone": "9458949231",
    "email": "b25372@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shashwat Ghildiyal",
    "roll": "B25373",
    "phone": "9557571107",
    "email": "b25373@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shashwat Tripathi",
    "roll": "B25413",
    "phone": "6393178491",
    "email": "b25413@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shaurya Singh Jamwal",
    "roll": "B25374",
    "phone": "9078448522",
    "email": "b25374@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shauryadeep Lall",
    "roll": "B25392",
    "phone": "9465187700",
    "email": "b25392@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shiny Horo",
    "roll": "B25435",
    "phone": "8953286837",
    "email": "b25435@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shivang Goria",
    "roll": "B25456",
    "phone": "9076568514",
    "email": "b25456@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "SHIVANK SAHA",
    "roll": "B25436",
    "phone": "9810607821",
    "email": "sahashivank@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shivansh Singh",
    "roll": "B25475",
    "phone": "7400316279",
    "email": "b25475@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shlok Bhagwat",
    "roll": "B25457",
    "phone": "9824117255",
    "email": "b25457@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shrestha Mishra",
    "roll": "B25337",
    "phone": "9348263835",
    "email": "b25337@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shreya Monga",
    "roll": "B25317",
    "phone": "8607710303",
    "email": "b25317@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shreya Tiwari",
    "roll": "B25338",
    "phone": "9990521212",
    "email": "b25338@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Shubham",
    "roll": "B25355",
    "phone": "7979877921",
    "email": "b25355@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Siddhant Sabharwal",
    "roll": "B25414",
    "phone": "9967922091",
    "email": "siddhantsabharwal1@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Siddharth Kumar Tiwari",
    "roll": "B25320",
    "phone": "6260609153",
    "email": "b25320@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Smriti Jha",
    "roll": "B25415",
    "phone": "8692091182",
    "email": "b25415@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sneh Dhanuka",
    "roll": "B25375",
    "phone": "7605881029",
    "email": "b25375@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Snehashis Pattanayak",
    "roll": "B25393",
    "phone": "9852554103",
    "email": "b25393@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Soumya Walia",
    "roll": "B25406",
    "phone": "7595904617",
    "email": "b25406@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Subhadeep Bakshi",
    "roll": "B25477",
    "phone": "9932137702",
    "email": "b25477@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Sudeshna Saha",
    "roll": "B25458",
    "phone": "7908181442",
    "email": "b25458@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Suraj Baranwal",
    "roll": "B25318",
    "phone": "8887971196",
    "email": "b25318@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Suyog Sachin Shah",
    "roll": "B25416",
    "phone": "9769314965",
    "email": "b25416@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Swetha R",
    "roll": "B25459",
    "phone": "8408911411",
    "email": "b25459@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Tanish Mathur",
    "roll": "B25339",
    "phone": "7023017411",
    "email": "b25339@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Tanishk Thilakan",
    "roll": "B25376",
    "phone": "9820591756",
    "email": "b25376@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Tushar Deshwal",
    "roll": "B25460",
    "phone": "9413143716",
    "email": "b25460@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Udayini Gupta",
    "roll": "B25340",
    "phone": "8800445375",
    "email": "udayinigupta@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vamika Gupta",
    "roll": "B25341",
    "phone": "8750857929",
    "email": "b25341@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vanshika",
    "roll": "B25356",
    "phone": "8360716396",
    "email": "b25356@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vanshita Agarwal",
    "roll": "B25394",
    "phone": "9100683885",
    "email": "b25394@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Varshini Venkatesan",
    "roll": "B25377",
    "phone": "7358181462",
    "email": "b25377@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vedagya Saraswat",
    "roll": "B25461",
    "phone": "8501948195",
    "email": "b25461@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vedanshi Tripathi",
    "roll": "B25342",
    "phone": "9415855227",
    "email": "b25342@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vibhanshu Kumar",
    "roll": "B25417",
    "phone": "9672280176",
    "email": "b25417@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Vivek Gupta",
    "roll": "B25478",
    "phone": "8999839000",
    "email": "b25478@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yash Agarwal",
    "roll": "B25319",
    "phone": "9667116877",
    "email": "b25319@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yash Brahmbhatt",
    "roll": "B25357",
    "phone": "9769164696",
    "email": "b25357@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yash Kushwaha",
    "roll": "B25418",
    "phone": "8303891852",
    "email": "b25418@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yash Mathur",
    "roll": "B25419",
    "phone": "9667047475",
    "email": "b25419@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yashas Tarakaram",
    "roll": "B25440",
    "phone": "7483241825",
    "email": "b25440@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yashasvi Dhamija",
    "roll": "B25439",
    "phone": "8454972864",
    "email": "yashasvidhamija2420@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yashwardhan Agarwal",
    "roll": "B25371",
    "phone": "9084404531",
    "email": "yashwardhanagarwal.6@gmail.com",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yatin Kapoor",
    "roll": "B25479",
    "phone": "9306274319",
    "email": "b25479@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Yovel P Mathew",
    "roll": "B25480",
    "phone": "7206008742",
    "email": "b25480@astra.xlri.ac.in",
    "batch": "BM 2025-27"
  },
  {
    "name": "Aakash Jethwani",
    "roll": "B26301",
    "phone": "7568348317",
    "email": "b26301@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aakash Kumar",
    "roll": "B26361",
    "phone": "8130061983",
    "email": "b26361@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aaratrika Santra",
    "roll": "B26302",
    "phone": "8987842059",
    "email": "b26302@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aaryan Kataria",
    "roll": "B26421",
    "phone": "7015224175",
    "email": "b26421@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Abhinav Mehta",
    "roll": "B26303",
    "phone": "9899435200",
    "email": "b26303@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Abhishek Kumar Singh",
    "roll": "B26362",
    "phone": "7044017633",
    "email": "b26362@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Achintya Priyam",
    "roll": "B26422",
    "phone": "9599507021",
    "email": "b26422@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditi Agarwal",
    "roll": "B26363",
    "phone": "9460068893",
    "email": "b26363@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya harsh singh bhadouria",
    "roll": "B26304",
    "phone": "7024385483",
    "email": "b26304@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya Jain",
    "roll": "B26364",
    "phone": "8586867974",
    "email": "b26364@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya Paul",
    "roll": "B26423",
    "phone": "9143126724",
    "email": "b26423@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya Phulre",
    "roll": "B26305",
    "phone": "9407220585",
    "email": "b26305@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya Shihoorkar",
    "roll": "B26365",
    "phone": "7987880237",
    "email": "b26365@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya Tiwari",
    "roll": "B26424",
    "phone": "9821496522",
    "email": "b26424@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aditya Vohra",
    "roll": "B26306",
    "phone": "9870536078",
    "email": "b26306@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Akanksha Dangri",
    "roll": "B26425",
    "phone": "9910279009",
    "email": "b26425@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Akshat Jain",
    "roll": "B26426",
    "phone": "9891041626",
    "email": "b26426@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Akshit Mehrotra",
    "roll": "B26308",
    "phone": "9810439795",
    "email": "b26308@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Amartya Trivedi",
    "roll": "B26367",
    "phone": "7355646913",
    "email": "b26367@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anadi Garg",
    "roll": "B26427",
    "phone": "9414872071",
    "email": "b26427@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anant Sharma",
    "roll": "B26309",
    "phone": "9454372085",
    "email": "b26309@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ananya Mishra",
    "roll": "B26428",
    "phone": "6307617255",
    "email": "b26428@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Angad Setia",
    "roll": "B26369",
    "phone": "8239502417",
    "email": "b26369@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aniket Singh",
    "roll": "B26371",
    "phone": "8920934702",
    "email": "b26371@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aniket Singh",
    "roll": "B26429",
    "phone": "8826718798",
    "email": "b26429@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anirban Samanta",
    "roll": "B26310",
    "phone": "9830586038",
    "email": "b26310@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anish Tripathi",
    "roll": "B26370",
    "phone": "8840618845",
    "email": "b26370@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anjnay Sethi",
    "roll": "B26430",
    "phone": "9871032255",
    "email": "b26430@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ankur Singh",
    "roll": "B26311",
    "phone": "6392813797",
    "email": "b26311@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ansh Joshi",
    "roll": "B26431",
    "phone": "8755226425",
    "email": "b26431@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ansh Sharma",
    "roll": "B26312",
    "phone": "6264266292",
    "email": "b26312@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anshul Singh",
    "roll": "B26432",
    "phone": "9170062005",
    "email": "b26432@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anshuman Singh",
    "roll": "B26372",
    "phone": "9415049666",
    "email": "b26372@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Anushka Saxena",
    "roll": "B26373",
    "phone": "7303611722",
    "email": "b26373@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Apeksha Gurudatta Hegde",
    "roll": "B26433",
    "phone": "9004882360",
    "email": "b26433@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "APURV RAJ",
    "roll": "B26434",
    "phone": "6200035280",
    "email": "b26434@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Arnab Mondal",
    "roll": "B26387",
    "phone": "8250384206",
    "email": "b26387@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aryaman Pranav",
    "roll": "B26313",
    "phone": "9958437011",
    "email": "b26313@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Aryan Sharma",
    "roll": "B26374",
    "phone": "7889390695",
    "email": "b26374@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ashli Jain",
    "roll": "B26314",
    "phone": "9560234823",
    "email": "b26314@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ashutosh Kumar Thakur",
    "roll": "B26435",
    "phone": "9608808046",
    "email": "b26435@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ashwin Anand",
    "roll": "B26315",
    "phone": "9313312511",
    "email": "b26315@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ashwin Sheoran",
    "roll": "B26375",
    "phone": "9968317199",
    "email": "b26375@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Atharv Mahesh Gote",
    "roll": "B26316",
    "phone": "8208396182",
    "email": "b26316@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Avnish Tiwari",
    "roll": "B26317",
    "phone": "7597912999",
    "email": "b26317@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ayush Rai",
    "roll": "B26318",
    "phone": "9405180940",
    "email": "b26318@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Bhadra S J",
    "roll": "B26376",
    "phone": "8078455608",
    "email": "b26376@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Charudatta Agnihotri",
    "roll": "B26366",
    "phone": "9518344691",
    "email": "b26366@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Chinmay Chetan Kela",
    "roll": "B26436",
    "phone": "9925823447",
    "email": "b26436@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Chundru Seshayya Rao",
    "roll": "B26319",
    "phone": "9000124788",
    "email": "b26319@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Deep Shekhar",
    "roll": "B26438",
    "phone": "9308465579",
    "email": "b26438@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Dev Kumar",
    "roll": "B26320",
    "phone": "7303818252",
    "email": "b26320@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Dhruv Gangurde",
    "roll": "B26379",
    "phone": "9004224291",
    "email": "b26379@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Dhruv Tuli",
    "roll": "B26439",
    "phone": "9953891858",
    "email": "b26439@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Dipsikha De",
    "roll": "B26321",
    "phone": "6302206805",
    "email": "b26321@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Divya",
    "roll": "B26380",
    "phone": "9877610468",
    "email": "b26380@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Divya Jimmy",
    "roll": "B26440",
    "phone": "9005314450",
    "email": "b26440@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Divyanshu Patnaik",
    "roll": "B26322",
    "phone": "7428625100",
    "email": "b26322@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Diya Sethi",
    "roll": "B26323",
    "phone": "9820807519",
    "email": "b26323@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "G Sahithi Reddy",
    "roll": "B26381",
    "phone": "8897183649",
    "email": "b26381@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Gaurang M Lakhani",
    "roll": "B26441",
    "phone": "9555495557",
    "email": "b26441@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Gouresh Vinay Gargate",
    "roll": "B26382",
    "phone": "9403178636",
    "email": "b26382@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Guna Sundhar S",
    "roll": "B26324",
    "phone": "9789908101",
    "email": "b26324@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Gyanesh",
    "roll": "B26383",
    "phone": "9727520502",
    "email": "b26383@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Harini Tumuluri",
    "roll": "B26442",
    "phone": "7093265222",
    "email": "b26442@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Harsh Chhangani",
    "roll": "B26443",
    "phone": "7821862062",
    "email": "b26443@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Harsh Mishra",
    "roll": "B26325",
    "phone": "6392615411",
    "email": "b26325@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Hitesh Jaisingh",
    "roll": "B26384",
    "phone": "9654458628",
    "email": "b26384@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Isha Goyal",
    "roll": "B26326",
    "phone": "9351856207",
    "email": "b26326@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Isha Sisodia",
    "roll": "B26444",
    "phone": "8448865116",
    "email": "b26444@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ishita Bhatt",
    "roll": "B26385",
    "phone": "8368106016",
    "email": "b26385@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Jatin Kumar Saxena",
    "roll": "B26386",
    "phone": "8004361498",
    "email": "b26386@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Jatin Mayur Panchal",
    "roll": "B26393",
    "phone": "9833256954",
    "email": "b26393@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Jayesh Agarwal",
    "roll": "B26445",
    "phone": "9073115950",
    "email": "b26445@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Jehaan Darbari",
    "roll": "B26378",
    "phone": "9892614171",
    "email": "b26378@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Kanishka Pachaury",
    "roll": "B26446",
    "phone": "7240458125",
    "email": "b26446@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Kartikay Yadav",
    "roll": "B26327",
    "phone": "9810989063",
    "email": "b26327@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Krish Alok Jain",
    "roll": "B26447",
    "phone": "7096441105",
    "email": "b26447@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Krishang Khalasi",
    "roll": "B26328",
    "phone": "9869089505",
    "email": "b26328@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Kriti Bhatia",
    "roll": "B26329",
    "phone": "9818253167",
    "email": "b26329@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Kunal Banthia",
    "roll": "B26388",
    "phone": "7339905560",
    "email": "b26388@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Kushal Rawtani",
    "roll": "B26448",
    "phone": "8349096126",
    "email": "b26448@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "M. Sai Haripriya",
    "roll": "B26390",
    "phone": "9032847274",
    "email": "b26390@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Malladi Sailendra",
    "roll": "B26330",
    "phone": "6303679987",
    "email": "b26330@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Manan Chaudhary",
    "roll": "B26389",
    "phone": "7290885346",
    "email": "b26389@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Manasvi Mishra",
    "roll": "B26331",
    "phone": "6360828662",
    "email": "b26331@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Manya Agrawal",
    "roll": "B26449",
    "phone": "9971960700",
    "email": "b26449@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Mekhla Dutta",
    "roll": "B26332",
    "phone": "8100523997",
    "email": "b26332@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Mihir Jitendra Kulkarni",
    "roll": "B26456",
    "phone": "9579402100",
    "email": "b26456@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Mrunmayi Shekhar Joshi",
    "roll": "B26391",
    "phone": "9623385919",
    "email": "b26391@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Nandagopal T",
    "roll": "B26450",
    "phone": "6238284088",
    "email": "b26450@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Neha Yadav",
    "roll": "B26451",
    "phone": "8700309065",
    "email": "b26451@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Nikhil Kumar",
    "roll": "B26333",
    "phone": "9592949464",
    "email": "b26333@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Nisarg Shah",
    "roll": "B26392",
    "phone": "6354428084",
    "email": "b26392@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Nishant Shah",
    "roll": "B26452",
    "phone": "7045436369",
    "email": "b26452@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Om Kulkarni",
    "roll": "B26334",
    "phone": "8999901162",
    "email": "b26334@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Pavithra Boopalan",
    "roll": "B26335",
    "phone": "9176221834",
    "email": "b26335@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Prabhat Kedia",
    "roll": "B26336",
    "phone": "9832015644",
    "email": "b26336@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Prakhar Gautam",
    "roll": "B26394",
    "phone": "9113199980",
    "email": "b26394@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Prakhar Sinha",
    "roll": "B26395",
    "phone": "9099002830",
    "email": "b26395@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Pranava H S",
    "roll": "B26396",
    "phone": "9480423398",
    "email": "b26396@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Pranay Mathur",
    "roll": "B26474",
    "phone": "8287697724",
    "email": "b26474@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Praneet Mishra",
    "roll": "B26337",
    "phone": "9398009707",
    "email": "b26337@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Prasannah Seshagiri",
    "roll": "B26454",
    "phone": "9282110673",
    "email": "b26454@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Prateek Mani Tripathi",
    "roll": "B26338",
    "phone": "9967731318",
    "email": "b26338@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Pravi Saxena",
    "roll": "B26397",
    "phone": "9685052067",
    "email": "b26397@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Preeti Dey",
    "roll": "B26455",
    "phone": "6370524208",
    "email": "b26455@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Priyanka Shaw",
    "roll": "B26339",
    "phone": "9330938689",
    "email": "b26339@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Purva Bajpai",
    "roll": "B26398",
    "phone": "9909977018",
    "email": "b26398@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Raj Chaudhary",
    "roll": "B26399",
    "phone": "7669566654",
    "email": "b26399@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Raj Shah",
    "roll": "B26406",
    "phone": "9484422676",
    "email": "b26406@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ravi Sovesh",
    "roll": "B26340",
    "phone": "7683894051",
    "email": "b26340@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "REUBEN SEWAK",
    "roll": "B26400",
    "phone": "8800315357",
    "email": "b26400@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Rishabh Sancheti",
    "roll": "B26457",
    "phone": "7002355563",
    "email": "b26457@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Rishikesh Rane",
    "roll": "B26341",
    "phone": "9021732132",
    "email": "b26341@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ritik Thakur",
    "roll": "B26401",
    "phone": "7087209015",
    "email": "b26401@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ritika Sinha",
    "roll": "B26342",
    "phone": "8008100797",
    "email": "b26342@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ritwik Mittra",
    "roll": "B26458",
    "phone": "9650284214",
    "email": "b26458@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Ritwik Rai",
    "roll": "B26343",
    "phone": "9152033808",
    "email": "b26343@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Rohith Samuel",
    "roll": "B26459",
    "phone": "9952566141",
    "email": "b26459@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Rudrakshi Ajit Singh",
    "roll": "B26344",
    "phone": "7567610119",
    "email": "b26344@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Rugved Kajgikar",
    "roll": "B26345",
    "phone": "9022866382",
    "email": "b26345@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "S Aravind Ramnath Pai",
    "roll": "B26402",
    "phone": "9447465363",
    "email": "b26402@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sahasrajit Sarkar",
    "roll": "B26460",
    "phone": "8454885987",
    "email": "b26460@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sahil Pandit",
    "roll": "B26403",
    "phone": "8277051213",
    "email": "b26403@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Saksham Aggarwal",
    "roll": "B26368",
    "phone": "9310277675",
    "email": "b26368@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Saksham Jain",
    "roll": "B26346",
    "phone": "9267940230",
    "email": "b26346@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Saloni Munjal",
    "roll": "B26461",
    "phone": "8527764188",
    "email": "b26461@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Samruddhi Deven Bora",
    "roll": "B26462",
    "phone": "7757843227",
    "email": "b26462@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sanchita Sahni",
    "roll": "B26404",
    "phone": "7011268807",
    "email": "b26404@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sanya Vadhera",
    "roll": "B26347",
    "phone": "9811561337",
    "email": "b26347@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sarannya Dutta",
    "roll": "B26348",
    "phone": "9163089497",
    "email": "b26348@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sarthak Singh",
    "roll": "B26463",
    "phone": "9826103741",
    "email": "b26463@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sattwik Palai",
    "roll": "B26349",
    "phone": "9937139100",
    "email": "b26349@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Saumya Gupta",
    "roll": "B26482",
    "phone": "9680318557",
    "email": "b26482@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shail Siddharth Jain",
    "roll": "B26464",
    "phone": "9892352483",
    "email": "b26464@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sharvari Rajendra Sawant",
    "roll": "B26405",
    "phone": "9422502131",
    "email": "b26405@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shashank Bhardwaj",
    "roll": "B26350",
    "phone": "9958099012",
    "email": "b26350@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shashank Gupta",
    "roll": "B26407",
    "phone": "9111633169",
    "email": "b26407@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shinosha Rajesh Jain",
    "roll": "B26466",
    "phone": "7758005681",
    "email": "b26466@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shivam Garg",
    "roll": "B26351",
    "phone": "8505880643",
    "email": "b26351@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shivam Pandey",
    "roll": "B26408",
    "phone": "9454084621",
    "email": "b26408@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shivangi Ajay",
    "roll": "B26352",
    "phone": "9435132291",
    "email": "b26352@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shobhna",
    "roll": "B26409",
    "phone": "9478640098",
    "email": "b26409@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shreesh Gupta",
    "roll": "B26467",
    "phone": "8826731936",
    "email": "b26467@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shreya Pandey",
    "roll": "B26468",
    "phone": "9628587829",
    "email": "b26468@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "SHREYA TIWARY",
    "roll": "B26353",
    "phone": "9304117753",
    "email": "b26353@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shubham Gaur",
    "roll": "B26354",
    "phone": "8178109255",
    "email": "b26354@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Shubhanshi Rathi",
    "roll": "B26307",
    "phone": "9201098116",
    "email": "b26307@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Smarika Singh",
    "roll": "B26410",
    "phone": "7389644203",
    "email": "b26410@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sonal Keni",
    "roll": "B26469",
    "phone": "8861612934",
    "email": "b26469@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sudharsan Gokul S",
    "roll": "B26411",
    "phone": "9629861838",
    "email": "b26411@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sunny Kumar",
    "roll": "B26470",
    "phone": "6201422580",
    "email": "b26470@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "SUR GUPTA",
    "roll": "B26355",
    "phone": "9560107279",
    "email": "b26355@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sushant Sharda",
    "roll": "B26481",
    "phone": "9818748276",
    "email": "b26481@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Sushmita Mishra",
    "roll": "B26412",
    "phone": "9062140447",
    "email": "b26412@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Suvangi Pattnaik",
    "roll": "B26471",
    "phone": "9937028081",
    "email": "b26471@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Swarn Mittal",
    "roll": "B26356",
    "phone": "9193009293",
    "email": "b26356@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Tanya aggarwal",
    "roll": "B26357",
    "phone": "7011887828",
    "email": "b26357@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Tirthesh Aggarwal",
    "roll": "B26413",
    "phone": "9950314500",
    "email": "b26413@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Trisha Singhal",
    "roll": "B26414",
    "phone": "9810171314",
    "email": "b26414@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Tushar Singla",
    "roll": "B26472",
    "phone": "7017182727",
    "email": "b26472@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Tushar Vasuja",
    "roll": "B26358",
    "phone": "9099411974",
    "email": "b26358@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "TUSHNA JAMSHED DARUKHANAWALLA",
    "roll": "B26437",
    "phone": "9869323301",
    "email": "b26437@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Udhav Chadha",
    "roll": "B26415",
    "phone": "8585967019",
    "email": "b26415@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Utkarsh Anand",
    "roll": "B26473",
    "phone": "9142207826",
    "email": "b26473@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "VAISHNAVI PRIYA",
    "roll": "B26475",
    "phone": "9934273382",
    "email": "b26475@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vedant Nawange",
    "roll": "B26416",
    "phone": "9594623257",
    "email": "b26416@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vidhi Jain",
    "roll": "B26465",
    "phone": "9811153844",
    "email": "b26465@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "VIGHNESHWAR J",
    "roll": "B26476",
    "phone": "9442733080",
    "email": "b26476@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vignesh Santosh Nayak",
    "roll": "B26359",
    "phone": "8660747821",
    "email": "b26359@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vinayak Kala",
    "roll": "B26417",
    "phone": "7060149220",
    "email": "b26417@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vinayak S",
    "roll": "B26477",
    "phone": "9207985326",
    "email": "b26477@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Viplov Sahu",
    "roll": "B26478",
    "phone": "9340696641",
    "email": "b26478@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vishal Dwivedi",
    "roll": "B26479",
    "phone": "6005257879",
    "email": "b26479@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Vrinda Sethi",
    "roll": "B26360",
    "phone": "8178862290",
    "email": "b26360@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Warren Anthony Castelino",
    "roll": "B26377",
    "phone": "9987968806",
    "email": "b26377@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Y Rushikesh Kumar",
    "roll": "B26418",
    "phone": "7993274325",
    "email": "b26418@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Yash Manoj Patil",
    "roll": "B26453",
    "phone": "9145135230",
    "email": "b26453@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Yashaswi Choudhary",
    "roll": "B26419",
    "phone": "9521164990",
    "email": "b26419@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Yashvi Goyal",
    "roll": "B26420",
    "phone": "9830875248",
    "email": "b26420@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  },
  {
    "name": "Zaid Alam",
    "roll": "B26480",
    "phone": "8697544132",
    "email": "b26480@astra.xlri.ac.in",
    "batch": "BM 2026-28"
  }
];
