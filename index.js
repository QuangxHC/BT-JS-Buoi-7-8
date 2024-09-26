let arr_input = [];
let newArr = [];

document.getElementById("btnThemSo").onclick = function () {
  let item = document.getElementById("inputSo").value * 1;
  arr_input.push(item);
  newArr.push(item);
  document.getElementById("arrayDisplay").innerHTML = `
  <h6>${arr_input}</h6>`;
};

function getNum(arrNum, pos_type = true) {
  let arrPos = arrNum.filter(function (number) {
    if (pos_type) {
      return number > 0;
    } else {
      return number < 0;
    }
  });
  return arrPos;
}

function sortMinToMax(arrNum) {
  let sortedArr = arrNum.sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

function checkPrimeNumber(number) {
  let count = 0;
  if (number < 1) {
    return false;
  }
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      count += 1;
    }
  }
  return count == 1;
}

function getInteger(arrNum) {
  let arrIn = arrNum.filter(function (number) {
    return number % 1 == 0;
  });
  return arrIn;
}

function sumPosNum(arrPos) {
  let sum = 0;
  for (number of arrPos) {
    sum += number;
  }
  return sum;
}

document.getElementById("tinhTong").onclick = function () {
  let sample_input = [...arr_input];
  let posArr = getNum(sample_input);
  let sum = sumPosNum(posArr);
  document.getElementById("hienThiTong").innerHTML = ` <h6>${sum}</h6>`;
};

document.getElementById("demSo").onclick = function () {
  let sample_input = [...arr_input];
  let posArr = getNum(sample_input);
  document.getElementById(
    "hienThiTongSoDuong"
  ).innerHTML = `<h6>${posArr.length}</h6> `;
};

document.getElementById("timMin").onclick = function () {
  let sample_input = [...arr_input];
  let min = sortMinToMax(sample_input)[0];
  document.getElementById("hienThiSoNhoNhat").innerHTML = `<h6>${min}</h6>`;
};

document.getElementById("timDuongNhoNhat").onclick = function () {
  let sample_input = [...arr_input];
  let min = sortMinToMax(getNum(sample_input))[0];
  document.getElementById(
    "hienThiSoDuongNhoNhat"
  ).innerHTML = `<h6>${min}</h6>`;
};

function lastEvenNum(arrNum) {
  for (let i = arrNum.length - 1; i >= 0; i--) {
    if (arrNum[i] % 2 == 0) {
      return arrNum[i];
    }
  }
  return -1;
}
document.getElementById("timSoChan").onclick = function () {
  let sample_input = [...arr_input];
  let even_num = lastEvenNum(sample_input);
  document.getElementById("hienThiSoChan").innerHTML = `<h6>${even_num}</h6>`;
};

function swapNum(arrNum, position1, position2) {
  let temp = arrNum[position2];
  arrNum[position2] = arrNum[position1];
  arrNum[position1] = temp;
  return arrNum;
}
document.getElementById("swap").onclick = function () {
  let sample_input = [...arr_input];
  let pos1 = document.getElementById("soThu1").value * 1;
  let pos2 = document.getElementById("soThu2").value * 1;
  let newArr = swapNum(sample_input, pos1, pos2);
  document.getElementById("hienThiChuoiMoi").innerHTML = `<h6>${newArray}</h6>`;
};

document.getElementById("sapXep").onclick = function () {
  let sample_input = [...arr_input];
  let sortedArr = sortMinToMax(sample_input);
  document.getElementById(
    "hienThiChuoiTang"
  ).innerHTML = `<h6>${sortedArr}</h6>`;
};

function firstPrimeNum(arrNum) {
  for (index in arrNum) {
    if (checkPrimeNumber(arrNum[index])) {
      return arrNum[index];
    }
  }
  return -1;
}
document.getElementById("timSoNguyenTo").onclick = function () {
  let sample_input = [...arr_input];
  let num = firstPrimeNum(sample_input);
  document.getElementById("hienThiSoNguyenTo").innerHTML = `<h6>${num}</h6>`;
};

document.getElementById("themSoThuc").onclick = function () {
  let item = document.getElementById("inputSoThuc").value * 1;
  newArr.push(item);
  document.getElementById("hienThiNguyenThuc").innerHTML = `<h6>${newArr}</h6>`;
};

document.getElementById("demSoNguyen").onclick = function () {
  let num = getInteger(newArr).length;
  document.getElementById("hienThiSoNguyen").innerHTML = `<h6>${num}</h6>`;
};

function comparePosNa(arrNum) {
  let numPos = getNum(arrNum).length;
  let numNe = getNum(arrNum, false).length;
  if (numPos > numNe) {
    return "So luong so duong lon hon";
  } else if (numPos < numNe) {
    return "So luong so am lon hon";
  } else {
    return "So luong so am va so duong bang nhau";
  }
}
document.getElementById("soSanh").onclick = function () {
  let sample_input = [...arr_input];
  document.getElementById("hienThiThongTin").innerHTML = `<h6>${comparePosNa(
    sample_input
  )}</h6>`;
};
