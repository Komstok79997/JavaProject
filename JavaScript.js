jQuery( document ).ready( function() {//тут пишемо код
    jQuery('button#one').on('click', function() {
        let x, y, z, f;
        x = Number(jQuery('#x1').val());
        y = Number(jQuery('#x2').val());
        z= y * x;
        f = x > y ? x : y;


        if(x<=0|| y<=0) {
            alert('Please enter a correct number');
        }
        else if(z<=0){
            alert('Something went wrong');
        }
        else {
            alert('Congratulations!'+'\n'+"Площа прямокутника-" + z );
            jQuery('#result-1').html("Y= " + z + "\n"  );
        }

         if(x<y){
            alert('x<y');
        }
        else if(x>y){
            alert('x>y');
        }
        else if (y === 0 || x === 0){
            alert('error');
         }
    else {
            alert('x = y =' + f);
         }
    //event.preventDefault(); Вона скасовує стандартну дію браузера, яка мала б статися після кліку.
    });

    jQuery('button#two').on('click', function() {

        let j = Number(jQuery('#y1').val());
        switch (j) {
            case 1:
                outputText = "Це- " + j;
                break;
            case 2:
                outputText = "Це- " + j;
                break;
            default:
                outputText = "Без поняття";
        }
        jQuery('#result-2').html(outputText);
    })

        jQuery('input').on('input', function(){
            let x, y;

            x = Number(jQuery('#x1').val());
            y = Number(jQuery('#x2').val());

            let b= x+(Math.pow(y, 2)*53);
            if (b === 0) return;
            let c=y/b;
            let d=c*x;
            let g = Math.pow(Math.sin(d), 2);//final sinus


            jQuery('#result').html("g = sin^2((y * x1) / (x1 + 53 * x2^2)) = <b>" + g + "</b>");
        });

    });
//Початок Л11
//початок таймера
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("November 1 2026 00:00:00").getTime();

const timer = function(interval = 1000) {
    if (!Days || !Hours || !Minutes || !Seconds) {
        return;
    }
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    // Функція для Завдання 4 (повертає значення)
    function formatTime(unit) {
        return unit < 10 ? "0" + unit : unit;
    }

    // ВИПРАВЛЕННЯ: Викликаємо formatTime(), щоб функція реально відпрацювала
    Days.innerHTML = formatTime(days);
    Hours.innerHTML = formatTime(hours);
    Minutes.innerHTML = formatTime(minutes);
    Seconds.innerHTML = formatTime(seconds);

    if (distance < 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
};
setInterval(timer, 1000);
// закінчення таймера кінець Л11


//Початок Л12

let n = Array.from({ length: 10 }, (_, i) => i + 1);
let joh = n.map(num => num * (num+1)/2);
console.log(joh.join('  '));


let ubi = [1,2,3,4,5,6,7,8,9,10];
let doubled = ubi.map(num => num * num);
console.log(doubled);
let N = "N";
let minzn = Math.min(...doubled);
doubled[9] = minzn;

doubled[doubled.indexOf(minzn)] = 3 + N;

console.log(doubled);
//передостаннє завдання
let ub = [1, 2, -3, 4, -5, 6, -7, 8, 9, -10];
let C = 4;

let sum = 0;
let count = 0;
let product = 1;
let hasNonPos = false; // Прапорець, чи знайшли взагалі підходящі числа для множення

for (let i = 0; i < ub.length; i++) {

    // 1. Шукаємо числа, нерівні С
    if (ub[i] !== C) {
        sum += ub[i];
        count++;
    }

    // 2. Шукаємо не додатні числа (<= 0) на парних місцях (індекси 0, 2, 4, 6, 8)
    if (i % 2 === 0 && ub[i] <= 0) {
        product *= ub[i];
        hasNonPos = true;
    }
}

// Вираховуємо середнє арифметичне (щоб не ділити на 0)
let avg = count > 0 ? sum / count : 0;

// Якщо потрібних чисел для множення не було, виводимо 0 (або текст)
if (!hasNonPos) product = 0;

console.log("Середнє арифметичне (!= C):", avg);
console.log("Добуток не додатних на парних місцях:", product);

let fruits = ['apple', 'pineapple', 'mango', 'melon', 'grape'];
let citrus = ['orange', 'lemon', 'lime'];

console.log("1. Масив fruits: " + fruits.join(', ') + "<br>");

console.log("2. Масив citrus: " + citrus.join(', ') + "<br>");

// 3. об'єднаний масив fruits
fruits = fruits.concat(citrus);
console.log("3. Об'єднаний масив fruits: " + fruits.join(', ') + "<br>");

// 4. масив fruits, в якому після mango вставлено нові елементи
let mangoIdx = fruits.indexOf('mango');
fruits.splice(mangoIdx + 1, 0, 'pear', 'cherry', 'plum', 'raspberry', 'strawberry');
console.log("4. Вставлено після mango: " + fruits.join(', ') + "<br>");

// 5. масив fruits, в якому видалено останні 3 елементи
fruits.splice(-3);
console.log("5. Видалено останні 3 елементи: " + fruits.join(', ') + "<br>");

// 6. виведіть відсортований в алфавітному порядку масив fruits
fruits.sort();
console.log("6. Алфавітний порядок: " + fruits.join(', ') + "<br>");

// 7. виведіть масив fruits у зворотному алфавітному порядку
// (оскільки він вже відсортований, достатньо просто його перевернути)
fruits.reverse();
console.log("7. Зворотний алфавітний: " + fruits.join(', ') + "<br>");

// 8. виведіть масив fruits, відсортований за довжиною слів
fruits.sort((a, b) => a.length - b.length);
console.log("8. За довжиною слів: " + fruits.join(', ') + "<br>");
//                                                                                                   кінець Л12

//

function thisis() {
    console.log("Hello world!");
}

//перевірка введених даних у формах 15Л
document.addEventListener('DOMContentLoaded', function() { // Запускаємо скрипт лише після побудови DOM
    const form = document.querySelector('form[name="ContactsForm"]');
    const modal = document.getElementById("modal");
    const closeBtns = document.querySelectorAll(".close-modal-btn");


    if (!form) {
        return; // якщо нема форм - зупиняється
    }


    //Обробка відправки форми
    form.addEventListener('submit', function(event) {
        event.preventDefault();


        const username = document.forms["ContactsForm"]["username"].value;
        const userlogin = document.forms["ContactsForm"]["userlogin"].value;
        const tel = document.forms["ContactsForm"]["tel"].value;
        const email = document.forms["ContactsForm"]["email"].value;

        // 1. Перевірка на порожні поля
        if (username === "" || userlogin === "" || tel === "" || email === "") {
            alert("Будь ласка, заповніть усі обов'язкові поля.");
            return; // Зупиняємо функцію, модалка не відкриється
        }
        // 2. Дозволяємо українську та англійську розкладки
        const namePattern = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ' \-]+$/;
        if (!namePattern.test(username)) {
            alert("Помилка: Ім'я може містити лише літери!");
            return;
        }
        if (!namePattern.test(userlogin)) {
            alert("Помилка: Прізвище може містити лише літери!");
            return;
        }
        // 3. Перевірка телефону
        const phonePattern = /^\+380\d{9}$/;
        if (!phonePattern.test(tel)) {
            alert("Некоректний номер телефону!\nФормат має бути: +380XXXXXXXXX (без пробілів).");
            return;
        }
        // 4. Перевірка пошти
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@a-zA-Z]*[a-zA-Z]+$/;
        if (!emailPattern.test(email)) {
            alert("Некоректний формат електронної пошти.");
            return;
        }
        //Усі перевірки пройдені!
        modal.classList.remove("hidden");
    });

    closeBtns.forEach(button => {
        button.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            modal.classList.add("hidden");
        }
    });
});
// далі 5- ті завдання
// ==========================================================================
// БЛОК 1: TODO-СПИСОК (ІНТЕРАКТИВНИЙ ТРЕКЕР)
// ==========================================================================
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = [];
let currentFilter = "all";

function renderTasks() {
    if (!taskList) return; // Захист: якщо немає списку, не намагаємося його малювати

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter((task) => !task.done);
    }

    if (currentFilter === "done") {
        filteredTasks = tasks.filter((task) => task.done);
    }

    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = task.done ? "done" : "";

        const span = document.createElement("span");
        span.textContent = task.text;

        const doneBtn = document.createElement("button");
        doneBtn.textContent = task.done ? "Скасувати" : "Виконано";
        doneBtn.addEventListener("click", () => toggleTask(task.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(span);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    if (taskCounter) {
        taskCounter.textContent = `Усього завдань: ${tasks.length}`;
    }
}

function addTask() {
    if (!taskInput) return;
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Введіть текст завдання");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        done: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return {
                ...task,
                done: !task.done
            };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}

//Вішаємо події ТІЛЬКИ якщо кнопки існують на поточній сторінці
if (addTaskBtn && taskInput) {
    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentFilter = button.dataset.filter;
            renderTasks();
        });
    });
}
//Л 15 3
//Л 15 3
const registerForm = document.getElementById("registerForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!email.validity.valid) {
            formMessage.textContent = "Введіть коректний email";
            formMessage.className = "error";
            return;
        }

        if (password.value.length < 6) {
            formMessage.textContent = "Пароль має містити не менше 6 символів";
            formMessage.className = "error";
            return;
        }

        formMessage.textContent = "Реєстрація успішна!";
        formMessage.className = "success";
        registerForm.reset();
    });
}


//

//  КАРТКИ ІНВЕСТОРА- 4Л
document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll(".detailsBtn");

    // querySelectorAll безпечний: якщо карток немає, він просто нічого не зробить
    detailsButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Знаходимо найближчу до кнопки картку
            const card = button.closest(".card");
            if (!card) return; // Захист на випадок помилки в HTML

            // Всередині цієї картки шукаємо прихований текст
            const details = card.querySelector(".details");
            if (!details) return; // Захист

            // Перемикаємо клас hidden (якщо є - видаляємо, якщо немає - додаємо)
            details.classList.toggle("hidden");

            // Змінюємо текст самої кнопки
            if (details.classList.contains("hidden")) {
                button.textContent = "Детальніше";
            } else {
                button.textContent = "Згорнути";
            }
        });
    });
});

//далі інше, 6 Зав

/*ші
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatHistory = document.getElementById('chatHistory');

    if (!chatInput || !chatSendBtn || !chatHistory) return;

    // Зберігаємо системний промпт. Він ЗАВЖДИ має залишатися на індексі 0.
    let conversationContext = [
        {
            role: 'system',
            content: 'Ти дружня, весела та цікава, з рисами характеру цундере співрозмовниця жіночої статі. Спілкуйся українською мовою вільно, використовуй гумор, використовуй емодзі, пиши розгорнуто та підтримуй цікавий діалог на будь-які теми.'
        }
    ];

    // Встановлюємо ліміт пам'яті (наприклад, 10 останніх повідомлень: 5 ваших, 5 від ШІ)
    const MAX_HISTORY = 10;

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-message');
        msgDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
        msgDiv.textContent = text;
        chatHistory.appendChild(msgDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // НОВА ФУНКЦІЯ: "Обрізка" контексту для захисту від амнезії та переповнення VRAM
    function pruneContext() {
        // Якщо історія перевищує ліміт (MAX_HISTORY + 1 системний промпт)
        if (conversationContext.length > MAX_HISTORY + 1) {
            const systemPrompt = conversationContext[0]; // Рятуємо системний промпт
            const recentMessages = conversationContext.slice(-MAX_HISTORY); // Беремо тільки свіжі репліки
            conversationContext = [systemPrompt, ...recentMessages]; // Зшиваємо назад
        }
    }

    async function sendToAI() {
        const userText = chatInput.value.trim();
        if (userText === "") return;

        appendMessage(userText, 'user');
        chatInput.value = '';
        chatSendBtn.disabled = true;

        conversationContext.push({ role: 'user', content: userText });

        // Очищаємо зайве ПЕРЕД відправкою запиту
        pruneContext();

        const msgDiv = document.createElement('div');
        msgDiv.classList.add('chat-message', 'ai-message');
        chatHistory.appendChild(msgDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;

        let fullAiResponse = "";

        try {
            const response = await fetch('http://localhost:11434/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'gemma4:e2b-it-q4_K_M ', // Замінено на 9B версію
                    messages: conversationContext,
                    stream: true
                })
            });

            if (!response.ok) throw new Error('Помилка сервера Ollama');

            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n').filter(line => line.trim() !== '');

                for (const line of lines) {
                    const parsed = JSON.parse(line);
                    if (parsed.message && parsed.message.content) {
                        fullAiResponse += parsed.message.content;
                        msgDiv.innerHTML = fullAiResponse.replace(/\n/g, '<br>');
                        chatHistory.scrollTop = chatHistory.scrollHeight;
                    }
                }
            }

            conversationContext.push({ role: 'assistant', content: fullAiResponse });

            // Очищаємо зайве ПІСЛЯ додавання відповіді
            pruneContext();

        } catch (error) {
            msgDiv.innerHTML = '❌ Помилка з\'єднання. Перевірте, чи запущена Ollama.';
            conversationContext.pop();
            console.error(error);
        } finally {
            chatSendBtn.disabled = false;
            chatInput.focus();
        }
    }

    chatSendBtn.addEventListener('click', sendToAI);
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') sendToAI();
    });
});
*/