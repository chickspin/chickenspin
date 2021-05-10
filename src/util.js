import { v4 as uuidv4 } from "uuid";

function musicLibrary() {
  return [
    {
      name: "The Less I Know The Better",
      cover: "https://i.ibb.co/C1Rbq97/TLIKTB.png",
      artist: "Tame Impala",
      audio:
        "https://drive.google.com/u/1/uc?id=1x92CHwAyFrC-gSdueiwqmizP6Exw62HJ&export=download",
      id: uuidv4(),
      active: true,
    },
    {
      name: "Buttercup",
      cover: "https://i.ibb.co/4pmgvXj/buttercup.jpg",
      artist: "Jack Stauber",
      audio:
        "https://drive.google.com/u/1/uc?id=1syVw8RI18vhEmEwXztf1UHSF4fxcmYCp&export=download",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Them Changes",
      cover: "https://i.ibb.co/8YKQywp/themchanges.jpg",
      artist: "Thundercat",
      audio:
        "https://drive.google.com/u/1/uc?id=1lQdevsxXo3N1Dqg40TZNdttexQBCbEvc&export=download",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Stayin Alive",
      cover: "https://i.scdn.co/image/ab67616d00001e02324045726c4b0deb6cb7c875",
      artist: "Bee Gees",
      audio:
        "https://drive.google.com/u/1/uc?id=1mgTvK1iZkyW9HL7CRXAakDsvzQCpthwR&export=download",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Blurred Lines",
      cover: "https://i.scdn.co/image/ab67616d00001e02bf4733171d920f2a62b24713",
      artist: "Robin Thicke",
      audio:
        "https://drive.google.com/u/1/uc?id=1_v4LsniVbZ4YIF6OPuPy_fDBzfpGYtVK&export=download",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default musicLibrary;
