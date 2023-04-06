import React from 'react';
import ReactDOM from 'react-dom/client';

// Tasks
import EmployeeTable from './components/task1/EmployeeTable' // Task 1
import Test from './components/task2/Test'; // Task 2
import Quiz from './components/task3/Quiz' // Task 3
import Quiz1 from './components/task4/Quiz1'; // Task 4
import Quiz2 from './components/task5/Quiz2'; // Task 5
import TodoList from './components/task6/TodoList'; // Task 6

// for task 3
const questions = [
  { question: "2 + 2 = ?", answer: "4" },
  { question: "Коли народився Шевченко?", answer: "1814" },
  { question: "Який століття зараз триває?", answer: "21" },
];

// for task 4
const questions1 = [
  {
    question: "Яка столиця України?",
    answers: ["Львів", "Київ", "Харків"],
    answer: "Київ",
  },
  {
    question: "Яке найбільше озеро в світі?",
    answers: ["Каспійське", "Байкал", "Суперіор"],
    answer: "Байкал",
  },
  {
    question: "Який найвищий горб світу?",
    answers: ["Еверест", "Кіліманджаро", "Аконкагуа"],
    answer: "Еверест",
  },
];

// for task 5
const questions2 = [
  {
    question: "Скільки буде 2 + 2?",
    answers: ["4", "5", "6", "7"],
    answer: ["4"],
  },
  {
    question: "Яка столиця України?",
    answers: ["Львів", "Одеса", "Київ", "Харків"],
    answer: ["Київ"],
  },
  {
    question: "Що таке React?",
    answers: ["JavaScript бібліотека", "JavaScript фреймворк", "Мова програмування"],
    answer: ["JavaScript бібліотека"],
  },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeTable/>
    <Test/>
    <Quiz questions = { questions }/>
    <Quiz1 questions ={ questions1 }/>
    <Quiz2 questions ={ questions2 }/>
    <TodoList/>
  </React.StrictMode>
);