let numberArray = [];

function addNumber() {
  const number = parseInt(document.getElementById("numberInput").value);
  if (!isNaN(number)) {
    numberArray.push(number);
    document.getElementById("arrayOutput").innerText =
      "Mảng: " + numberArray.join(", ");
  }
}

function resetArray() {
  numberArray = [];
  document.getElementById("arrayOutput").innerText = "Mảng đã được xóa.";
  document.getElementById("resultOutput").innerText = "";
}

function sumPositive() {
  const sum = numberArray.filter((n) => n > 0).reduce((a, b) => a + b, 0);
  document.getElementById("resultOutput").innerText = "Tổng số dương: " + sum;
}

function countPositive() {
  const count = numberArray.filter((n) => n > 0).length;
  document.getElementById("resultOutput").innerText = "Đếm số dương: " + count;
}

function findMin() {
  const min = Math.min(...numberArray);
  document.getElementById("resultOutput").innerText = "Số nhỏ nhất: " + min;
}

function findMinPositive() {
  const positives = numberArray.filter((n) => n > 0);
  const minPositive = Math.min(...positives);
  document.getElementById("resultOutput").innerText =
    "Số dương nhỏ nhất: " +
    (minPositive !== Infinity ? minPositive : " Không có số dương");
}

function findLastEven() {
  const evens = numberArray.filter((n) => n % 2 === 0);
  const lastEven = evens.length ? evens[evens.length - 1] : "Không có số chẵn";
  document.getElementById("resultOutput").innerText =
    "Số chẵn cuối cùng: " + lastEven;
}

function swapPositions() {
  if (numberArray.length >= 2) {
    [numberArray[0], numberArray[numberArray.length - 1]] = [
      numberArray[numberArray.length - 1],
      numberArray[0],
    ];
    document.getElementById("resultOutput").innerText =
      "Mảng sau khi đổi chỗ: " + numberArray.join(", ");
  } else {
    document.getElementById("resultOutput").innerText =
      "Cần ít nhất 2 số để đổi chỗ. ";
  }
}

function sortArray() {
  numberArray.sort((a, b) => a - b);
  document.getElementById("resultOutput").innerText =
    "Mảng sau khi sắp xếp tăng dần: " + numberArray.join(", ");
}

function findFirstPrime() {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  const firstPrime = numberArray.find(isPrime);
  document.getElementById("resultOutput").innerText =
    "Số nguyên tố đầu tiên: " +
    (firstPrime !== undefined ? firstPrime : "Không có số nguyên tố");
}

function countIntegers() {
  const count = numberArray.length;
  document.getElementById("resultOutput").innerText = "Đếm số nguyên: " + count;
}

function compareNegativePositive() {
  const countPositive = numberArray.filter((n) => n > 0).length;
  const countNegative = numberArray.filter((n) => n < 0).length;
  document.getElementById(
    "resultOutput"
  ).innerText = `Số dương: ${countPositive}, Số âm: ${countNegative}`;
}
