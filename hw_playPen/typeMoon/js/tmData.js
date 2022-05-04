//accessing nested data
const character = {
  loadMasters: [
    {
      id: "1",
      name: "Rin Tohsaka",
      magecraft: "Jewel",
      switch: "a knife stabbing her heart",
      status: "Master",
      appearsIn: [
        "Fate/Stay night",
        "Fate/Unlimited Bladeworks",
        "Fate/Zero",
        "Fate/ Extra CCC",
      ],
    },
    {
      id: "2",
      name: "Shirou Emiya",
      magecraft: "unlimited blade works",
      switch: "a gun's hammer being fired",
      status: "Master",
      appearsIn: [
        "Fate/Stay night",
        "Fate/Unlimited Bladeworks",
        "Fate/Zero",
        "Fate/ Extra CCC",
        "Fate/ Grand Order",
      ],
    },
    {
      id: "3",
      name: "Sakura Matou",
      magecraft: "imaginary numbers",
      switch: "n/a",
      status: "Master",
      appearsIn: [
        "Fate/Stay night",
        "Fate/Zero",
        "Fate/ Extra",
        "Fate/Grand order",
      ],
    },
  ],
  //new array of objects for servants
};
/* Masters have servants, depending on the series. 
the type of servant may be the same but their trueNames differ */
