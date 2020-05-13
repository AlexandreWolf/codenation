const formatDate = (date) => {
  let toFormat = new Date(date);

  let options = { year: "numeric", month: "2-digit", day: "2-digit" };

  return toFormat.toLocaleDateString("pt-BR", options);
};

export default formatDate;