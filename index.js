let balance = 1000;

while (true) {
  const choice = prompt(
    "Выберите действие:\n1 — Проверить баланс\n2 — Пополнить счет\n3 — Снять наличные\n0 — Выйти"
  );

  if (choice === "0") {
    alert("Спасибо за визит!");
    break;
  } else if (choice === "1") {
    alert("Ваш баланс: " + balance);
  } else if (choice === "2") {
    const amount = Number(prompt("Введите сумму пополнения:"));
    balance += amount;
    alert("Счет пополнен. Новый баланс: " + balance);
  } else if (choice === "3") {
    const amount = Number(prompt("Введите сумму для снятия:"));
    if (amount > balance) {
      alert("Недостаточно средств!");
    } else {
      balance -= amount;
      alert("Выдано: " + amount + "\nОстаток на счете: " + balance);
    }
  } else {
    alert("Неверная операция!");
  }
}