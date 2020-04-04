require('dotenv').config();
import axios from 'axios';
import crypto from 'crypto';
import FormData from 'form-data'
import fs from 'fs';
import getCipher from './utils/getCipher';

const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.TOKEN;

const saveFile = (objeto) => {
  const objetoString = JSON.stringify(objeto);
  fs.writeFileSync('answer.json', objetoString);
};

const getData = async () => {
  return await axios
    .get(`${BASE_URL}/generate-data?token=${TOKEN}`)
    .then((response) => {
      const { data } = response;

      if (!data)
        return console.log(
          `O servidor não respondeu corretamente a solicitação, tente novamente mais tarde!`
        );
      return data;
    });
};

const readFile = () => {
  const data = fs.readFileSync('answer.json');
  return JSON.parse(data);
};

const setDecrypt = () => {
  const data = readFile();
  const { cifrado, numero_casas } = data;
  const decripted = getCipher(cifrado, numero_casas);
  data['decifrado'] = decripted;
  saveFile(data);
};

const toSha1 = (string) =>
  crypto.createHash('sha1').update(string).digest('hex');

const setSha1 = () => {
  const data = readFile();
  const { decifrado } = data;
  const sha1 = toSha1(decifrado);
  data['resumo_criptografico'] = sha1;
  saveFile(data);
};

const submit = () => {
  const form = new FormData();
  const file = fs.readFileSync('answer.json');
  form.append('answer', file, 'answer.json');
  axios
    .post(`${BASE_URL}/submit-solution?token=${TOKEN}`, form, {
      headers: form.getHeaders(),
    })
    .then((result) => {
      console.log(result.data);
    }).catch(err => console.log(err));
};

getData().then((response) => {
  // salva resposta inicial
  saveFile(response);

  // decifra e atualiza
  setDecrypt();

  // gera resumo criptográfico e atualiza
  setSha1();

  // envia submissão
  submit();
});
