const validateCPF = (string) => {
  const cpf = string.replace(/\D/g, '');

  if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let isValidCpf = true;

  [9, 10].forEach((j) => {
    let soma = 0;
    let result;
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach((e, i) => {
        soma += parseInt(e, 10) * (j + 2 - (i + 1));
      });
    result = soma % 11;
    result = result < 2 ? 0 : 11 - result;
    if (parseInt(result, 10) !== parseInt(cpf.substring(j, j + 1), 10)) {
      isValidCpf = false;
    }
  });

  return isValidCpf;
};

export default validateCPF;
