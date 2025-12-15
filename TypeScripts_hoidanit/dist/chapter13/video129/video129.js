"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = { data: "huhu" };
const b = { data: 123 };
const fetchDataUser = async () => {
    const fetchData = await fetch("http://localhost:8000/users");
    const dataAPI = await fetchData.json();
    const result = {
        status: 200,
        data: dataAPI
    };
};
