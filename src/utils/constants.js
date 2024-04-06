export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGQ2Nzk0OGE5NTUwZTMxMWY2ZGI1NjUxYmJkNjNiYSIsInN1YiI6IjY1ZjM0MDQwMmZkZWM2MDE3MDIyMTQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cBP4mmhc84MVSAFlEnERTjIzeBu2qiH3Wa1KFpEQas4'
  }
};

const allowedLanguages = [
  {
     name:"English",
     code:"En-us"
  },
  {
    name:"Hindi",
    code:"hindi"
 },
 {
  name:"Spanish",
  code:"spanish"
}
];

export default allowedLanguages;


